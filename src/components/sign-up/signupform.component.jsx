import { useState } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

import FormInput from "../forminput/forminput.component";
import "./signupform.component.scss";
import Button from "../button/button.component";

const defaultFormValues = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [fields, setFields] = useState(defaultFormValues);
  const { displayName, email, password, confirmPassword } = fields;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFields({ ...fields, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("password doesn't match");
      return;
    }
    try {
      const { user } = createAuthUserWithEmailAndPassword(email, password);
      await createUserDocumentFromAuth(user, { displayName });
      setFields(defaultFormValues);
    } catch (err) {
      if ((err.code = "auth/email-already-in-use")) {
        alert("Email already in use");
      }
      console.error("user creation error", err);
    }
  };
  return (
    <div className='sign-up-container'>
      <span>Use your email to sign up</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label='Name'
          required
          type='text'
          onChange={handleChange}
          name='name'
          value={displayName}
        />
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
        <FormInput
          label='Type your password again'
          required
          type='password'
          onChange={handleChange}
          name='confirmPassword'
          value={confirmPassword}
        />

        <Button type='submit'>Submit</Button>
      </form>
    </div>
  );
};

export default SignUpForm;
