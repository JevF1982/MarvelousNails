import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styled from "styled-components";

const ServiceWrapper = styled.div`
  .service-header {
    width: 300px;
    left: 0px;
    font-family: Cinzel;
    text-transform: uppercase;
  }

  #underline {
    height: 5px;
    border: none;
    color: #000;
    background-color: #000;
    width: 20%;
    border-radius: 20px;
    margin: 20px 0 0 40px;
  }

  img {
    height: 500px;
    width: 100%;

    opacity: 0.8;
  }

  .img-col {
    padding: 0px !important;
    margin: 0px !important;
  }

  .img-container {
    background: black;
    overflow: hidden;
  }

  .img-header {
    position: absolute;
    top: 300px;
    left: 90px;
    color: white;
    z-index: 10;
    font-family: Cinzel, serif;
    text-transform: uppercase;
    font-weight: 10;
  }

  .hero-btn {
    position: absolute;
    background-color: black;
    font-size: 17px;
    top: 370px;
    left: 90px;

    font-weight: 400;
    z-index: 10;
  }

  @media (max-width: 1290px) {
    .hero-btn {
      top: 420px;
    }
  }
  @media (max-width: 990px) {
    .hero-btn {
      top: 370px;
    }
  }
`;

function ServiceSection() {
  return (
    <ServiceWrapper>
      <div>
        <Container style={{ marginBottom: "60px" }}>
          <Row>
            <Col>
              <h1 className="service-header">
                Our Services <hr id="underline" />
              </h1>
            </Col>
            <Col></Col>
          </Row>
        </Container>
        <div className="container-fluid">
          <Row>
            <Col lg="3" md="6" xs="12" className="img-col">
              <div className="img-container">
                <h1 className="img-header">Gel Nagels</h1>
                <button type="button" className="btn btn-secondary hero-btn">
                  ...Read More
                </button>
                <img src={require("../static/nails1.jpg")} alt="pic1" />
              </div>
            </Col>
            <Col lg="3" md="6" xs="12" className="img-col">
              <div className="img-container">
                <h1 className="img-header">Rubber Base</h1>
                <button type="button" className="btn btn-secondary hero-btn">
                  ...Read More
                </button>
                <img src={require("../static/nails2.jpg")} alt="pic1" />
              </div>
            </Col>
            <Col lg="3" md="6" xs="12" className="img-col">
              <div className="img-container">
                <h1 className="img-header">French</h1>
                <button type="button" className="btn btn-secondary hero-btn">
                  ...Read More
                </button>
                <img src={require("../static/nails3.jpg")} alt="pic1" />
              </div>
            </Col>
            <Col lg="3" md="6" xs="12" className="img-col">
              <div className="img-container">
                <h1 className="img-header">Test</h1>
                <button type="button" className="btn btn-secondary hero-btn">
                  ...Read More
                </button>
                <img src={require("../static/mn6.jpg")} alt="pic1" />
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </ServiceWrapper>
  );
}

export default ServiceSection;
