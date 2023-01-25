import styled from "styled-components";

import Button from "../button/button.component";

export const PaymentFormContainer = styled.div`
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 560px) {
    margin: auto 0;
    width: 100%;
  }
`;

export const FormContainer = styled.form`
  @media screen and (max-width: 560px) {
    display: flex;
    margin: auto 0;

    width: 100%;
  }
`;

export const PaymentButton = styled(Button)`
  margin-left: auto;
  margin-top: 30px;
`;
