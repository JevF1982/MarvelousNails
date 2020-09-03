import React, { useEffect, useState } from "react";
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
  const [Images, setImages] = useState([]);

  useEffect(() => {
    const arr = [];
    for (let index = 1; index < 7; index++) {
      arr.push(
        `https://d1qq0qaiiococ4.cloudfront.net/homepage/homepage-bottom-images-section/img${index}`
      );
    }
    setImages(arr);
  }, []);

  return (
    <ImgWrapper>
      <div className="container-fluid">
        <Row>
          {Images.map((img, index) => (
            <Col lg="2" md="6" xs="12" className="img-col" key={index}>
              <div className="img-container">
                <img src={img} alt={`pic-${index}`} />
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </ImgWrapper>
  );
}

export default ImgSection;
