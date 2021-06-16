import React from "react";
import { Container, Hidden, Row, Col } from "react-grid-system";

function About() {
    return (
        <section className="section section-about section-about-1"style={{ backgroundColor: `White`}}>
            <div className="display-spacing">
                <Container>
                    <Row>
                        <Hidden xs sm md>
                            <Col lg={5}>
                                <div className="about-image">
                                    <div className="image overlay-image" style={{ backgroundImage: `url(/assets/images/about/1-1.jpg)` }}></div>
                                </div>
                            </Col>
                        </Hidden>
                        <Col lg={7}>
                            <div className="about-content">
                                <header className="el-heading">
                                    <h2 className="el-icon">
                                        <span className="el-icon-title">ABOUT ME</span>
                                    </h2>
                                    <h3>
                                        <span>Hello, I am Anji Ismail.</span>
                                    </h3>
                                    <div className="divider divider-1"></div>
                                    <p>Full-Stack Web Developer with a BA in Psychology and MA in Humanities and Philosophy. Recently completed a 24 week intensive web development course from UC Berkeley where over 200 classroom hours were spent practicing hands-on coding skills. Possessing a deep passion for coding, a strong drive to succeed, and continuous curiosity. Adept at understanding the human experience and how we interact with technology.</p>
                                </header>
                                <Row className="pt-30">
                                    <Col xs={12} sm={12} md={6}>
                                        <div className="el-card-icon">
                                            {/* <div className="el-icon">
                                                <span className="el-icon-icon ti-ruler-pencil"></span>
                                            </div> */}
                                            {/* <div className="content">
                                                <h5>Web design</h5>
                                                <p>Lorem ipsum dolor sit amet Consectetur adipisicing elit.</p>
                                            </div> */}
                                        </div>
                                    </Col>
                                    {/* <Col xs={12} sm={12} md={6}>
                                        <div className="el-card-icon">
                                            <div className="el-icon">
                                                <span className="el-icon-icon ti-image"></span>
                                            </div>
                                            <div className="content">
                                                <h5>Graphic Design</h5>
                                                <p>Lorem ipsum dolor sit amet Consectetur adipisicing elit.</p>
                                            </div>
                                        </div>
                                    </Col> */}
                                    <Col xs={12} sm={12} md={6}>
                                        {/* <div className="el-card-icon"> */}
                                            {/* <div className="el-icon">
                                                <span className="el-icon-icon ti-brush-alt"></span>
                                            </div> */}
                                            {/* <div className="content">
                                                <h5>Development</h5>
                                                <p>Lorem ipsum dolor sit amet Consectetur adipisicing elit.</p>
                                            </div> */}
                                        {/* </div> */}
                                    </Col>
                                    <Col xs={12} sm={12} md={6}>
                                        {/* <div className="el-card-icon"> */}
                                            {/* <div className="el-icon">
                                                <span className="el-icon-icon ti-ruler-pencil"></span>
                                            </div> */}
                                            {/* <div className="content">
                                                <h5>Mobile Apps</h5>
                                                <p>Lorem ipsum dolor sit amet Consectetur adipisicing elit.</p>
                                            </div> */}
                                        {/* </div> */}
                                    </Col>
                                    <Col xs={12} sm={12} md={6}>
                                        {/* <div className="el-card-icon">
                                            <div className="el-icon">
                                                <span className="el-icon-icon ti-ruler-pencil"></span>
                                            </div>
                                            <div className="content">
                                                <h5>UI/UX Designer</h5>
                                                <p>Lorem ipsum dolor sit amet Consectetur adipisicing elit.</p>
                                            </div>
                                        </div> */}
                                    </Col>
                                    {/* <Col xs={12} sm={12} md={6}>
                                        <div className="el-card-icon">
                                            <div className="el-icon">
                                                <span className="el-icon-icon ti-mobile"></span>
                                            </div>
                                            <div className="content">
                                                <h5>Marketing Online</h5>
                                                <p>Lorem ipsum dolor sit amet Consectetur adipisicing elit.</p>
                                            </div>
                                        </div>
                                    </Col> */}
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </section>
    );
}

export default About;
