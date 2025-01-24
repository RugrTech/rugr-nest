import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';
import logo from "src/assets/rugr-nest-logo.svg";
import "./Header.scss";

export const Header = () => {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  return (
    <Navbar expand="lg" className="">
      <Container>
        <Navbar.Brand href="/">
          <img
            loading="lazy"
            src={logo}
            className="navbar-logo"
            alt="Rugr Nest logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-lg-auto ms-md-0 flex-md-row">
            <Nav.Link href="/" className={isActive('/') ? 'active' : ''}>Home</Nav.Link>
            <Nav.Link href="/about-us" className={isActive('/about-us') ? 'active' : ''}>About Us</Nav.Link>
            <Nav.Link href="#companies">Companies</Nav.Link>
            <Nav.Link href="#services">Our Services</Nav.Link>
            <Nav.Link href="#process">Our Process</Nav.Link>
            <Nav.Link href="/testimonials" className={isActive('/testimonials') ? 'active' : ''}>Testimonials</Nav.Link>
          </Nav>
          <div className="navbar-btn-section">
            <i className="icon-icon-language"></i>
            <Button variant="" className="primary-btn">Let’s Grow</Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
