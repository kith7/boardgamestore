import { Outlet } from "react-router-dom";
import { Fragment, useContext } from "react";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../store/user/user.selector";

import {
  NavigationContainer,
  LogoContainer,
  NavLinksContaier,
  NavLink,
} from "./navigation.styles";
import { ReactComponent as Logo } from "../../assets/crown.svg";
// import { UserContext } from "../../contexts/user.context";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CardDropDown from "../../components/cart-dropdown/cart-dropdown.component";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import { CartContext } from "../../contexts/cart.context";
const Navigation = () => {
  // const { currentUser } = useContext(UserContext);
  const currentUser = useSelector(selectCurrentUser);
  const { isCartOpen } = useContext(CartContext);
  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to='/'>
          <Logo className='logo' />
        </LogoContainer>
        <NavLinksContaier>
          <NavLink to='/shop'>Shop</NavLink>
          {currentUser ? (
            <NavLink as='span' onClick={signOutUser}>
              Sign out
            </NavLink>
          ) : (
            <NavLink to='/authenticate'>Sign in</NavLink>
          )}
          <CartIcon />
        </NavLinksContaier>
        {isCartOpen && <CardDropDown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
