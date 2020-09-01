import React from "react";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styled from "styled-components";

const ImgWrapper = styled.div`
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
    height: 350px;
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
`;

function ImgSection() {
  const images = [
    {
      img: require("../../static/nails/nail-img (1).jpg"),
    },
    {
      img: require("../../static/nails/nail-img (2).jpg"),
    },
    {
      img: require("../../static/nails/nail-img (3).jpg"),
    },
    {
      img: require("../../static/nails/nail-img (4).jpg"),
    },
    {
      img: require("../../static/nails/nail-img (5).jpg"),
    },
    {
      img: require("../../static/nails/nail-img (6).jpg"),
    },
  ];

  return (
    <ImgWrapper>
      <div className="container-fluid">
        <Row>
          {images.map((img, index) => (
            <Col lg="2" md="6" xs="12" className="img-col" key={index}>
              <div className="img-container">
                <img src={img.img} alt={`pic-${index}`} />
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </ImgWrapper>
  );
}

export default ImgSection;
