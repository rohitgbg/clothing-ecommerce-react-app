import React, { useState } from "react";
import "./SignIn.scss";
import FormInput from "../FormInput/FormInput";
import CustomButton from "../CustomButton/CustomButton";
import { connect } from "react-redux";
import {
  googleSignInStart,
  emailSignInStart
} from "../../redux/user/user.actions";

const SignIn = ({ emailSignInStart, googleSignInStart }) => {
  const [userCredentials, setUserCredentials] = useState({
    email: "",
    password: ""
  });

  const { email, password } = userCredentials;

  const handleChange = event => {
    const { name, value } = event.target;
    setUserCredentials({
      ...userCredentials,
      [name]: value
    });
  };

  const handleSubmit = async event => {
    event.preventDefault();
    emailSignInStart(email, password);
  };

  return (
    <div className="sign-in">
      <h2 className="title">I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          label="Email"
          value={email}
          handleChange={handleChange}
          required
        />
        <FormInput
          name="password"
          type="password"
          value={password}
          label="Password"
          handleChange={handleChange}
          required
        />

        <div className="buttons">
          <CustomButton>Sign In</CustomButton>

          <CustomButton
            type="button"
            onClick={googleSignInStart}
            isGoogleSignIn
          >
            Sign In With Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password }))
});

export default connect(null, mapDispatchToProps)(SignIn);
