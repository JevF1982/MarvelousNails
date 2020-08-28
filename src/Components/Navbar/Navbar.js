import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

function Navigation() {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#home">Marvelous Nails</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav ">
          <Nav className="m-auto ">
            <Nav.Link href="#home" className="mr-5">
              Home
            </Nav.Link>
            <Nav.Link eventKey={2} href="#about" className="mr-5">
              About
            </Nav.Link>
            <Nav.Link eventKey={2} href="#services" className="mr-5">
              Services
            </Nav.Link>
            <Nav.Link eventKey={2} href="#lookbook" className="mr-5">
              Lookbook
            </Nav.Link>
            <Nav.Link eventKey={2} href="#contact" className="mr-5">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default Navigation;
