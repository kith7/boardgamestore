import React from "react";
import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import {
  CardDropDownContainer,
  EmptyMessage,
  CartItems,
} from "./cart-dropdown.styles.jsx";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import { useNavigate } from "react-router-dom";

const CardDropDown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();
  const goToCheckoutHandler = () => {
    navigate("/checkout");
  };
  return (
    <CardDropDownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((item) => {
            return <CartItem key={item.id} cartItem={item} />;
          })
        ) : (
          <EmptyMessage>Cart empty</EmptyMessage>
        )}
        <Button onClick={goToCheckoutHandler}>Check out</Button>
      </CartItems>
    </CardDropDownContainer>
  );
};

export default CardDropDown;
