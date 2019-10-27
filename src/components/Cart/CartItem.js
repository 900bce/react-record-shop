import React from 'react';

const CartItem = ({ item, value }) => {
  return (
    <div className="cart-item">
      <div className="cart__column cart__column--1">
        <img src={item.img} alt="item" />
      </div>
      <div className="cart__column">{item.title}</div>
      <div className="cart__column">{item.artist}</div>
      <div className="cart__column">{item.price}</div>
      <div className="cart__column">
        <button
          className="btn-count"
          onClick={() => value.cartDecrement(item.id)}
        >
          -
        </button>
        <span className="btn-count">{item.count}</span>
        <button
          className="btn-count"
          onClick={() => value.cartIncrement(item.id)}
        >
          +
        </button>
      </div>
      <div className="cart__column">
        <i className="fas fa-trash btn-del" onClick={() => value.removeItem(item.id)} />
      </div>
      <div className="cart__column">{item.total}</div>
    </div>
  );
}

export default CartItem;
