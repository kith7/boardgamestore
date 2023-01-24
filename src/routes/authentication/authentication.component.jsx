import React, { useEffect } from "react";
import "./authentication.styles.scss";
import SignUpForm from "../../components/sign-up/signupform.component.jsx";
import SignInForm from "../../components/sign-in/signinform.component.jsx";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../store/user/user.selector";
import { useNavigate } from "react-router-dom";
const Authentication = () => {
  const currentUser = useSelector(selectCurrentUser);
  const navigate = useNavigate();
  useEffect(() => {
    if (currentUser) {
      navigate("/shop");
    }
  });
  return (
    <div className='authentication-container'>
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;
