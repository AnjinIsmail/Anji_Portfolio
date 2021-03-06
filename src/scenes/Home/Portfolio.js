import React, { useState } from "react";
import { Container, Row, Col } from "react-grid-system";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Carousel, { Modal, ModalGateway } from "react-images";

// Components
import Headline from "../../components/common/Headline";

const portfolio = [
    {
        name: "All Works",
        items: [
            {
                id: 0,
                title: "Tech Blog",
                github: "https://github.com/AnjinIsmail/tech-blog",
                deployed: "https://bit.ly/3xnGSjM",
                subtitle: "A web application that is for a developer to write about tech through a CMS style. The tech blogger can publish articles, blog posts, thoughts and opinions",
                src: "/assets/images/portfolio/tech-blog.jpg",
                thumbnail: "/assets/images/portfolio/tech-blog.jpg",
            },
            {
                id: 1,
                title: "superHeroSmash",
                github: "https://github.com/melissabarrerafarias/project-3",
                deployed: "https://bit.ly/3xjYr43",
                subtitle: "A social/entertainment web based application around Super Heros. Vote for your favorite superhero in each matchup",
                src: "/assets/images/portfolio/spider.jpg",
                thumbnail: "/assets/images/portfolio/spider.jpg",
            },
            {
                id: 2,
                title: "StuckInside",
                github: "https://github.com/treguv/stuckinside",
                deployed: "http://www.stuckinside.tech/",
                subtitle: "A social web based application that provides users a platform to share experiences and photos through unfiltered images from day to day life in the current world climate ",
                src: "/assets/images/portfolio/social.jpg",
                thumbnail: "/assets/images/portfolio/social.jpg",
            },
            // {
            //     id: 3,
            //     title: "Crearive Design",
            //     subtitle: "Web Design",
            //     link: "/portfolio-details",
            //     src: "/assets/images/portfolio/1-4.jpg",
            //     thumbnail: "/assets/images/portfolio/1-4.jpg",
            // },
            // {
            //     id: 4,
            //     title: "Crearive Design",
            //     subtitle: "Mobile Apps",
            //     link: "/portfolio-details",
            //     src: "/assets/images/portfolio/1-5.jpg",
            //     thumbnail: "/assets/images/portfolio/1-5.jpg",
            // },
            // {
            //     id: 5,
            //     title: "Crearive Design",
            //     subtitle: "Mobile Apps",
            //     link: "/portfolio-details",
            //     src: "/assets/images/portfolio/1-6.jpg",
            //     thumbnail: "/assets/images/portfolio/1-6.jpg",
            // },
            // {
            //     id: 6,
            //     title: "Crearive Design",
            //     subtitle: "Mobile Apps",
            //     link: "/portfolio-details",
            //     src: "/assets/images/portfolio/1-7.jpg",
            //     thumbnail: "/assets/images/portfolio/1-7.jpg",
            // },
            // {
            //     id: 7,
            //     title: "Crearive Design",
            //     subtitle: "Branding",
            //     link: "/portfolio-details",
            //     src: "/assets/images/portfolio/1-8.jpg",
            //     thumbnail: "/assets/images/portfolio/1-8.jpg",
            // },
            // {
            //     id: 8,
            //     title: "Crearive Design",
            //     subtitle: "Branding",
            //     link: "/portfolio-details",
            //     src: "/assets/images/portfolio/1-9.jpg",
            //     thumbnail: "/assets/images/portfolio/1-9.jpg",
            // },
            // {
            //     id: 9,
            //     title: "Crearive Design",
            //     subtitle: "Branding",
            //     link: "/portfolio-details",
            //     src: "/assets/images/portfolio/1-10.jpg",
            //     thumbnail: "/assets/images/portfolio/1-10.jpg",
            // },
        ],
    },
    // {
    //     name: "Web Design",
    //     items: [
    //         {
    //             id: 0,
    //             title: "Crearive Design",
    //             link: "/portfolio-details",
    //             subtitle: "Web Design",
    //             src: "/assets/images/portfolio/1-1.jpg",
    //             thumbnail: "/assets/images/portfolio/1-1.jpg",
    //         },
    //         {
    //             id: 1,
    //             title: "Crearive Design",
    //             link: "/portfolio-details",
    //             subtitle: "Web Design",
    //             src: "/assets/images/portfolio/1-2.jpg",
    //             thumbnail: "/assets/images/portfolio/1-2.jpg",
    //         },
    //         {
    //             id: 2,
    //             title: "Crearive Design",
    //             link: "/portfolio-details",
    //             subtitle: "Web Design",
    //             src: "/assets/images/portfolio/1-3.jpg",
    //             thumbnail: "/assets/images/portfolio/1-3.jpg",
    //         },
    //         {
    //             id: 3,
    //             title: "Crearive Design",
    //             subtitle: "Web Design",
    //             link: "/portfolio-details",
    //             src: "/assets/images/portfolio/1-4.jpg",
    //             thumbnail: "/assets/images/portfolio/1-4.jpg",
    //         },
    //     ],
    // },
    // {
    //     name: "Mobile Apps",
    //     items: [
    //         {
    //             id: 4,
    //             title: "Crearive Design",
    //             subtitle: "Mobile Apps",
    //             link: "/portfolio-details",
    //             src: "/assets/images/portfolio/1-5.jpg",
    //             thumbnail: "/assets/images/portfolio/1-5.jpg",
    //         },
    //         {
    //             id: 5,
    //             title: "Crearive Design",
    //             subtitle: "Mobile Apps",
    //             link: "/portfolio-details",
    //             src: "/assets/images/portfolio/1-6.jpg",
    //             thumbnail: "/assets/images/portfolio/1-6.jpg",
    //         },
    //         {
    //             id: 6,
    //             title: "Crearive Design",
    //             subtitle: "Mobile Apps",
    //             link: "/portfolio-details",
    //             src: "/assets/images/portfolio/1-7.jpg",
    //             thumbnail: "/assets/images/portfolio/1-7.jpg",
    //         },
    //     ],
    // },
    // {
    //     name: "Branding",
    //     items: [
    //         {
    //             id: 7,
    //             title: "Crearive Design",
    //             subtitle: "Branding",
    //             link: "/portfolio-details",
    //             src: "/assets/images/portfolio/1-8.jpg",
    //             thumbnail: "/assets/images/portfolio/1-8.jpg",
    //         },
    //         {
    //             id: 8,
    //             title: "Crearive Design",
    //             subtitle: "Branding",
    //             link: "/portfolio-details",
    //             src: "/assets/images/portfolio/1-9.jpg",
    //             thumbnail: "/assets/images/portfolio/1-9.jpg",
    //         },
    //         {
    //             id: 9,
    //             title: "Crearive Design",
    //             subtitle: "Branding",
    //             link: "/portfolio-details",
    //             src: "/assets/images/portfolio/1-10.jpg",
    //             thumbnail: "/assets/images/portfolio/1-10.jpg",
    //         },
    //     ],
    // },
];

const images = [
    {
        src: "/assets/images/portfolio/tech-blog.jpg",
    
    },
    {
        src: "/assets/images/portfolio/spider.jpg",
    },
    {
        src: "/assets/images/portfolio/social.jpg",
    },
    {
        src: "/assets/images/portfolio/1-4.jpg",
    },
    {
        src: "/assets/images/portfolio/1-5.jpg",
    },
    {
        src: "/assets/images/portfolio/1-6.jpg",
    },
    {
        src: "/assets/images/portfolio/1-7.jpg",
    },
    {
        src: "/assets/images/portfolio/1-8.jpg",
    },
    {
        src: "/assets/images/portfolio/1-9.jpg",
    },
    {
        src: "/assets/images/portfolio/1-10.jpg",
    },
];

function Portfolio() {
    const [lightboxIsOpen, setLightboxIsOpen] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(0);

    const toggleLightbox = (index) => {
        setSelectedIndex(index);
        setLightboxIsOpen(!lightboxIsOpen);
    };

    return (
        <section className="section section-portfolio section-portfolio-1" style={{ backgroundColor: `white`}}>
            <div className="display-spacing">
                <Container className="container">
                    <Headline label="Portfolio" title="Let's See My Work" divider_1={true} position="center" />
                    <Tabs className="el-tabs el-tabs-1" selectedTabClassName="active">
                        <TabList className="el-tabs-links">
                            {portfolio.map((category, categoryIndex) => (
                                <Tab key={categoryIndex}>{category.name}</Tab>
                            ))}
                        </TabList>
                        {portfolio.map((category, categoryIndex) => (
                            <TabPanel key={categoryIndex}>
                                <Row className="row-center mb--30">
                                    {category.items.map((item, index) => (
                                        <Col key={index} xs={6} sm={6} md={6} lg={3} xl={3} onClick={() => toggleLightbox(item.id)}>
                                            <div className="portfolio-item">
                                                <div className="portfolio-card">
                                                    <div className="image overlay-image" style={{ backgroundImage: `url(${item.src})` }} />
                                                    <div className="content">
                                                        <button className="button button-circle button-icon button-circle-md button-primary">
                                                            <span className="el-icon-icon ti-fullscreen"></span>
                                                        </button>
                                                        <span>{item.title}</span>
                                                        {/* <h3>{item.subtitle}</h3> */}
                                                        <a href = {item.deployed} > Deployed </a>
                                                        <br></br>
                                                        <a href = {item.github} > GitHub </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </Col>
                                    ))}
                                </Row>
                            </TabPanel>
                        ))}
                    </Tabs>
                </Container>
                <ModalGateway>
                    {lightboxIsOpen ? (
                        <Modal onClose={toggleLightbox}>
                            <Carousel currentIndex={selectedIndex} views={images} />
                        </Modal>
                    ) : null}
                </ModalGateway>
            </div>
        </section>
    );
}

export default Portfolio;
