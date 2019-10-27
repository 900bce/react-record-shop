import React, { Component } from "react";
import "./App.css";
import { Switch, Route } from 'react-router-dom';
import { ProductProvider } from './Context';
import Navbar from "./components/Navbar";
import ProductList from './components/ProductList';
import Detail from './components/Detail';
import Cart from './components/Cart/Cart';
import Modal from './components/Modal';
import Default from './components/Default';


class App extends Component {
  render() {
    return (
      <ProductProvider>
        <Navbar />
        <Switch>
          <Route exact path="/" component={ProductList} />
          <Route path="/detail" component={Detail} />
          <Route path="/cart" component={Cart} />
          <Route component={Default} />
        </Switch>
        <Modal />
      </ProductProvider>
    );
  }
}

export default App;
