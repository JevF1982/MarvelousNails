import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { photos } from "../../LookBook/LookBookData";
import styled from "styled-components";

const PhotoGalleryWrapper = styled.div`
  img {
    height: 310px;
    min-width: 310px;
    margin-bottom: 20px;
  }

  @media (max-width: 990px) {
    .main-container {
      margin-top: 150px;
    }
  }
`;

function PhotoGallery() {
  const img = photos();

  return (
    <PhotoGalleryWrapper>
      <Container className="main-container">
        <Row>
          {img.map((src, index) => (
            <Col lg="4" md="6" sm="12" key={index}>
              <img src={src.src} alt={`img-${index}`} />
            </Col>
          ))}
        </Row>
      </Container>
    </PhotoGalleryWrapper>
  );
}

export default PhotoGallery;
