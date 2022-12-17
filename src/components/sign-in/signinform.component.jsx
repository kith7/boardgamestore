import { useState } from "react";
import {
  createUserDocumentFromAuth,
  signInWithGooglePopup,
  signInAuthWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";

import FormInput from "../forminput/forminput.component";
import "./signinform.component.scss";
import Button from "../button/button.component";

const defaultFormValues = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [fields, setFormFields] = useState(defaultFormValues);
  const { email, password } = fields;
  const resetFormFields = () => {
    setFormFields(defaultFormValues);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...fields, [name]: value });
  };

  const logUserWithGoogle = async () => {
    await signInWithGooglePopup();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { user } = await signInAuthWithEmailAndPassword(email, password);
      resetFormFields();
    } catch (err) {
      if (err.code === "auth/wrong-password") {
        alert("incorrect password for email");
        console.error("login error", err);
      }
      if (err.code === "auth/user-not-found") {
        alert("Please register before loginig in");
      } else {
        console.error("login error", err);
      }
    }
  };
  return (
    <div className='sign-up-container'>
      <span>Already have an account</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label='Email'
          required
          type='email'
          onChange={handleChange}
          name='email'
          value={email}
        />
        <FormInput
          label='Password'
          required
          type='password'
          onChange={handleChange}
          name='password'
          value={password}
        />
        <div className='buttons-container'>
          <Button type='submit'>Sign in</Button>
          <Button buttonType='google' type='button' onClick={logUserWithGoogle}>
            Google sign in
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
