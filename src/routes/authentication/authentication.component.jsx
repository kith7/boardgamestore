import React from "react";
import "./authentication.styles.scss";
import SignUpForm from "../../components/sign-up/signupform.component.jsx";
import SignInForm from "../../components/sign-in/signinform.component.jsx";

const Authentication = () => {
  return (
    <div className='authentication-container'>
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;
