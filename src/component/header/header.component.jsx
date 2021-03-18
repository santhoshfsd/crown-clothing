import React from "react";

import { auth } from "../../firebase/firebase.utils";

import { ReactComponent as Logo } from "../../asset/crown.svg";

import { connect } from "react-redux";

import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink,
} from "./header.styles";

import CartIcon from "./../cart-icon/cart-icon.components";

import CartDropdown from "./../cart-dropdown/cart-dropdown.component";

import { createStructuredSelector } from "reselect";

import { selectCartHidden } from "./../../redux/cart/cart.selectors";

import { selectCurrentUser } from "./../../redux/user/user.selector";
const Header = ({ currentUser, hidden }) => (
  <HeaderContainer>
    <LogoContainer to="/">
      <Logo className="logo" />
    </LogoContainer>
    <OptionsContainer className="options">
      <OptionLink className="option" to="/shop">
        SHOP
      </OptionLink>
      <OptionLink className="option" to="/shop">
        CONTACT
      </OptionLink>
      {currentUser ? (
        <OptionLink as="div" className="option" onClick={() => auth.signOut()}>
          SIGN OUT
        </OptionLink>
      ) : (
        <OptionLink className="option" to="/signin">
          SIGN IN
        </OptionLink>
      )}
      <CartIcon />
    </OptionsContainer>
    {!hidden ? <CartDropdown /> : ""}
  </HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
