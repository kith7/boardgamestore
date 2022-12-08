import React from "react";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils.js";

import SignUpForm from "../../components/sign-up/signupform.component.jsx";

export const SignIn = () => {
  const logUser = async () => {
    const response = await signInWithGooglePopup();
    createUserDocumentFromAuth(response.user);
  };
  return (
    <div>
      <button onClick={logUser}>Sign In</button>
      <SignUpForm />
    </div>
  );
};
