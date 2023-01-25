import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavigationContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 60px;
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 100px;
`;
export const NavLinksContaier = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const NavLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
  color: cornflowerblue;
  text-align: center;
`;
// .navigation {

//   .logo-container {

//   }

//   .nav-links-container {

//     .nav-link {

//     }
//   }
// }
