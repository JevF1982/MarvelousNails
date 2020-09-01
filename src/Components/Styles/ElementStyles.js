import styled from "styled-components";

export const MainButton = styled.button.attrs({
  className: "btn btn-secondary",
})`
  background-color: black;
  font-size: 20px;
  @media (max-width: 650px) {
    font-size: 15px;
  }
`;

export const Hr = styled.hr`
  height: 5px;
  border: none;
  color: #000;
  background-color: #000;
  width: 20%;
  border-radius: 20px;
  margin: 20px 0 0 10px;
`;

export const HeaderMain = styled.h1`
  width: 400px;
  left: 0px;
  font-family: Cinzel;
  text-transform: uppercase;
`;
