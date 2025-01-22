import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Home.scss";
import doublequotes from "src/assets/testimonial-double-quotes.svg";
import client5 from "src/assets/client-5.svg";
import client6 from "src/assets/client-6.svg";

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
      name: 'Lysa',
      position: 'New Technologies, CEO',
      testimonial: 'Lorem ipsum dolor sit amet consectetur. Pulvinar turpis ullamcorper leo consectetur tortor lacus diam amet eros. Quam quam justo ut et pretium viverra convallis. Lacus porttitor venenatis aliquam eu felis vestibulum id. Ut quis ut faucibus at mauris nulla porttitor. ',
      imageUrl: 'src/assets/client-1.svg',
    },
    {
      id: 2,
      name: 'Catherine',
      position: 'Royal Rumble, CEO',
      testimonial: 'Lorem ipsum dolor sit amet consectetur. Pulvinar turpis ullamcorper leo consectetur tortor lacus diam amet eros. Quam quam justo ut et pretium viverra convallis. Lacus porttitor venenatis aliquam eu felis vestibulum id. Ut quis ut faucibus at mauris nulla porttitor. ',
      imageUrl: 'src/assets/client-2.svg',
    },
    {
      id: 3,
      name: 'Brock',
      position: 'Brand New Technologies, Founder',
      testimonial: 'Lorem ipsum dolor sit amet consectetur. Pulvinar turpis ullamcorper leo consectetur tortor lacus diam amet eros. Quam quam justo ut et pretium viverra convallis. Lacus porttitor venenatis aliquam eu felis vestibulum id. Ut quis ut faucibus at mauris nulla porttitor. ',
      imageUrl: 'src/assets/client-3.svg',
    },
    {
      id: 4,
      name: 'Ray',
      position: 'Riz Technologies, Director',
      testimonial: 'Lorem ipsum dolor sit amet consectetur. Pulvinar turpis ullamcorper leo consectetur tortor lacus diam amet eros. Quam quam justo ut et pretium viverra convallis. Lacus porttitor venenatis aliquam eu felis vestibulum id. Ut quis ut faucibus at mauris nulla porttitor. ',
      imageUrl: 'src/assets/client-4.svg',
    },
  ];

  return (
    // testimonial section
    <section className="testimonial-section">
      <div className="container">
        <div className="testimonial-container">
          <Row>
            <Col lg={4} md={12} sm={12}>
              <div className="testimonial-left-section">
                <div className="header-section">
                  <h2 className="section-header">What Our Client Says!</h2>
                  <p className="section-subtext">Providing the best nest solutions for you to grow, nurture, and flourish along with your company. We do in-depth</p>
                </div>
                <div className="client-profile-section">
                  {testimonialData.map((client) => (
                    <a href="/testimonials" key={client.id} className={`client-image client-image-${client.id} client-${client.id} ${hoveredClient === client.id? 'highlight-client': ''}`} onMouseEnter={() => handleMouseEnter(client.id)} onMouseLeave={handleMouseLeave}>
                      <img loading="lazy" src={client.imageUrl} alt={`client-${client.id}`}/>
                    </a>
                  ))}
                  <a href="/testimonials" className="client-image-5 client-5">
                    <img loading="lazy" src={client5} alt="client-image-5"/>
                  </a>
                  <a href="/testimonials" className="client-image-6 client-6">
                    <img loading="lazy" src={client6} alt="client-image-6"/>
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
                      <div key={client.id} className={`testimonial-card ${hoveredClient === client.id? 'testimonial-card-hover': ''}`} onMouseEnter={() => handleMouseEnter(client.id)} onMouseLeave={handleMouseLeave}>
                        <p className="section-text">{client.testimonial}</p>
                        <div className="d-flex align-items-center justify-content-between">
                          <div>
                            <div className="client-name">{client.name}</div>
                            <div className="client-designation">
                              {client.position}
                            </div>
                          </div>
                          <div className="double-quotes-image">
                            <img loading="lazy" src={doublequotes} alt="testimonial-double-quotes"/>
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
  );
};