import React from "react";
// import { Link } from "react-router-dom";

// import "./Header.scss";

import { ReactComponent as Logo } from "../../assets/logo/crown.svg";
// import { auth } from "../firbase/firebase";
import { connect } from "react-redux";
import CartIcon from "../CartIcon/CartIcon";
import CartDropdown from "../CartDropdown/CartDropdown";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink
} from "./Header.style";
import { signOutStart } from "../../redux/user/user.actions";

const Header = ({ currentUser, cartHidden, signOutStart }) => (
  <HeaderContainer>
    <LogoContainer to="/">
      <Logo className="logo" />
    </LogoContainer>

    <OptionsContainer>
      <OptionLink to="/shop">SHOP</OptionLink>

      <OptionLink to="/contact">CONTACT</OptionLink>

      {currentUser ? (
        <OptionLink as="div" onClick={signOutStart}>
          SIGN OUT
        </OptionLink>
      ) : (
        <OptionLink to="/signin">SIGN IN</OptionLink>
      )}

      <CartIcon />
    </OptionsContainer>
    {!cartHidden ? <CartDropdown /> : null}
  </HeaderContainer>
);

// state is from rootReducer
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  cartHidden: selectCartHidden
});

const mapDispatchToProps = dispatch => ({
  signOutStart: () => dispatch(signOutStart())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
