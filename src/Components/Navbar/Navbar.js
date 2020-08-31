import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import styled from "styled-components";

const NavWrapper = styled.div`
  .nav-logo {
    width: 250px;
    height: 70px;
    position: relative;
    top: 0px;
    left: 50px;
  }

  .nav-link {
    color: white !important;
  }

  @media (max-width: 400px) {
    .nav-logo {
      left: 10px;
    }
  }
`;

function Navigation() {
  return (
    <>
      <NavWrapper>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Brand href="#home">
            <img
              src={require("../static/output-onlinepngtools.png")}
              alt="mnlogo"
              className="nav-logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav ">
            <Nav className="m-auto">
              <Nav.Link href="/" className="mr-5">
                Home
              </Nav.Link>

              <Nav.Link eventKey={2} href="/services" className="mr-5">
                Services
              </Nav.Link>
              <Nav.Link eventKey={2} href="/lookbook" className="mr-5">
                Lookbook
              </Nav.Link>
              <Nav.Link eventKey={2} href="/contact" className="mr-5">
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </NavWrapper>
    </>
  );
}

export default Navigation;
