import React from "react";
import "./CartDropdown.scss";

import CustomButton from "../CustomButton/CustomButton";
import { connect } from "react-redux";
import CartItem from "../CartItem/CartItem";
import { selectCartItems } from "../../redux/cart/cart.selectors";

const CartDropdown = ({ cartItems }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.length > 0
        ? cartItems.map(cartItem => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        : "Add items to cart"}
    </div>
    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>
);

const mapStateToProps = state => ({
  cartItems: selectCartItems(state)
});

export default connect(mapStateToProps)(CartDropdown);
