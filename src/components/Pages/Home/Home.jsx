import React from "react";
import "./Home.scss";
import { Container, Row ,Col } from "react-bootstrap";

// images
import people from 'src/assets/banner-people.svg'


export const Home = () => {
  return (
    <div className="home-height">
               <section className="banner">
                  <Container >
                       <Row >
                           <Col lg={6}>
                                 <div className="banner-content">
                                        <h1>Empowering Startups to
                                        Build Tomorrow's Innovations</h1>
                                        <p>Empowering Founders to Create What People Love Transforming ideas into impactful products. Get in touch with us and let’s grow together. </p>
                                        <a href="#">Let’s Grow</a>
                                        <p className="text-2">Experienced the streamlined support from <br /> <span>Rugr</span> Nest and build a brand for yourself</p>
                                 </div>
                           </Col>
                           <Col lg={6}>
                                  <div className="banner-people">
                                     <img src={people} alt="standing people image" />
                                  </div>
                           </Col>
                       </Row>
                  </Container>
               </section>
               
    </div>
  );
};
