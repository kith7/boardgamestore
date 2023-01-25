import styled from "styled-components";

export const BackgroundImage = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`;

export const Body = styled.div`
  height: 90px;
  padding: 0 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  background-color: white;
  opacity: 0.7;
  position: absolute;
  h2 {
    font-weight: bold;
    margin: 0 6px 0;
    font-size: 22px;
    color: #4a4a4a;
    text-transform: uppercase;
  }
  p {
    font-weight: lighter;
    font-size: 16px;
  }
  @media screen and (max-width: 500px) {
    /* STYLES HERE */
     {
      display: flex;
      align-items: center;
      justify-content: center;
      margin: auto 0;
    }
  }
`;

export const DirectoryItemContainer = styled.div`
  min-width: 40%;
  height: 240px;
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid blue;
  margin: 0 12.5px 25px;
  overflow: hidden;
  &:hover {
    cursor: pointer;
    & ${BackgroundImage} {
      transform: scale(1.1);
      transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }
    & ${Body} {
      opacity: 0.9;
    }
  }
  &:first-child {
    margin-right: 7.5px;
  }
  &:last-child {
    margin-left: 7.5px;
  }
  @media screen and (max-width: 500px) {
    /* STYLES HERE */
     {
      min-width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 10px 0;
    }
    &:first-child {
      margin-right: 0;
    }
    &:last-child {
      margin-left: 0;
    }
  }
`;
