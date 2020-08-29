import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styled from "styled-components";

function InfoSection() {
  const Wrapper = styled.div`
    .left-col {
      margin-top: 120px;

      margin-right: 300px;
      font-weight: 1px;
      width: 100%;
    }
    h1 {
      width: 300px;
      left: 0px;
    }
    .container {
      height: 500px;
      width: 100%;
    }
    #underline {
      height: 5px;
      border: none;
      color: #000;
      background-color: #000;
      width: 20%;
      border-radius: 20px;
      margin: 20px 0 0 10px;
    }

    ////////right col////////
    .right-col {
      margin-top: 120px;
      justify-content: flex-start;
    }
    p {
      margin-bottom: 60px;
    }
    .btn {
      background-color: black;
      font-size: 20px;
    }
    .btn-div {
      width: 100%;
      display: flex;
      justify-content: flex-start;
    }
    @media (max-width: 900px) {
      .left-col {
        display: none;
      }
      .right-col {
        padding: 40px;
        margin-top: 35px;
      }
    }
    @media (max-width: 650px) {
      .btn {
        font-size: 15px;
      }
    }
  `;

  return (
    <Wrapper>
      <Container className="container">
        <Row>
          <Col className="left-col">
            <h1>
              Welcome to Marvelous Nails <hr id="underline" />
            </h1>
          </Col>
          <Col className="right-col">
            {" "}
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum
              consequatur suscipit ab, dolor doloremque tempora libero quia
              consectetur officiis esse rem quam! Eius tempora ipsam dolore
              dignissimos itaque quaerat amet!
            </p>
            <div className="btn-div">
              <button type="button" className="btn btn-secondary hero-btn">
                ... Read More
              </button>
            </div>
          </Col>
        </Row>
      </Container>
    </Wrapper>
  );
}

export default InfoSection;
