import React, { useState } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from 'reselect'

import { signUpStart , signUpFailure } from "../../redux/user/user.actions";
import { selectIsPending , selectFailure } from '../../redux/user/user.selectors'

import FormInput from "../../components/form-input/form-input.component";
import CustomButton from "../../components/custom-button/button.component";
import Card from "../../components/card/card.component";
import ErrorCard from "../../components/error-card/error-card.component";
import { SignUpContainer, SvgLogo, Title, LinkTag } from "./sign-up.styles";

const SignUp = ({ signUpStart, signUpFailure, errorMessage , isPending}) => {

   // ************** states ************** //
  const [userCredentials, setUserCredentials] = useState({
    email: "",
    displayName: "",
    password: "",
    confirmPassword: "",
  });

  const { email, displayName, password, confirmPassword } = userCredentials;
   // ************** end states ************** //


  // ************** handle functions ************** //
  const handleSubmit = (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      signUpFailure('Password and Confirm Password must be same!')
      return;
    }
    signUpStart(userCredentials);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserCredentials((state) => ({ ...state, [name]: value }));
  };
  // ************** end handle functions ************** //

  return (
    <SignUpContainer>
      <LinkTag to="/">
        <SvgLogo isPending={isPending} />
      </LinkTag>
      <Title>Sign Up</Title>
      <ErrorCard
        message={errorMessage}
        callback={() => signUpFailure('')}
      />
      <form onSubmit={handleSubmit}>
        <Card>
          <FormInput
            name="email"
            type="email"
            value={email}
            handleChange={handleChange}
            label="email"
            minLength="8"
            disabled={isPending}
            required
          />
          <FormInput
            name="displayName"
            type="text"
            value={displayName}
            handleChange={handleChange}
            label="displayName"
            minLength="8"
            disabled={isPending}
            required
          />
          <FormInput
            name="password"
            type="password"
            value={password}
            handleChange={handleChange}
            label="password"
            minLength="8"
            disabled={isPending}
            required
          />
          <FormInput
            name="confirmPassword"
            type="password"
            value={confirmPassword}
            handleChange={handleChange}
            label="confirmPassword"
            minLength="8"
            disabled={isPending}
            required
          />
          <CustomButton type="submit" bgColor="#20232a" textColor="#ffffff" disabled={isPending}>
          {isPending ? 'In progress...' : 'Sign Up'}
          </CustomButton>
        </Card>
      </form>
      <Card>You have already an account? <LinkTag to="/signin">Sign In</LinkTag></Card>

    </SignUpContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  isPending: selectIsPending,
  errorMessage: selectFailure
});

const mapDispatchToProps = (dispatch) => ({
  signUpStart: (userCredentials) => dispatch(signUpStart(userCredentials)),
  signUpFailure: (error) => dispatch(signUpFailure(error)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
