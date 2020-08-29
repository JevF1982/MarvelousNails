import React from "react";
import styled from "styled-components";

const AppointmentWrapper = styled.div`
  .main-container {
    height: 600px;
    width: 100%;
    display: flex;
    background-color: #e0deda;
    margin: 110px 0 0 0;
    position: relative;
  }
  .img-container {
    width: 40%;
    display: flex;
    justify-content: center;
  }
  .text-container {
    font-family: Cinzel;
    text-transform: uppercase;
    margin: 150px 0 0 0;
    width: 70%;
  }
  .hero-btn {
    background-color: black;
    font-size: 17px;
    margin: 50px 190px 0 0;
    font-weight: 400;
    z-index: 10;
  }

  @media (max-width: 950px) {
    .main-container {
      flex-direction: column;
      height: auto;
    }
    .img-container {
      width: 70%;
      justify-content: center;
    }
    .text-container {
      width: 100%;
      margin: 0;
      padding: 50px;
    }
    .hero-btn {
      font-size: 16px;
      width: 200px;
    }
  }
`;

function AppointmentSection() {
  return (
    <AppointmentWrapper>
      <div className="main-container">
        <div className="img-container">
          <img
            src={require("../../static/appointmentbg.png")}
            alt="appointmentbg"
          />
        </div>
        <div className="text-container">
          <h1>Make an Appointment</h1>
          <h5 style={{ marginTop: "50px" }}>
            We will get back to you as soon as possible
          </h5>
          <button type="button" className="btn btn-secondary hero-btn">
            ...Book Appointment
          </button>
        </div>
      </div>
    </AppointmentWrapper>
  );
}

export default AppointmentSection;
