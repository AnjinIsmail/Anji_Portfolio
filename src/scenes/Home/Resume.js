import React from "react";
import { Container, Row, Col } from "react-grid-system";
// Components
import ProgressBar from "../../components/common/ProgressBar";

const skills = [
    {
        title: "JavaScript ES6+",
        percent: 100,
    },
    {
        title: "CSS3",
        percent: 100,
    },
    {
        title: "HTML5",
        percent: 100,
    },
    {
        title: "SQL",
        percent: 100,
    },
    {
        title: "NOSQL",
        percent: 100,
    },
    {
        title: "Libraries",
        title: "Express, React, Node.js, Handlebars,Query, Bootstrap,Git,MongoDB, Heroku, Webpack,",
        percent: 100,
    },
];
const education = [
    {
        title: "UC Berkeley Extension",
        subtitle: "BootCamp Certificate | CA",
        description: "A 24 week intensive program focused on gaining technical programming skills in HTML5, CSS3, Javascript, JQuery, Bootstrap, Git, Node Js, MySQL, MongoDB, Express, Handlebars.js & ReactJS.",
        date: "March 2021",
        icon: "ti-crown",
    },
    {
        title: "San Francisco State University",
        subtitle: "Master of Arts in Humanities-Concentration in Philosophy | CA",
        date: "January 2013",
        icon: "ti-cup",
    },
    {
        title: "San Francisco State University",
        subtitle: "Bachelor of Arts in Psychology | CA",
        icon: "ti-ruler-alt-2",
    },
];
const experience = [
    {
        title: "Project Coordinator, Facebook(Contractor)",
        subtitle: "OrangePeople | Menlo Park, CA",
        description: "Liaison between 10 Project Managers and Procurement teams, orchestrating a seamless installation of IT access points for Facebook’s new global offices. ",
        date: "(2019-2019)",
        icon: "ti-pencil-alt",
    },
    {
        title: "Project Coordinator",
        subtitle: "NetServ LLC | SF, CA",
        description: "Collaborated and led smaller projects by handling the infrastructure from start to finish specific for IT equipment installations for several IT clients",
        date: "(2018-2019)",
        icon: "ti-heart",
    },
    {
        title: "Academic Administrative Analyst	",
        subtitle: "UCSF Cardiology |SF , CA",
        description: "Managed 6+ Cardiologist schedules and their administrative needs in a fast-paced environment, with ability to execute all tasks with high level of accuracy, discretion and professionalism as well as collaborating with other team members to maintain documentation.",
        date: "(2017-2018)",
        icon: "ti-paint-bucket",
    },
    {
        title: "Executive Assistant	",
        subtitle: "Edelman |SF ,CA",
        description: "Managed 8 SVP/VP schedules, administrative need as well as their clients needs in a fast-paced and challenging environment .",
        date: "(2016-2017)",
        icon: "ti-paint-bucket",
    },
    {
        title: "Investment Analyst/Administrative Support Officer",
        subtitle: "Australian Consulate |SF ,CA",
        description: "Collaborated with team to help develop new relationships with over 100 business clients to broaden relations between Australia and USA companies, in addition managed various administrative projects with changing deadlines and priorities for the Australian Consular Office, including preparing and reviewing confidential passport documentation.",
        date: "(2014-2015)",
        icon: "ti-paint-bucket",
    },

    

];

function Resume() {
    return (
        <section className="section section-resume section-resume-1">
            <div className="display-spacing">
                <header className="el-heading el-heading-center">
                    <div className="el-icon">
                        <h2 className="el-icon-title">
                            <span>RESUME</span>
                        </h2>
                    </div>
                    <h3>Education & Experience</h3>
                    <div className="divider divider-1-reverse divider-1-1"></div>
                    <div className="divider divider-1-reverse divider-1-2"></div>
                </header>
                <Container className="mb-spacing">
                    <Row>
                        <Col md={6}>
                            <div className="resume-row">
                                <h4 className="resume-title">Education</h4>
                                <ul>
                                    {education.map((item, index) => (
                                        <li key={index}>
                                            <div className="resume-item">
                                                <div className="resume-head">
                                                    <div className="el-icon">
                                                        <span className={`el-icon-icon ${item.icon}`}></span>
                                                    </div>
                                                    <h5>{item.title}</h5>
                                                    <h6>{item.subtitle}</h6>
                                                    <h6>{item.description}</h6>
                                                </div>
                                                <div className="resume-body">
                                                </div>  
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            
                        </Col>
                        <Col md={6}>
                            <div className="resume-row">
                                <h4 className="resume-title">Experience</h4>
                                <ul>
                                    {experience.map((item, index) => (
                                        <li key={index}>
                                            <div className="resume-item">
                                                <div className="resume-head">
                                                    <div className="el-icon">
                                                        <span className={`el-icon-icon ${item.icon}`}></span>
                                                    </div>
                                                    <h5>{item.title}</h5>
                                                    <h6>
                                                        {item.subtitle} <small>{item.date}</small>
                                                    </h6>
                                                </div>
                                                <div className="resume-body">
                                                    <p>{item.description}</p>
                                                </div>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <Container>
                    <Row>
                        {skills.map((item, index) => (
                            <Col key={index} sm={6} xl={4}>
                                <div className="skills-item">
                                    <ProgressBar label={item.title} percent={item.percent} />
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </div>
        </section>
    );
}

export default Resume;
