import React from "react";
import styled from "styled-components";
import Feed from "react-instagram-authless-feed";

const ImgWrapper = styled.div`
  .service-header {
    width: 300px;
    left: 0px;
    font-family: Cinzel;
    text-transform: uppercase;
  }

  .client-header {
    width: 500px;
    left: 0px;
    font-family: Cinzel, serif;
    text-transform: uppercase;
  }
  .client-header-container {
    margin: 120px 0 0 0;
    display: flex;
    justify-content: center;
  }

  .client-main-container {
    margin: 90px 0 90px 0;
  }

  #underline {
    height: 5px;
    border: none;
    color: #000;
    background-color: #000;
    width: 10%;
    border-radius: 20px;
    margin: 20px 0 0 160px;
  }

  img {
    height: 350px;
    width: 14%;
    margin: 5px;
  }

  .img-container {
    overflow: hidden;
  }
  @media (max-width: 1600px) {
    img {
      width: 25%;
    }
  }
  @media (max-width: 1000px) {
    img {
      width: 40%;
    }
  }

  @media (max-width: 750px) {
    img {
      width: 100%;
    }
  }
`;

function ImgSection() {
  return (
    <ImgWrapper>
      <div className="client-main-container">
        <div className="client-header-container">
          <h1 className="client-header">
            Follow me on Instagram <hr id="underline" />
          </h1>
        </div>
      </div>
      <div className="container-fluid">
        <div className="img-col">
          <div className="img-container">
            <Feed
              username="marvelousssnails"
              className="Feed"
              classnameLoading="Loading"
            />
          </div>
        </div>
      </div>
    </ImgWrapper>
  );
}

export default ImgSection;
