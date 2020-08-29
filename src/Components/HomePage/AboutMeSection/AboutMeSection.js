import React from "react";

import styled from "styled-components";

const AboutMeWrapper = styled.div`
  .aboutme-header {
    width: 300px;
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
    margin: 20px 0 0 120px;
  }
  .aboutme-header-container {
    margin: 120px 0 0 0;
    display: flex;
    justify-content: center;
  }
  .aboutme-container {
    display: flex;
    justify-content: center;
  }
  .shadowed {
    width: 500px;
    -webkit-filter: drop-shadow(2px 2px 2px #222);
    filter: drop-shadow(2px 2px 2px #222);
  }
  .aboutme-text-container {
    margin: 50px 50px 50px 0;
    width: 60%;
    padding: 50px;
  }
  .aboutme-img-container {
    display: flex;
    justify-content: flex-start;
    width: 400px;
    height: 500px;
    margin: -150px 0 0 0px;
  }
  @media (max-width: 1350px) {
    .aboutme-container {
      flex-direction: column;
      width: 100%;
      align-items: center;
    }
    .aboutme-img-container {
      margin: auto 90px;
      width: auto;
      justify-content: center;
    }
    .aboutme-text-container {
      margin: 20px 0 0 0;
    }
  }
`;

function AboutMeSection() {
  return (
    <AboutMeWrapper>
      <div id="main-container">
        <div className="aboutme-header-container">
          <h1 className="aboutme-header">
            About Me <hr id="underline" />
          </h1>
        </div>
        <div className="aboutme-container">
          <div className="aboutme-img-container">
            <img
              src={require("../../static/profile-lindsey-removebg-preview.png")}
              alt="profile-lindsey"
              className="shadowed"
            />
          </div>
          <div className="aboutme-text-container">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores
              officia expedita, molestias veniam repellat itaque tenetur id,
              sunt optio, aliquid magni quibusdam iste amet error eos
              necessitatibus voluptate debitis cupiditate? Lorem ipsum dolor sit
              amet, consectetur adipisicing elit.
              <br />
              <br />
              <br /> Dolores officia expedita, molestias veniam repellat itaque
              tenetur id, sunt optio, aliquid magni quibusdam iste amet error
              eos necessitatibus voluptate debitis cupiditate? Lorem ipsum dolor
              sit amet, consectetur adipisicing elit. Dolores officia expedita,
              molestias veniam repellat itaque tenetur id, sunt optio, aliquid
              magni quibusdam iste amet error eos necessitatibus voluptate
              debitis cupiditate?
            </p>
          </div>
        </div>
      </div>
    </AboutMeWrapper>
  );
}

export default AboutMeSection;
