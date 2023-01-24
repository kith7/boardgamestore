import React from "react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import { PaymentFormContainer, FormContainer } from "./payment-form.styles";
import { handler } from "../../../netlify/functions/create-payment-intent";
const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const paymentHandler = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    handler(e);
  };
  return (
    <PaymentFormContainer>
      <FormContainer>
        <h2>Card payment</h2>
        <CardElement />
        <Button
          buttonType={BUTTON_TYPE_CLASSES.inverted}
          onClick={paymentHandler}
        >
          Order Now
        </Button>
      </FormContainer>
    </PaymentFormContainer>
  );
};

export default PaymentForm;
