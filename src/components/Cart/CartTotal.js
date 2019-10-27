import React from 'react';

const CartTotal = ({ value }) => {
  return (
    <React.Fragment>
      <div className="cart-total">總計：＄{value.cartTotal}</div>
      <a href="/checkout" className="checkout">
        結帳去 &rarr;
      </a>
    </React.Fragment>
  );
}

export default CartTotal;