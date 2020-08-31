import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import styled from "styled-components";

const HeroMultiWrapper = styled.div`
  .main-container {
    color: white;
    font-family: Cinzel, serif;
    font-size: 90px;
    text-transform: uppercase;
  }
`;

function HeroMulti() {
  return (
    <HeroMultiWrapper>
      <Jumbotron fluid>
        <Container className="main-container">
          <span className="header">LookBook</span>
        </Container>
      </Jumbotron>
    </HeroMultiWrapper>
  );
}

export default HeroMulti;
