import React, { Component } from 'react';
import { storedAlbums } from './data';

const ProductContext = React.createContext();

class ProductProvider extends Component {
  constructor() {
    super();
    this.state = {
      albums: [],
      detailAlbum: {},
      modalOpen: false,
      modalAlbum: {},
      cart: [],
      cartTotal: 0
    };
  }

  componentDidMount() {
    this.setAlbums()
  }

  setAlbums = () => {
    let tempAlbums = [];
    storedAlbums.forEach(item => {
      tempAlbums = [...tempAlbums, item];
    })
    this.setState({
      albums: tempAlbums
    });
  }

  getAlbum = id => {
    const album = this.state.albums.find(item => item.id === id);
    return album;
  };

  addToCart = id => {
    const albums = [...this.state.albums];
    const index = albums.indexOf(this.getAlbum(id));
    const album = albums[index];
    album.inCart = true;
    album.count = 1;
    album.total = album.price;

    this.setState(
      {
        cart: [...this.state.cart, album]
      },
      () => this.calcTotal()
    );
    this.openModal(id);
  };

  handleDetail = id => {
    const album = this.getAlbum(id);
    this.setState({
      detailAlbum: album
    });
  };

  openModal = id => {
    const album = this.getAlbum(id);
    this.setState({
      modalOpen: true,
      modalAlbum: album
    });
  };

  closeModal = () => {
    this.setState({
      modalOpen: false
    });
  };

  cartIncrement = id => {
    const tempCart = [...this.state.cart];
    const selectedAlbum = tempCart.find(item => item.id === id);
    const index = tempCart.indexOf(selectedAlbum);
    const album = tempCart[index];
    album.count++;
    album.total = album.count * album.price;

    this.setState(
      {
        cart: tempCart
      },
      () => this.calcTotal()
    );
  }

  cartDecrement = id => {
    const tempCart = [...this.state.cart];
    const selectedAlbum = tempCart.find(item => item.id === id);
    const index = tempCart.indexOf(selectedAlbum);
    const album = tempCart[index];
    album.count--;

    if(album.count === 0) {
      this.removeItem(id);
    } else {
      album.total = album.count * album.price;
      this.setState(
        {
          cart: tempCart
        },
        () => this.calcTotal()
      );
    }
  } 

  removeItem = id => {
    let tempAlbums = [...this.state.albums];
    let tempCart = [...this.state.cart];

    tempCart = tempCart.filter(item => item.id !== id);
    
    const index = tempAlbums.indexOf(this.getAlbum(id));
    tempAlbums[index].inCart = false;
    tempAlbums[index].count = 0;
    tempAlbums[index].total = 0;

    this.setState(
      {
        cart: tempCart,
        albums: tempAlbums
      },
      () => this.calcTotal()
    );
  }

  calcTotal = () => {
    let total = 0
    this.state.cart.map(item => total += item.total)
    this.setState({
      cartTotal: total
    })
  }

  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          addToCart: this.addToCart,
          handleDetail: this.handleDetail,
          openModal: this.openModal,
          closeModal: this.closeModal,
          cartIncrement: this.cartIncrement,
          cartDecrement: this.cartDecrement,
          removeItem: this.removeItem
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };