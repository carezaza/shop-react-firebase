import React, { useState  } from "react";

import FormInput from "../../components/form-input/form-input.component";
import CustomButton from "../../components/custom-button/button.component";
import Card from '../../components/card/card.component';

import {
  SignInContainer,
  SvgLogo,
  Title,
  LinkTag,
  CreateAccount
} from "./sign-in.styles";


const SignIn = () => {

  const [userCredentials, setCredentials] = useState({
    email: '',
    password: '',
  });
  
  const { email, password } = userCredentials;

  const handleSubmit = (event) => {
    event.preventDefault();

    alert(`email: ${email}, password: ${password}`);
  };

  const handleChange = (event) => {
    const { value, name } = event.target;

    setCredentials((state) => ({ ...state, [name]: value }));
  };
 
  return (
    <SignInContainer>
      <a href="/">
        <SvgLogo />
      </a>
      <Title>Sign in to CareShop</Title>
      <form onSubmit={handleSubmit}>
        <Card>
          <FormInput
            name="email"
            type="email"
            value={email}
            handleChange={handleChange}
            label="email"
            minLength="8"
            required
          />
          <FormInput
            name="password"
            type="password"
            value={password}
            handleChange={handleChange}
            label="password"
            minLength="8"
            addForgotPassword
            required
          />
          <CustomButton
            type="submit"
            bgColor="#20232a"
            textColor="#ffffff"
          >
            Sign in
          </CustomButton>
        </Card>
      </form>
      <Card>
        <CreateAccount>Are you new? <LinkTag href="/signup">Create an account.</LinkTag></CreateAccount>
      </Card>
    </SignInContainer>
  );
}

export default SignIn;
