import React from "react";
import styled from "styled-components";
import Carousel from "react-bootstrap/Carousel";
import { ClientReviewData } from "./ClientSectionData";

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
    margin: 40px 0 0 0;
    justify-content: space-between;
  }
  .client-pic-container {
    width: 50%;
  }
  .client-pic {
    width: 110px;
    height: 90px;
    border-radius: 50%;
  }
  .client-name-container {
    width: 50%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .client-name-text {
    font-family: Cinzel;
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
      margin: 0 20px 0 20px;
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
        {ClientReviewData.map((data, index) => (
          <Carousel.Item key={index}>
            <div className="client-text-main-container">
              <div className="client-text-container">
                <p className="client-text">{data.text}</p>
              </div>
              <div className="client-info-container">
                <div className="client-pic-container">
                  <img
                    src={require("../../static/misc/stars.png")}
                    alt="stars"
                    className="client-pic"
                  />
                </div>
                <div className="client-name-container">
                  <h4 className="client-name-text">-{data.name}-</h4>
                </div>
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </ClientWrapper>
  );
}

export default Clientsection;
