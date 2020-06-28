import React, { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {  createStructuredSelector } from 'reselect'

import { signInFailure , signInWithEmail } from '../../redux/user/user.actions';
import { selectIsPending , selectFailure } from '../../redux/user/user.selectors'

import FormInput from "../../components/form-input/form-input.component";
import CustomButton from "../../components/custom-button/button.component";
import Card from "../../components/card/card.component";
import ErrorCard from "../../components/error-card/error-card.component";

import {
  SignInContainer,
  SvgLogo,
  Title,
  LinkTag,
  CreateAccount,
} from "./sign-in.styles";

const SignIn = ({ errorMessage , signInWithEmail, signInFailure , isPending}) => {
  const [userCredentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const { email, password } = userCredentials;

  const handleSubmit = async (event) => {
    event.preventDefault();
    signInWithEmail(userCredentials);
  };

  const handleChange = (event) => {
    const { value, name } = event.target;
    setCredentials((state) => ({ ...state, [name]: value }));
  };

  return (
    <SignInContainer>
      <Link to="/">
        <SvgLogo isPending={isPending} />
      </Link>
      <Title>Sign in to CareShop</Title>
      <ErrorCard message={errorMessage} callback={() => signInFailure("")} />
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
            name="password"
            type="password"
            value={password}
            handleChange={handleChange}
            label="password"
            minLength="8"
            disabled={isPending}
            addForgotPassword
            required
          />
          <CustomButton type="submit" bgColor="#20232a" textColor="#ffffff" disabled={isPending}>
            {isPending ? 'In progress...' : 'Sign In'}
          </CustomButton>
        </Card>
      </form>
      <Card>
        <CreateAccount>
          Are you new? <LinkTag to="/signup">Create an account.</LinkTag>
        </CreateAccount>
      </Card>
    </SignInContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  isPending: selectIsPending,
  errorMessage: selectFailure
});

const mapDispatchToProps = (dispatch) => ({
  signInFailure: (message) => dispatch(signInFailure(message)),
  signInWithEmail: (emailAndPassword) => dispatch(signInWithEmail(emailAndPassword))
})

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
