import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const TopNavbar = () => {
  return (
    <div className="bg-light">
      <Container>
      <Navbar expand="lg" className="py-4">
        <Navbar.Brand className="fs-4 fw-bold">Thai Kitchen <span className="my-color">Chronicles</span></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mx-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <NavLink className={`me-4 text-decoration-none`} to="/">Home</NavLink>
            <NavLink className={`text-decoration-none`} to="/blog">Blog</NavLink>
          </Nav>
          <Nav>

          <Button  variant="warning">Login</Button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      </Container>
    </div>
  );
};

export default TopNavbar;
