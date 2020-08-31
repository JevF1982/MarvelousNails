import React from "react";
import styled from "styled-components";

const FooterWrapper = styled.div`
  .main-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: black;
    border-top: 1px whitesmoke solid;
    height: 90px;
  }
  .footer-links {
    text-decoration: none;
    color: #ffffff;
  }
  .link-container {
    margin-right: 150px;
  }
  li {
    margin: 0 40px 0 40px;
  }
  ul {
    margin: 0px;
    padding: 0px;
  }
  .footer-brand {
    margin: 0 0 0 300px;
  }

  @media (max-width: 1350px) {
    .main-container {
      flex-direction: column-reverse;
      height: 140px;
    }

    .footer-brand {
      margin: 0px 0 30px 0;
      width: 100%;
      display: flex;
      justify-content: center;
    }
    .link-container {
      margin: 20px 0 0 0;
      width: 100%;
      display: flex;
      justify-content: center;
      margin-bottom: 20px;
    }
  }
  @media (max-width: 700px) {
    li {
      margin: 0 10px 0 10px;
    }
  }
  @media (max-width: 400px) {
    li {
      margin: 0 5px 0 5px;
    }
  }
`;

function Footer() {
  return (
    <FooterWrapper>
      <div className="main-container">
        <div className="footer-brand">
          <span>
            Made by{" "}
            <a
              href="http://www.jurgenfaust.site"
              style={{ textDecoration: "none" }}
            >
              Jurgen Faust
            </a>
          </span>
        </div>
        <div className="link-container">
          <ul style={{ display: "flex" }}>
            <li>
              <a href="/" className="footer-links">
                Home
              </a>
            </li>

            <li>
              <a href="/lookbook" className="footer-links">
                Lookbook
              </a>
            </li>
            <li>
              <a href="services" className="footer-links">
                Services
              </a>
            </li>
            <li>
              <a href="Contact" className="footer-links">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </FooterWrapper>
  );
}

export default Footer;
