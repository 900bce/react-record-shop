import React from 'react';
import CartItem from './CartItem';

const CartList = ({ value }) => {
  return (
    value.cart.map(item => {
      return <CartItem key={item.id} item={item} value={value} />
    })
  )
}

export default CartList;