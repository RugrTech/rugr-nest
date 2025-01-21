import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import logo from "src/assets/rugr-nest-logo.svg";
import "./Header.scss";

export const Header = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">
          <img
            loading="lazy"
            src={logo}
            className="navbar-logo"
            alt="Rugr Nest top logo element"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-lg-auto ms-md-0 flex-md-row">
            <Nav.Link href="/about-us" className={({ isActive }) => isActive ? 'active' : ''}>About Us</Nav.Link>
            <Nav.Link href="#companies" className={({ isActive }) => isActive ? 'active' : ''}>Companies</Nav.Link>
            <Nav.Link href="#services" className={({ isActive }) => isActive ? 'active' : ''}>Our Services</Nav.Link>
            <Nav.Link href="#process" className={({ isActive }) => isActive ? 'active' : ''}>Our Process</Nav.Link>
            <Nav.Link href="#testimonials" className={({ isActive }) => isActive ? 'active' : ''}>Testimonials</Nav.Link>
          </Nav>
          <div class="navbar-btn-section">
            <Button variant="" className="primary-btn">Let’s Grow</Button>
            <i class="icon-icon-language"></i>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
