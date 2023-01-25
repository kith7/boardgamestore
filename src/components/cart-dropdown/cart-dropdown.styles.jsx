import styled from "styled-components";
import {
  BaseButton,
  GoogleSignInButton,
  InvertedButton,
} from "../button/button.styles";
export const CardDropDownContainer = styled.div`
  position: absolute;
  width: 340px;
  height: 300px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 5;

  ${BaseButton}
  ${GoogleSignInButton}
  ${InvertedButton} {
    margin-top: auto;
  }
  @media screen and (max-width: 500px) {
    position: absolute;
    width: 90%;
    height: 400px;
 
    display: flex;
        flex-direction: row;
    padding: 20px;
    border: 1px solid black;
    background-color: white;
    top: 90px;
    right: 20px;
    z-index: 5;
    flex-wrap: wrap;
    align-content: center;
    justify-content: center;
    align-items: center;
    opacity: 0.98;

  }
}
`;
export const EmptyMessage = styled.span`
  font-size: 18px;
  margin: 50px auto;
`;
export const CartItems = styled.span`
  height: 260px;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  padding: 16px;
`;
