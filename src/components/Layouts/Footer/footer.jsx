import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Footer.scss";
import logo from "src/assets/rugr-nest-white-logo.svg";

export const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="container">
        <div className="footer-block">
          <Row>
            <Col lg={8}>
              <div>
                <img
                  loading="lazy"
                  src={logo}
                  className="footer-logo"
                  alt="Rugr Nest top logo element"
                />
              </div>
              <div className="copy-right d-lg-block d-md-none">
                Rugr Nest © 2024, All Rights Reserved. Early Stage Incubator, VC
                Fund, <br /> Bengaluru, India
              </div>
            </Col>
            <Col lg={4}>
              <div className="footer-btn">
                <a href="#">About Us</a>
                <a href="#">Services</a>
              </div>
              <div className="footer-text">partnerships@rugrnest.com</div>
              <div className="footer-text">1800 410 4555</div>
              <div className="social-media-block">
                <a href="">
                  <i class="icon-linked-in social-media-icon"></i>
                </a>
                <a href="">
                  <i class="icon-twitter social-media-icon"></i>
                </a>
                <a href="">
                  <i class="icon-website social-media-icon"></i>
                </a>
              </div>
              <div className="copy-right d-lg-none d-md-block">
                Rugr Nest © 2024, All Rights Reserved. Early Stage Incubator, VC
                Fund, <br /> Bengaluru, India
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </footer>
  );
};
