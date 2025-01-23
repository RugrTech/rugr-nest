import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Footer.scss";
import logo from "src/assets/rugr-nest-white-logo.svg";

export const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-section">
        <div className="container">
          <div className="footer-block">
            <Row className="align-items-center">
              <Col lg={8} md={12}>
                <a href="/">
                  <img
                    loading="lazy"
                    src={logo}
                    className="footer-logo"
                    alt="Rugr Nest logo"
                  />
                </a>
                <div className="footer-btn">
                  <a href="#">Companies</a>
                  <a href="#">Our Process</a>
                  <a href="/about-us">About Us</a>
                  <a href="#">Our Services</a>
                  <a href="/testimonials">Testimonials</a>
                </div>
              </Col>
              <Col lg={4} md={12}>
                <div className="footer-text">partnerships@rugrnest.com</div>
                <div className="footer-text">1800 410 4555</div>
                <div className="social-media-block">
                  <a href="">
                    <i className="icon-linked-in social-media-icon"></i>
                  </a>
                  <a href="">
                    <i className="icon-twitter social-media-icon"></i>
                  </a>
                  <a href="">
                    <i className="icon-website social-media-icon"></i>
                  </a>
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
