import React from "react";
import { Container, Hidden, Row, Col } from "react-grid-system";

function Contact() {
    return (
        <section className="section section-contact section-contact-1" style={{ backgroundColor: `White`}}>
            <div className="display-spacing">
                <Container>
                    <Row>
                        <Hidden xs sm md>
                            <Col lg={5}>
                                <div className="contact-image">
                                    <div className="image overlay-image" style={{ backgroundImage: `url(/assets/images/contact/contact.jpg)` }}></div>
                                </div>
                            </Col>
                        </Hidden>
                        <Col lg={7}>
                            <div className="contact-content">
                                <header className="el-heading">
                                    <h2 className="el-icon">
                                        <span className="el-icon-title">CONTACT ME</span>
                                    </h2>
                                    <h3>
                                        <span>Get in touch with me today.</span>
                                    </h3>
                                    <div className="divider divider-1"></div>
                                    <p><b>Contact me:</b> <a href="mailto:anjin.ismail@gmail.com">anjin.ismail@gmail.com</a>
                                    <br></br>
                                    <b>Address:</b>San Francisco,CA 94132
                                    <p><b>Phone:</b> 415.706.7858</p>


                                    </p>

                                </header>
                                <form className="form form-1 pt-15">
                                    <Row className="row">
                                        {/* <Col xs={12} sm={12} md={6}>
                                            <div className="form-item">
                                                <input type="text" id="form-item-name" />
                                                <label htmlFor="form-item-name">Your Name</label>
                                            </div>
                                        </Col>
                                        <Col xs={12} sm={12} md={6}>
                                            <div className="form-item">
                                                <input type="email" id="form-item-email" />
                                                <label htmlFor="form-item-email">Your Email</label>
                                            </div>
                                        </Col>
                                        <Col xs={12} sm={12} md={12}>
                                            <div className="form-item">
                                                <textarea id="form-item-message"></textarea>
                                                <label htmlFor="form-item-message">Your Message</label>
                                            </div>
                                        </Col>
                                        <Col xs={12} sm={12} md={12}>
                                            <button className="button button-md button-primary">Send Message</button>
                                        </Col> */}
                                    </Row>
                                </form>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </section>
    );
}

export default Contact;
