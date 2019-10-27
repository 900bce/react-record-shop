import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ProductConsumer } from "../Context";

const Product = ({ album }) => {
  return (
    <ProductConsumer>
      {value => (
        <AlbumBox className="album">
          <Link to="/detail" onClick={() => value.handleDetail(album.id)}>
            <div className="album__img-container">
              <img src={album.img} alt="album" />
            </div>
            <div className="album__title">{album.title}</div>
          </Link>
          <div className="album__artist">{album.artist}</div>
          <div className="album__bottom">
            <p className="price">$: {album.price}</p>
            <button
              disabled={album.inCart ? true : false} // disable button if album is in cart.
              onClick={() => value.addToCart(album.id)}
            >
              {album.inCart ? "已加入" : "購買"}
            </button>
          </div>
        </AlbumBox>
      )}
    </ProductConsumer>
  );
};

export default Product;


const AlbumBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid #ddd;
  max-width: 14rem;
  margin: 0.5rem;
  padding: 1rem;
  color: #444;
  transition: box-shadow 0.3s;

  &:hover {
    box-shadow: 3px 3px 5px #ccc;

    img {
      transform: scale(1.1);
    }
  }

  a {
    text-decoration: none;
    color: #444;

    &:hover {
      text-decoration: underline;
      color: #000;
    }
  }

  .album__img-container {
    width: 100%;
    height: auto;
    overflow: hidden;

    img {
      width: 100%;
      transition: 0.3s;
    }
  }

  .album__bottom {
    display: flex;
    justify-content: space-between;

    button {
      background-color: orange;
      color: #fff;
      font-size: 0.8rem;
      padding: 3px 6px;
      border-radius: 3px;

      &:hover {
        cursor: pointer;
        filter: brightness(1.1);
      }

      &:focus {
        outline: none;
      }
    }
  }
`;

