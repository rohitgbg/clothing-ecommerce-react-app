import React from "react";
import axios from "axios";
import "./StripeButton.scss";
import StripeCheckout from "react-stripe-checkout";

const StripeButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_oa9EAc2SJbrTJhmYI4XPQWZi00toMcgZUG";

  const onToken = token => {
    axios({
      url: "payment",
      method: "post",
      data: {
        amount: priceForStripe,
        token
      }
    })
      .then(response => {
        alert("Payment successful");
        console.log("Payment response:", response);
      })
      .catch(error => {
        console.log("Payment error:", error);
        alert("Payment failed");
      });
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="Clothing Ecom."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabe="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeButton;
