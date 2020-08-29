import React from "react";
import Carousel from "react-bootstrap/Carousel";
import styled from "styled-components";

const HeroWrapper = styled.section`
  #hero-header {
    font-size: 90px;
    display: flex;
    justify-content: center;
    font-family: Cinzel;
    text-transform: uppercase;
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
  }

  .img-car {
    max-height: 100%;
  }
  #caption-wrapper {
    max-height: 700px;
  }

  #hero-header {
    font-size: 90px;
    display: flex;
    justify-content: center;
  }

  #hero-paragraph {
    font-size: 30px;
    margin-bottom: 60px;
    font-family: Cinzel;
    text-transform: uppercase;
  }
  .hero-btn {
    background-color: black;
    font-size: 20px;
  }
  @media (max-width: 950px) {
    #hero-header {
      font-size: 60px;
    }
    #hero-paragraph {
      font-size: 20px;
    }
    div.carousel-caption {
      top: 150px;
    }
  }
  @media (max-width: 655px) {
    div.carousel-caption {
      top: 70px;
    }
    #hero-header {
      font-size: 35px;
    }
    #hero-paragraph {
      font-size: 15px;
    }
    .hero-btn {
      font-size: 15px;
    }
    #hero-paragraph {
      margin-bottom: 10px;
    }
  }
`;

function Herosection() {
  const pics = [
    "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
    "https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
    "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
  ];

  return (
    <>
      <HeroWrapper>
        <div id="caption-wrapper">
          <Carousel.Caption>
            <h1 id="hero-header">Marvelous Nails</h1>
            <p id="hero-paragraph">Stylish nails for every occasion</p>
            <button type="button" className="btn btn-secondary hero-btn">
              ... Contact me
            </button>
          </Carousel.Caption>
        </div>

        <Carousel>
          {pics.map((pic, index) => (
            <Carousel.Item key={index}>
              <img
                className="d-block w-100 img-car"
                src={pic}
                alt={`slide-${index}`}
              />
            </Carousel.Item>
          ))}
        </Carousel>
      </HeroWrapper>
    </>
  );
}

export default Herosection;
