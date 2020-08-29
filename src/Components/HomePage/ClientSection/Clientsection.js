import React from "react";
import styled from "styled-components";
import Carousel from "react-bootstrap/Carousel";

const ClientWrapper = styled.div`
  .client-header {
    width: 500px;
    left: 0px;
    font-family: Cinzel, serif;
    text-transform: uppercase;
  }

  #underline {
    height: 5px;
    border: none;
    color: #000;
    background-color: #000;
    width: 20%;
    border-radius: 20px;
    margin: 20px 0 0 200px;
  }
  .client-header-container {
    margin: 120px 0 0 0;
    display: flex;
    justify-content: center;
  }

  .client-text-main-container {
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: auto;

    margin: 80px 0 0 0;
  }
  .client-text-container {
    width: 30%;
    justify-content: center;
    background-color: #f4f5f7;
    padding: 40px;
  }
  .client-info-container {
    width: 30%;
    display: flex;
    justify-content: space-between;
  }
  .client-pic-container {
    width: 50%;
  }
  .client-pic {
    width: 90px;
    height: 90px;
    border-radius: 50%;
  }
  .client-name-container {
    width: 50%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .carousel-indicators {
    display: none;
  }
  @media (max-width: 900px) {
    .client-text-container {
      width: 100%;
    }
    .client-info-container {
      width: 100%;
      display: flex;
      align-items: space-around;
    }
    .client-pic-container {
      display: flex;
      justify-content: center;
    }
    .client-name-container {
      margin-left: 20px;
    }
  }

  @media (max-width: 450px) {
    .client-header {
      font-size: 25px;
    }
    #underline {
      height: 3px;

      border-radius: 20px;
      margin: 20px 0 0 150px;
    }
  }
`;

function Clientsection() {
  return (
    <ClientWrapper>
      <div className="client-main-container">
        <div className="client-header-container">
          <h1 className="client-header">
            What my Clients say <hr id="underline" />
          </h1>
        </div>
      </div>
      <Carousel>
        <Carousel.Item>
          <div className="client-text-main-container">
            <div className="client-text-container">
              <p className="client-text">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Facilis, nostrum ipsa? Alias cum laborum illum quae modi culpa
                eius soluta error? Asperiores odio veritatis expedita dolores
                sit earum omnis cupiditate.
              </p>
            </div>
            <div className="client-info-container">
              <div className="client-pic-container">
                <img
                  src="https://cdn.filtergrade.com/wp-content/uploads/2016/05/03031735/740full-amanda-seyfried.jpg"
                  alt="faceshot"
                  className="client-pic"
                />
              </div>
              <div className="client-name-container">
                <h4>-Jane Doe-</h4>
              </div>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="client-text-main-container">
            <div className="client-text-container">
              <p className="client-text">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Facilis, nostrum ipsa? Alias cum laborum illum quae modi culpa
                eius soluta error? Asperiores odio veritatis expedita dolores
                sit earum omnis cupiditate.
              </p>
            </div>
            <div className="client-info-container">
              <div className="client-pic-container">
                <img
                  src="https://i.pinimg.com/236x/82/0d/69/820d69e4f1f07dec4d6f867be8855417--beauty-makeup-hair-makeup.jpg"
                  alt="faceshot"
                  className="client-pic"
                />
              </div>
              <div className="client-name-container">
                <h4>-Sarah Parker-</h4>
              </div>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </ClientWrapper>
  );
}

export default Clientsection;
