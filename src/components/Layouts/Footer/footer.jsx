import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Footer.scss";
import logo from "src/assets/rugr-nest-white-logo.svg";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-section">
        <div className="container">
          <div className="footer-block">
            <Row className="align-items-center">
              <Col lg={8} md={12}>
                <Link to="/">
                  <img
                    loading="lazy"
                    src={logo}
                    className="footer-logo"
                    alt="Rugr Nest logo"
                  />
                </Link>
                <div className="footer-btn">
                  <Link to="/">Companies</Link>
                  <Link to="/">Our Process</Link>
                  <Link to="/about-us">About Us</Link>
                  <Link to="/">Our Services</Link>
                  <Link to="/testimonials">Testimonials</Link>
                </div>
              </Col>
              <Col lg={4} md={12}>
                <div className="footer-text">partnerships@rugrnest.com</div>
                <div className="footer-text">1800 410 4555 </div> 
                <div className="social-media-block">
                  <Link to="">
                    <i className="icon-linked-in social-media-icon"></i>
                  </Link>
                  <Link to="">
                    <i className="icon-twitter social-media-icon"></i>
                  </Link>
                  <Link to="">
                    <i className="icon-website social-media-icon"></i>
                  </Link>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>
      <div className="copy-right">
        <div className="container">
          Rugr Nest © 2024, All Rights Reserved. Early Stage Incubator, VC Fund, Bengaluru, India
        </div>
      </div>
    </footer>
  );
};
