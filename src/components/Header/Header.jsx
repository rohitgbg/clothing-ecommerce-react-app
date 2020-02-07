import React from "react";
import { Link } from "react-router-dom";

import "./Header.scss";

import { ReactComponent as Logo } from "../../assets/logo/crown.svg";
import { auth } from "../firbase/firebase";
import { connect } from "react-redux";
import CartIcon from "../CartIcon/CartIcon";
import CartDropdown from "../CartDropdown/CartDropdown";

const Header = ({ currentUser, cartHidden }) => (
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo" />
    </Link>

    <div className="options">
      <Link className="option" to="/shop">
        SHOP
      </Link>

      <Link className="option" to="/contact">
        CONTACT
      </Link>

      {currentUser ? (
        <div className="option" onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <Link className="option" to="/signin">
          SIGN IN
        </Link>
      )}

      <CartIcon />
    </div>
    {!cartHidden ? <CartDropdown /> : null}
  </div>
);

// state is from rootReducer
const mapStateToProps = state => ({
  currentUser: state.user.currentUser,
  cartHidden: state.cart.hidden
});

export default connect(mapStateToProps)(Header);
