import React from "react";
import "./Home.scss";
import { Container, Row ,Col } from "react-bootstrap";

// images
import people from 'src/assets/banner-people.svg';
// import icon2 from 'src/assets/gap-icon.svg';


const images = [

]

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

               <section className="nest-offer">
                         <Container>
                          <h1>The <span>Nest</span> offers you..</h1>
                          <div className="card-holder">
                              <Row>
                              <Col lg={4} className="card-inside">
                                          <div className="offer-card">
                                               <div className="image-container image-1"></div>
                                               <h6>Domain Expert Guidance: </h6>
                                               <p>Tailored support from industry veterans.</p> 
                                                                                    
                                          </div>
                                  </Col>
                                  <Col lg={4} className="card-inside card-inside-1 ">
                                          <div className="offer-card special-card">
                                               <div className="image-container"></div>
                                               <h6>Gap-Based Mentorship: </h6>
                                               <p>Identifying and addressing specific challenges.</p> 
                                                                                    
                                          </div>
                                  </Col>
                                  <Col lg={4} className="card-inside ">
                                          <div className="offer-card">
                                               <div className="image-container image-3"></div>
                                               <h6>Capital Investments: </h6>
                                               <p>Access to seed funding and investment networks.</p> 
                                                                                    
                                          </div>
                                  </Col>
                                  
                              </Row>  
                              </div>
                            <div className="card-holder-2">
                            <Row>
                              <Col lg={4} className="card-inside">
                                          <div className="offer-card">
                                               <div className="image-container image-4"></div>
                                               <h6>Infrastructure Facilities:  </h6>
                                               <p>State-of-the-art workspaces and resources.</p> 
                                                                                    
                                          </div>
                                  </Col>
                                  <Col lg={4} className="card-inside card-inside-1 ">
                                          <div className="offer-card special-card">
                                               <div className="image-container image-5"></div>
                                               <h6>Market Partnerships: </h6>
                                               <p>Connections with key players to open doors.</p> 
                                                                                    
                                          </div>
                                  </Col>
                                  <Col lg={4} className="card-inside ">
                                          <div className="offer-card">
                                               <div className="image-container image-3 image-6"></div>
                                               <h6>Legal and Accounting :  </h6>
                                               <p>Registration, intellectual property rights, and financial management.</p> 
                                                                                    
                                          </div>
                                  </Col>
                                  
                              </Row>
                            </div>
                         </Container>
                         <div className="effect-holder">
                             <h3>The Nest <br />
                             Core solutions</h3>
                         </div>
               </section>


   

    </div>
  );
};
