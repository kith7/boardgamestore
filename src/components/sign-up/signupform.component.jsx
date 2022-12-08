import { useState } from "react";
//create a generic object for it to be used in the setfields function

const defaultFormValues = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [fields, setFields] = useState(defaultFormValues);
  const { name, email, password, confirmPassword } = fields;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFields({ ...fields, [name]: value });
  };

  return (
    <div>
      <h2>Use your email to sign up</h2>
      <form
        onSubmit={() => {
          console.log("signed up");
        }}
      >
        <label>Name</label>
        <input
          required
          type='text'
          onChange={handleChange}
          name='name'
          value={name}
        />
        <label>Email</label>
        <input
          required
          type='email'
          onChange={handleChange}
          name='email'
          value={email}
        />
        <label>Password</label>
        <input
          required
          type='password'
          onChange={handleChange}
          name='password'
          value={password}
        />
        <label>Type your password again</label>
        <input
          required
          type='password'
          onChange={handleChange}
          name='confirmPassword'
          value={confirmPassword}
        />
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};

export default SignUpForm;
