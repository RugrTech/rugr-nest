import React, { useState } from "react";
import "./Home.scss";
import { Container, Row, Col } from "react-bootstrap";

// images
import people from "src/assets/banner-people.svg";
import doublequotes from "src/assets/testimonial-double-quotes.svg";
import client5 from "src/assets/client-5.svg";
import client6 from "src/assets/client-6.svg";
import officepic from "src/assets/office-picture.svg";

const images = [];

export const Home = () => {
     const [hoveredClient, setHoveredClient] = useState(null);

     const handleMouseEnter = (id) => {
          setHoveredClient(id);
     };

     const handleMouseLeave = () => {
          setHoveredClient(null);
     };

     const testimonialData = [
          {
               id: 1,
               name: "Lysa",
               position: "New Technologies, CEO",
               testimonial:
                    "Lorem ipsum dolor sit amet consectetur. Pulvinar turpis ullamcorper leo consectetur tortor lacus diam amet eros. Quam quam justo ut et pretium viverra convallis. Lacus porttitor venenatis aliquam eu felis vestibulum id. Ut quis ut faucibus at mauris nulla porttitor. ",
               imageUrl: "src/assets/client-1.svg",
          },
          {
               id: 2,
               name: "Catherine",
               position: "Royal Rumble, CEO",
               testimonial:
                    "Lorem ipsum dolor sit amet consectetur. Pulvinar turpis ullamcorper leo consectetur tortor lacus diam amet eros. Quam quam justo ut et pretium viverra convallis. Lacus porttitor venenatis aliquam eu felis vestibulum id. Ut quis ut faucibus at mauris nulla porttitor. ",
               imageUrl: "src/assets/client-2.svg",
          },
          {
               id: 3,
               name: "Brock",
               position: "Brand New Technologies, Founder",
               testimonial:
                    "Lorem ipsum dolor sit amet consectetur. Pulvinar turpis ullamcorper leo consectetur tortor lacus diam amet eros. Quam quam justo ut et pretium viverra convallis. Lacus porttitor venenatis aliquam eu felis vestibulum id. Ut quis ut faucibus at mauris nulla porttitor. ",
               imageUrl: "src/assets/client-3.svg",
          },
          {
               id: 4,
               name: "Ray",
               position: "Riz Technologies, Director",
               testimonial:
                    "Lorem ipsum dolor sit amet consectetur. Pulvinar turpis ullamcorper leo consectetur tortor lacus diam amet eros. Quam quam justo ut et pretium viverra convallis. Lacus porttitor venenatis aliquam eu felis vestibulum id. Ut quis ut faucibus at mauris nulla porttitor. ",
               imageUrl: "src/assets/client-4.svg",
          },
     ];

     return (
          <>
               <section className="banner">
                    <Container>
                         <Row>
                              <Col lg={6}>
                                   <div className="banner-content">
                                        <h1>Empowering Startups to Build Tomorrow's Innovations</h1>
                                        <p>
                                             Empowering Founders to Create What People Love Transforming
                                             ideas into impactful products. Get in touch with us and let’s
                                             grow together.{" "}
                                        </p>
                                        <a href="#">Let’s Grow</a>
                                        <p className="text-2">
                                             Experienced the streamlined support from <br />{" "}
                                             <span>Rugr</span> Nest and build a brand for yourself
                                        </p>
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
                         <h1>
                              The <span>Nest</span> offers you..
                         </h1>
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
                                             <h6>Infrastructure Facilities: </h6>
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
                                             <h6>Legal and Accounting : </h6>
                                             <p>
                                                  Registration, intellectual property rights, and financial
                                                  management.
                                             </p>
                                        </div>
                                   </Col>
                              </Row>
                         </div>
                    </Container>
                    <div className="effect-holder">
                         <h3>
                              <span> The Nest</span> <br />
                              Core solutions
                         </h3>
                    </div>
               </section>

               {/* testimonial section */}
               <section className="testimonial-section">
                    <div className="container">
                         <div className="testimonial-container">
                              <Row>
                                   <Col lg={4} md={12} sm={12}>
                                        <div className="testimonial-left-section">
                                             <div className="header-section">
                                                  <h2 className="section-header">What Our Client Says!</h2>
                                                  <p className="section-subtext">
                                                       Providing the best nest solutions for you to grow,
                                                       nurture, and flourish along with your company. We do
                                                       in-depth
                                                  </p>
                                             </div>
                                             <div className="client-profile-section">
                                                  {testimonialData.map((client) => (
                                                       <a
                                                            href="/testimonials"
                                                            key={client.id}
                                                            className={`client-image client-image-${client.id
                                                                 } client-${client.id} ${hoveredClient === client.id ? "highlight-client" : ""
                                                                 }`}
                                                            onMouseEnter={() => handleMouseEnter(client.id)}
                                                            onMouseLeave={handleMouseLeave}
                                                       >
                                                            <img
                                                                 loading="lazy"
                                                                 src={client.imageUrl}
                                                                 alt={`client-${client.id}`}
                                                            />
                                                       </a>
                                                  ))}
                                                  <a href="/testimonials" className="client-image-5 client-5">
                                                       <img loading="lazy" src={client5} alt="client-image-5" />
                                                  </a>
                                                  <a href="/testimonials" className="client-image-6 client-6">
                                                       <img loading="lazy" src={client6} alt="client-image-6" />
                                                  </a>
                                             </div>
                                             <div className="footer-section">
                                                  <a className="view-more-btn" href="/testimonials">
                                                       <span className="btn-block">
                                                            View More
                                                            <span className="view-more-underline"></span>
                                                       </span>
                                                       <span className="icon-block">
                                                            <i class="icon-right-arrow"></i>
                                                       </span>
                                                  </a>
                                             </div>
                                        </div>
                                   </Col>
                                   <Col lg={8} md={12} sm={12}>
                                        <div className="testimonial-right-section">
                                             <Row>
                                                  {testimonialData.map((client) => (
                                                       <Col lg={6} md={6} sm={12} className="testimonial-block">
                                                            <div
                                                                 key={client.id}
                                                                 className={`testimonial-card ${hoveredClient === client.id
                                                                           ? "testimonial-card-hover"
                                                                           : ""
                                                                      }`}
                                                                 onMouseEnter={() => handleMouseEnter(client.id)}
                                                                 onMouseLeave={handleMouseLeave}
                                                            >
                                                                 <p className="section-text">{client.testimonial}</p>
                                                                 <div className="d-flex align-items-center justify-content-between">
                                                                      <div>
                                                                           <div className="client-name">{client.name}</div>
                                                                           <div className="client-designation">
                                                                                {client.position}
                                                                           </div>
                                                                      </div>
                                                                      <div className="double-quotes-image">
                                                                           <img
                                                                                loading="lazy"
                                                                                src={doublequotes}
                                                                                alt="testimonial-double-quotes"
                                                                           />
                                                                      </div>
                                                                 </div>
                                                            </div>
                                                       </Col>
                                                  ))}
                                             </Row>
                                        </div>
                                   </Col>
                              </Row>
                         </div>
                    </div>
               </section>

               {/* home-about-us */}

               <section className="home-about-us">
                    <Container fluid>
                         <Row>
                              <Col lg={7} className="px-0">
                                   <img src={officepic} alt="" className="img-fluid" />

                              </Col>
                              <Col lg={5}>
                                   <div className="abt-content">
                                        <h3>About Us</h3>
                                        <h2>A nurturing ecosystem where ideas hatch and startups take flight.</h2>
                                        <p>At RugrNest, we believe that every great idea deserves the right environment to thrive. As a startup incubator inspired by the mission of Rural Growth (RUGR), we are dedicated to Empowering Entrepreneurs with the Tools, Mentorship, and Resources to Build Scalable, Impactful Businesses.</p>
                                        <div className="footer-section">
                                             <a className="view-more-btn" href="/testimonials">
                                                  <span className="btn-block">
                                                       View More
                                                       <span className="view-more-underline"></span>
                                                  </span>
                                                  <span className="icon-block">
                                                       <i class="icon-right-arrow"></i>
                                                  </span>
                                             </a>
                                        </div>
                                   </div>
                              </Col>
                         </Row>
                    </Container >
               </section>
          </>
     );
};