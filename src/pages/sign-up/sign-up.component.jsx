import React , { useState } from 'react'

import FormInput from "../../components/form-input/form-input.component";
import CustomButton from "../../components/custom-button/button.component";
import Card from '../../components/card/card.component';

import {
    SignUpContainer,
    SvgLogo,
    Title,
    LinkTag,
  } from "./sign-up.styles";

const SignUp = () => {

    const [userCredentials , setUserCredentials] = useState({
        email: '',
        displayName: '',
        password: '',
        confirmPassword: '',
    });

    const [error , setError] = useState('');

    const { email , displayName , password , confirmPassword } = userCredentials;

    const handleSubmit = (event) =>{
        event.preventDefault();

        if(password != confirmPassword) setError((state) => ({...state, error : "Password and Confirm Password must be match."}));
    }

    const handleChange = (event) =>{
        const { name , value } = event.target;
        setUserCredentials((state) => ({...state, [name]: value}));
    }
    return (
        <SignUpContainer>
        <a href="/">
          <SvgLogo />
        </a>
        <Title>Sign Up</Title>
        { error ? <span>{error}</span> : null}
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
              name="displayName"
              type="text"
              value={displayName}
              handleChange={handleChange}
              label="displayName"
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
              required
            />
               <FormInput
              name="confirmPassword"
              type="password"
              value={confirmPassword}
              handleChange={handleChange}
              label="confirmPassword"
              minLength="8"
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
      </SignUpContainer>
    )
}

export default SignUp;
