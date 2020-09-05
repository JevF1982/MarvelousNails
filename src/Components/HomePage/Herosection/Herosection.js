import React from "react";
import Carousel from "react-bootstrap/Carousel";
import styled from "styled-components";
import { homePageHeroSection } from "../../Utils/ImgDataGlobal";

const HeroWrapper = styled.section`
  #hero-header {
    font-size: 90px;
    display: flex;
    justify-content: center;
    font-family: Cinzel;
    text-transform: uppercase;
  }

  a {
    color: white;
    text-decoration: none;
  }

  .carousel-inner {
    max-height: 700px;
    background-size: cover !important;
    background-position: center;
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
    height: 400px;
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
    opacity: 0.6;
    border: none;
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
      top: 170px;
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
  @media (max-width: 400px) {
    div.carousel-caption {
      top: 160px;
    }
    #hero-header {
      font-size: 32px;
    }
    #hero-paragraph {
      font-size: 12px;
    }
    .hero-btn {
      font-size: 12px;
    }
  }
`;

function Herosection() {
  return (
    <>
      <HeroWrapper>
        <div id="caption-wrapper">
          <Carousel.Caption>
            <h1 id="hero-header">Marvelous Nails</h1>
            <p id="hero-paragraph">For marvelous people</p>
            <button type="button" className="btn btn-secondary hero-btn">
              <a href="/apointment">...Book Now</a>
            </button>
          </Carousel.Caption>
        </div>

        <Carousel>
          {homePageHeroSection.map((pic, index) => (
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
