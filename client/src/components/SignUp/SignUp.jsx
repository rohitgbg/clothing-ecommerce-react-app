import React, { useState } from "react";
import "./SignUp.scss";
// import { auth, createUserProfileDocument } from "../firbase/firebase";
import FormInput from "../FormInput/FormInput";
import CustomButton from "../CustomButton/CustomButton";
import { connect } from "react-redux";
import { signUpStart } from "../../redux/user/user.actions";

const SignUp = ({ signUpStart }) => {
  const [userCredentials, setUserCredentials] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const { displayName, email, password, confirmPassword } = userCredentials;

  const handleSubmit = async event => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("Password and confirm password don't match");
      return;
    }
    signUpStart({ displayName, email, password });
  };

  const handleChange = event => {
    const { name, value } = event.target;
    setUserCredentials({
      ...userCredentials,
      [name]: value
    });
  };

  return (
    <div className="sign-up">
      <h2 className="title">I don't have a account</h2>
      <span className="subtitle">Sign up with email and password</span>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput
          name="displayName"
          type="text"
          label="Display Name"
          value={displayName}
          handleChange={handleChange}
          required
        />

        <FormInput
          name="email"
          type="email"
          label="Email"
          value={email}
          handleChange={handleChange}
          required
        />

        <FormInput
          type="password"
          name="password"
          value={password}
          handleChange={handleChange}
          label="Password"
          required
        />

        <FormInput
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          handleChange={handleChange}
          label="Confirm password"
          required
        />
        <CustomButton type="submit">SIGN UP</CustomButton>
      </form>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  signUpStart: userObj => dispatch(signUpStart(userObj))
});

export default connect(null, mapDispatchToProps)(SignUp);
