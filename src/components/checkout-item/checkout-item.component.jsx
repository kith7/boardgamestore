import "./checkout-item.styles.scss";
import React, { memo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectCartItems } from "../../store/cart/cart.selector";
import {
  addItemToCart,
  clearItemFromCart,
  removeItemFromCart,
} from "../../store/cart/cart.action";

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const clearItemHandler = () =>
    dispatch(clearItemFromCart(cartItems, cartItem));
  const addItemHandler = () => dispatch(addItemToCart(cartItems, cartItem));
  const removeItemHandler = () =>
    dispatch(removeItemFromCart(cartItems, cartItem));

  return (
    <div className='checkout-item-container'>
      <div className='image-container'>
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className='name'>{name}</span>
      <span className='quantity'>
        <div className='arrow' onClick={addItemHandler}>
          +
        </div>

        <span className='value'>{quantity}</span>
        <div className='arrow' onClick={removeItemHandler}>
          -
        </div>
      </span>
      <span className='price'>{price}</span>
      <div className='remove-button arrow' onClick={clearItemHandler}>
        x
      </div>
    </div>
  );
};

export default memo(CheckoutItem);
