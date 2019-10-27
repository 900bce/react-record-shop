import React from "react";
import { ProductConsumer } from '../../Context';
import Title from '../Title';
import CartHeader from "./CartHeader";
import CartList from "./CartList";
import CartTotal from "./CartTotal";
import styled from 'styled-components';

const Cart = () => {
  return (
    <section>
      <Title title="購物籃" />
      <ProductConsumer>
        {value => {
          const { cart } = value;
          // cart is not empty
          if (cart.length > 0) {
            return (
              <CartContainer>
                <CartHeader />
                <CartList value={value} />
                <CartTotal value={value} />
              </CartContainer>
            );
          } else {
            // cart is empty
            return <h2 style={{"textAlign": "center"}}>尚未加入商品</h2>
          }
        }}
      </ProductConsumer>
    </section>
  );
};

export default Cart;


const CartContainer = styled.div`
  padding: 3rem;
  margin: 0 auto;
  text-align: center;

  .cart-header,
  .cart-item {
    display: flex;
    align-items: center;
    margin-bottom: 1.5rem;
  }

  .cart-header {
    border-top: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
    padding: 1rem 0;
  }

  .cart__column {
    width: 15%;

    img {
      width: 100%;
    }

    &--1 {
      max-width: 5rem;
    }
  }

  .btn-count {
    border: 1px solid #000;
    padding: 0.5rem;
    font-size: 0.8rem;
    margin: 2px;

    &:hover {
      color: #fff;
      background: #000;
    }
  }

  .btn-del {
    color: #990000;

    &:hover {
      cursor: pointer;
      color: #dd0000;
    }
  }

  .cart-total {
    font-size: 1.2rem;
    margin: 1rem;
  }

  .checkout {
    margin: 1rem;
    padding: 0.2rem 0.5rem;
    background: transparent;
    font-size: 1rem;
    cursor: pointer;
    border-radius: 5px;
    border: 2px solid #2a2a72;
    color: #2a2a72;
    text-decoration: none;

    &:focus {
      outline: none;
    }
  }
`;
