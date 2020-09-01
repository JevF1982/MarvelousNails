import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import styled from "styled-components";
import { usePath } from "hookrouter";

const HeroMultiWrapper = styled.div`
  .main-container {
    color: white;
    font-family: Cinzel, serif;
    font-size: 90px;
    text-transform: uppercase;
  }
  @media (max-width: 990px) {
    .jumbo {
      display: none;
    }
  }
`;

function HeroMulti() {
  let path = usePath();
  let pathName = path.substring(1);

  return (
    <HeroMultiWrapper>
      <Jumbotron fluid className="jumbo">
        <Container className="main-container">
          <span className="header">{pathName}</span>
        </Container>
      </Jumbotron>
    </HeroMultiWrapper>
  );
}

export default HeroMulti;
