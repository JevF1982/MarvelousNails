import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styled from "styled-components";
import { Prices } from "../PriceBlock/PriceBlockData";

const PriceBlockWrapper = styled.div`
  img {
    height: 600px;
    width: 100%;

    opacity: 0.7;
  }

  .img-col {
    padding: 0px !important;
    margin: auto;
  }

  .img-container {
    background: black;
    overflow: hidden;
  }

  .main-container {
    height: 700px;
    max-width: auto;

    position: relative;
  }
  .prices-container {
    width: 600px;
    background-color: black;
    position: absolute;
    height: auto;
    top: 450px;
    display: flex;
    padding: 5px;
    justify-content: center;
    z-index: 10;
    color: white;
  }

  .right {
    right: 0;
  }

  .small {
    height: auto;
  }

  .price-row {
    margin: 17px;
    font-size: 1.1rem;
  }

  .img-header {
    position: absolute;
    top: 200px;
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
    top: 270px;
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
      top: 270px;
    }
  }
  @media (max-width: 770px) {
    .right {
      left: 0;
    }
    .price-row {
      font-size: 0.8rem;
    }
  }
`;

function PriceBlock() {
  return (
    <PriceBlockWrapper>
      <Container style={{ marginTop: "90px" }}>
        <Row>
          <Col lg="12" md="12" xs="12" className="img-col">
            <div className="main-container">
              <div className="prices-container">
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                    justifyContent: "flex-start",
                    alignItems: "flex-start",
                  }}
                >
                  <span className="price-row">
                    {Prices.NieuweSet.verlenging.name}
                    ............................................ €
                    {Prices.NieuweSet.verlenging.price}
                  </span>

                  <span className="price-row">
                    {Prices.NieuweSet.eigenNagels.name}
                    ............................................ €
                    {Prices.NieuweSet.eigenNagels.price}
                  </span>

                  <span className="price-row">
                    {Prices.NieuweSet.babyBoom.name}
                    ...................... €{Prices.NieuweSet.babyBoom.price}
                  </span>

                  <span className="price-row">
                    {Prices.NieuweSet.french.name} ........................... €
                    {Prices.NieuweSet.french.price}
                  </span>
                  <span className="price-row">
                    {Prices.NieuweSet.extraLang.name}{" "}
                    ............................................ €
                    {Prices.NieuweSet.extraLang.price}
                  </span>
                </div>
              </div>
              <div className="img-container">
                <h1 className="img-header">Nieuwe Set</h1>
                <button type="button" className="btn btn-secondary hero-btn">
                  ...Book Now
                </button>
                <img
                  src={require("../../static/nails/nail-img (22).jpg")}
                  alt="pic1"
                />
              </div>
            </div>
          </Col>
        </Row>
        <Row style={{ marginTop: "180px" }}>
          <Col lg="12" md="12" xs="12" className="img-col">
            <div className="main-container">
              <div className="prices-container right">
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                    justifyContent: "flex-start",
                    alignItems: "flex-start",
                  }}
                >
                  <span className="price-row">
                    {Prices.bijwerking.bijwerking.name}
                    ....................................................................
                    €{Prices.bijwerking.bijwerking.price}
                  </span>

                  <span className="price-row">
                    {Prices.bijwerking.babyBoom.name}
                    ....................................... €
                    {Prices.bijwerking.babyBoom.price}
                  </span>

                  <span className="price-row">
                    {Prices.bijwerking.french.name}
                    ............................................ €
                    {Prices.bijwerking.french.price}
                  </span>

                  <span className="price-row">
                    {Prices.bijwerking.anderSalon.name}
                    ............................................ €
                    {Prices.bijwerking.anderSalon.price}
                  </span>
                  <span className="price-row">
                    {Prices.bijwerking.rubberBase.name}{" "}
                    ...............................................................................
                    €{Prices.bijwerking.rubberBase.price}
                  </span>
                </div>
              </div>
              <div className="img-container">
                <h1 className="img-header">Bijwerken</h1>
                <button type="button" className="btn btn-secondary hero-btn">
                  ...Book Now
                </button>
                <img
                  src={require("../../static/nails/nail-img (18).jpg")}
                  alt="pic1"
                />
              </div>
            </div>
          </Col>
        </Row>
        <Row style={{ marginTop: "180px" }}>
          <Col lg="12" md="12" xs="12" className="img-col">
            <div className="main-container">
              <div className="prices-container small">
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                    justifyContent: "flex-start",
                    alignItems: "flex-start",
                  }}
                >
                  <span className="price-row">
                    {Prices.extra.nailArt.name}
                    ............................................
                    {Prices.extra.nailArt.price}
                  </span>
                  <span className="price-row">
                    {Prices.extra.verwijderen.name}
                    ............................................ €
                    {Prices.extra.verwijderen.price}
                  </span>
                  <span className="price-row">
                    {Prices.extra.reparatie.name}{" "}
                    .............................................
                    {Prices.extra.reparatie.price}
                  </span>
                </div>
              </div>
              <div className="img-container">
                <h1 className="img-header">Bijwerken</h1>
                <button type="button" className="btn btn-secondary hero-btn">
                  ...Book Now
                </button>
                <img
                  src={require("../../static/nails/nail-img (12).jpg")}
                  alt="pic1"
                />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </PriceBlockWrapper>
  );
}

export default PriceBlock;
