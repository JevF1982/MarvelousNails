import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import styled from "styled-components";

function Herosection() {
  const Wrapper = styled.section`
    #hero-header {
      font-size: 90px;
      display: flex;
      justify-content: center;
    }
    .carousel-inner {
      max-height: 700px;
      background-size: cover !important;
      background-position: center center;
    }

    .carousel-inner::after {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background: rgba(0, 0, 0, 0.5);
    }

    div.carousel-caption {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
      top: 300px;
      width: 100%;
    }

    .img-car {
      height: 700px;
    }

    #hero-header {
      font-size: 90px;
      display: flex;
      justify-content: center;
    }

    #hero-paragraph {
      font-size: 30px;
    }
    .hero-btn {
      background-color: black;
      font-size: 20px;
    }
    @media (max-width: 900px) {
      #hero-header {
        font-size: 60px;
      }
      #hero-paragraph {
        font-size: 20px;
      }
    }
    @media (max-width: 600px) {
      #hero-header {
        font-size: 40px;
      }
      #hero-paragraph {
        font-size: 15px;
      }
      .hero-btn {
        font-size: 15px;
      }
    }
  `;

  return (
    <>
      <Wrapper>
        <Carousel.Caption>
          <h1 id="hero-header">Marvelous Nails</h1>
          <p id="hero-paragraph">Stylish nails for every occasion</p>
          <button type="button" className="btn btn-secondary hero-btn">
            Contact me
          </button>
        </Carousel.Caption>

        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100 img-car"
              src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 img-car"
              src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 img-car"
              src="https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </Wrapper>
    </>
  );
}

export default Herosection;
