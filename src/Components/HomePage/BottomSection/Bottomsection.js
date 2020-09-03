import React, { useState, useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import styled from "styled-components";

const BottomWrapper = styled.div`
  .main-container {
    height: auto;
    color: white;
    background-color: black;
    width: 100%;
  }
  #underline {
    height: 3px;
    border: none;
    color: white;
    background-color: white;
    width: 20%;
    border-radius: 20px;
    margin: 15px 0 0 0;
  }
  .col-container {
    margin: 70px 0 70px 0;
  }
  .header {
    font-family: Cinzel, serif;
    margin-bottom: 20px;
    text-transform: uppercase;
  }
  .aboutus-paragraph {
    letter-spacing: 0.2px;
    padding: 15px;
    font-family: Muli, sans-serif;
  }
  .logo {
    filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(355deg)
      brightness(109%) contrast(101%);
    width: 40px;
    height: 40px;
    margin: 10px;
  }
  .contact-container {
    display: flex;
    flex-direction: column;
    align-items: space-around;
  }

  .contact-icons {
    filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(355deg)
      brightness(109%) contrast(101%);
    width: 30px;
    height: 30px;
    margin-right: 20px;
  }
  .contact-text {
    font-family: Muli, sans-serif;
    letter-spacing: 0.5px;
  }
  .contact-row {
    margin: 10px 0 15px 0;
  }
  .tile-container {
    margin-top: 35px;
  }
  .img-tile {
    width: 70px;
    height: 70px;
    margin: 5px;
  }
`;

function Bottomsection() {
  const [Images, setImages] = useState([]);

  useEffect(() => {
    const arr = [];
    for (let index = 1; index < 7; index++) {
      arr.push(
        `https://d1qq0qaiiococ4.cloudfront.net/homepage/homepage-mini-lookbook/mini-lookbook-img${index}`
      );
    }
    setImages(arr);
  }, []);

  return (
    <BottomWrapper>
      <div className="main-container">
        <Container>
          <Row className="row-container">
            <Col className="col-container" lg="4" sm="12">
              <div style={{ display: "flex", justifyContent: "center" }}>
                <h5 className="header">
                  About Us <hr id="underline" />
                </h5>
              </div>

              <p className="aboutus-paragraph">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
                odit perferendis aperiam dolorem quas, pariatur reiciendis
                optio, illum corporis facere magni cum iusto expedita ab,
                adipisci libero. Aspernatur, reiciendis eius?
              </p>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <div>
                  <a
                    href="https://www.facebook.com/Marvelousnailsnagelstudio/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={require("../../static/logos/facebook.png")}
                      alt="facebook-logo"
                      className="logo"
                      rel="noopener noreferrer"
                    />
                  </a>
                </div>
                <div>
                  <a
                    href="https://www.instagram.com/marvelousssnails/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={require("../../static/logos/insta.png")}
                      alt="instagram-logo"
                      className="logo"
                    />
                  </a>
                </div>
              </div>
            </Col>
            <Col lg="4" sm="12" className="col-container">
              <div style={{ display: "flex", justifyContent: "center" }}>
                <h5 className="header">
                  Contact info <hr id="underline" />
                </h5>
              </div>
              <div className="contact-container">
                <div className="contact-row">
                  <img
                    src={require("../../static/logos/map.png")}
                    alt="map-logo"
                    className="contact-icons"
                  />
                  <span className="contact-text">
                    Weg naar As 272/1 3600 Genk Belgie
                  </span>
                </div>
                <div className="contact-row">
                  <img
                    src={require("../../static/logos/email.png")}
                    alt="email-logo"
                    className="contact-icons"
                  />
                  <span className="contact-text">
                    lindseydewallef@hotmail.com
                  </span>
                </div>
                <div className="contact-row">
                  <img
                    src={require("../../static/logos/clock.png")}
                    alt="clock-logo"
                    className="contact-icons"
                  />
                  <span className="contact-text">
                    Mon-Fri 9:00 AM - 8:00 PM{" "}
                  </span>
                </div>
                <div className="contact-row">
                  <img
                    src={require("../../static/logos/phone.png")}
                    alt="phone-logo"
                    className="contact-icons"
                  />
                  <span className="contact-text">0473/24.30.16</span>
                </div>
              </div>
            </Col>
            <Col lg="4" sm="12" className="col-container">
              <div style={{ display: "flex", justifyContent: "center" }}>
                <h5 className="header">
                  My Lookbook <hr id="underline" />
                </h5>
              </div>
              <div className="tile-container">
                <div className="tile-row">
                  {Images.map((url, index) => {
                    if (index <= 2) {
                      return (
                        <img
                          src={url}
                          alt="img-1"
                          className="img-tile"
                          key={index}
                        />
                      );
                    }
                  })}
                </div>
                <div className="tile-row">
                  {Images.map((url, index) => {
                    if (index > 2) {
                      return (
                        <img
                          src={url}
                          alt="img-1"
                          className="img-tile"
                          key={index}
                        />
                      );
                    }
                  })}
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </BottomWrapper>
  );
}

export default Bottomsection;
