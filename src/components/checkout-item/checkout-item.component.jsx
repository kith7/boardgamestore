import "./checkout-item.styles.scss";
import { useContext } from "react";
import React from "react";
import { CartContext } from "../../contexts/cart.context";

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  const { clearItemFromCart, addItemToCart, removeItemFromCart } =
    useContext(CartContext);
  const clearItemHandler = () => clearItemFromCart(cartItem);
  return (
    <div className='checkout-item-container'>
      <div className='image-container'>
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className='name'>{name}</span>
      <span className='quantity'>
        <div className='arrow' onClick={() => removeItemFromCart(cartItem)}>
          -
        </div>
        <span className='value'>{quantity}</span>
        <div className='arrow' onClick={() => addItemToCart(cartItem)}>
          +
        </div>
      </span>
      <span className='price'>{price}</span>
      <div className='remove-button' onClick={clearItemHandler}>
        x
      </div>
    </div>
  );
};

export default CheckoutItem;
