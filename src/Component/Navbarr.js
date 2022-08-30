import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { LinkContainer } from "react-router-bootstrap";

const Navbarr = () => {
  return (
    <>
      <div className="row">
        <div className="col-md-12 mx-auto">
          <div>
            <Navbar bg="light">
              <Container>
                <LinkContainer to="/">
                  <Navbar.Brand >JK Technical</Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="ms-auto">
                    <LinkContainer to="/">
                      <Nav.Link>Home</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/Service">
                      <Nav.Link>Service</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/About">
                      <Nav.Link>About</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/Contact">
                      <Nav.Link>Contact</Nav.Link>
                    </LinkContainer>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbarr;
