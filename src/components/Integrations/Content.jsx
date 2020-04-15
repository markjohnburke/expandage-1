import React from "react"
import { Container, Row, Col } from "reactstrap"

import Automate from "../../images/automate.png"
import SericeIcon1 from "../../images/service-icon-1.png"
import SericeIcon2 from "../../images/service-icon-2.png"

const keyFeatures = [
  {
    id: 1,
    title: "EU Built with Global Focus",
    desc:
      "We can run checks on all customers, and manage country- specific rules, laws, and regulations to efficiently onboard and maintain multi-jurisdictional clients for you.",
  },
  {
    id: 2,
    title: "Automated Onboarding",
    desc:
      "With our easy-to-integrated APIs, our services allows you to automate your AML and KYC checks in a snap.",
  },
  {
    id: 3,
    title: "Edge Case Analysis",
    desc:
      "Our service allows your endpoints to receive a response back while validating results are working as one expects them",
  },
  {
    id: 4,
    title: "Conduct Headless API Testing",
    desc:
      "Most headless testing consists of bypassing the GUI and sending a request directly to an application’s backend ",
  },
  {
    id: 5,
    title: "Improve Customer Experience",
    desc:
      "Run your obligatory checks with the industry's premium service. Designed by users and for users, onboarding is as easy as it is smooth",
  },
]

const Content = () => {
  return (
    <>
      <section id="integrations" className="about-area pt-70">
        <Container>
          <Row className="align-items-center">
            <Col lg={6}>
              <div
                className="about-image text-center mt-50 wow fadeInRightBig"
                data-wow-duration="1s"
                data-wow-delay="0.5s"
              >
                <img src={Automate} alt="about" />
              </div>
            </Col>
            <Col lg={6}>
              <div className="about-content mt-50 wow fadeInLeftBig">
                <div className="section-title">
                  <div className="line"></div>
                  <h3 className="title">
                    A simple automation process? Now{" "}
                    <span style={{ color: "#fe8464" }}>your</span> focus can go where it should.
                  </h3>
                </div>
                <p className="text">
                   With Agile development becoming the standard in most organizations, the ways in which software development, automation and testing have changed dramatically.
					Pre-Agile, most of the time spent on automation was done against a graphical user interface (GUI). This is the piece that tools like UFT/QTP handle.In software application (app) development, API is the middle layer between the presentation (UI) and the database layer. APIs enable communication and data exchange from  software system to another.
					API testing is a software testing practice that tests the APIs directly — from their functionality, reliability, performance, to security. Part of integration testing, API testing effectively validates the logic of the build architecture within a short amount of time. We do this for you.
					PI automated testing is critical for product quality and CI/CD processes. Unlike GUI tests, API tests can cope with short release cycles and frequent changes — without breaking the test outputs. 
                </p>
              </div>
            </Col>
          </Row>
          <Row className="mt-120">
            <Col lg={12} className="text-center">
              <h3
                className="service-title wow fadeInDown"
                data-wow-duration="1s"
                data-wow-delay="0.5s"
              >
                The tools you need to manage your day-to-day operations.
              </h3>
            </Col>
          </Row>
          <Row className="mb-120">
            <Col lg={6} className="mt-40">
              <div
                className="service-box d-flex wow fadeIn"
                data-wow-duration="1s"
                data-wow-delay="0.6s"
              >
                <div className="service-box-left">
                  <img src={SericeIcon1} alt="icon" />
                </div>
                <div className="service-box-right">
                  <h2>Client Ready</h2>
                  <p>
                    Meet the needs for offering your clients (if B2C) and their clients (if B2B) a fully compliant and automated onboarding process and maintenance process.
                  </p>
                </div>
              </div>
            </Col>
            <Col lg={6} className="mt-40">
              <div
                className="service-box d-flex wow fadeIn"
                data-wow-duration="1s"
                data-wow-delay=".7s"
              >
                <div className="service-box-left">
                  <img src={SericeIcon2} alt="icon" />
                </div>
                <div className="service-box-right">
                  <h2>Technology-Driven</h2>
                  <p>
                    We provide a suite of services delivered with technology for your scaling needs.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="section-kf">
        <Container>
          <Row className="pt-160 pb-160">
            <Col lg={12}>
              <div className="grid-boxes">
                <div
                  className="grid-box wow fadeInLeft"
                  data-wow-duration="1s"
                  data-wow-delay=".6s"
                >
                  <h2>Key Compliance Features</h2>
                </div>
                {keyFeatures.map(kf => (
                  <div
                    key={kf.id}
                    className="grid-box wow fadeIn"
                    data-wow-duration="1s"
                    data-wow-delay=".6s"
                  >
                    <h3>{kf.title}</h3>
                    <p>{kf.desc}</p>
                  </div>
                ))}
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Content
