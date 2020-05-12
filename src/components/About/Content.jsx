import React from "react"
import { Container, Row, Col } from "reactstrap"
import { Link } from "gatsby"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

import Dots from "../../images/dots.svg"
import { FaCheck } from "react-icons/fa"


const AboutTop = () => {
  const data = useStaticQuery(graphql`
    query {
      AboutTop: file(relativePath: { eq: "aboutTopImg.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return <Img fluid={data.AboutTop.childImageSharp.fluid} />
}

const Content = () => {
  return (
    <>
      <section id="about" className="about-area pt-70">
        <Container>
          <Row className="align-items-center">
            <Col lg={6}>
              <div className="about-content mt-50 wow fadeInLeftBig">
                <div className="section-title">
                  <div className="line"></div>
                  <h3 className="title">BESPOKE API INTEGRATION</h3>
                </div>
                <p className="text">				
				Most of our customers are so used to manual processes, that they don't even know they need automation, or where an API can add value. 
			However, an API can share valuable data and enhance the functionalities of an existing system with integration of new features. With Agile development becoming the standard in most organizations, the ways in which software development, automation and testing is approached, have changed dramatically.
				Pre-Agile, most of the time spent on automation was done against a graphical user interface. This is the piece that tools like UFT/QTP handle. In software application (app) development, API is the middle layer between the presentation (UI) and the database layer. APIs enable communication and data exchange from  software system to another.
                </p>
                <p className="text">				
				API testing is a software testing practice that tests the APIs directly — from their functionality, reliability, performance, to security. Part of integration testing, API testing effectively validates the logic of the build architecture within a short amount of time. We do this for you.
				PI automated testing is critical for product quality and CI/CD processes. Unlike GUI tests, API tests can cope with short release cycles and frequent changes — without breaking the test outputs.                   
                </p>
                <Link to="/contact" className="main-btn">
                  Talk to Us Today
                </Link>
              </div>
            </Col>
            <Col lg={6}>
              <div
                className="about-image text-center mt-50 wow fadeInRightBig"
                data-wow-duration="1s"
                data-wow-delay="0.5s"
              >
                <AboutTop />
              </div>
              <img className="dots" src={Dots} alt="dots" />
            </Col>
          </Row>
        </Container>
      </section>
      <section
        style={{ backgroundColor: "#f5f5f5" }}
        className="about-advantages mt-80 pt-120 pb-70"
      >
        <Container>
          <Row>
            <Col lg={4} className="mb-50">
              <h3>Integrating 3rd Party APIs Into Your Software Ensures:</h3>
              <div className="line"></div>
              <ul>
                <li>
                  <FaCheck /> Clean data
                </li>
                <li>
                  <FaCheck />
                  Timely data
                </li>
                <li>
                  <FaCheck />
                  Accurate and up to date data
                </li>
                <li>
                  <FaCheck />
                  Secure data
                </li>
              </ul>
            </Col>
            <Col lg={4} className="mb-50">
              <h3>APIs Are Important For A Number Of Reasons, They Can:</h3>
              <div className="line"></div>
              <ul>
                <li>
                  <FaCheck /> Provide tailored user experiences
                </li>
                <li>
                  <FaCheck />
                  Reach a wider audience
                </li>
                <li>
                  <FaCheck />
                  Speed up software development time
                </li>
                <li>
                  <FaCheck />
                  Integrate remote tools and functionality
                </li>
              </ul>
            </Col>
            <Col lg={4} className="mb-50">
              <h3>
                Examples Of Types Of 3rd Party API Integrations Are As Below:
              </h3>
              <div className="line"></div>
              <ul>
                <li>
                  <FaCheck /> Payment gateways
                </li>
                <li>
                  <FaCheck />
                  Google maps {"&"} locations
                </li>
                <li>
                  <FaCheck />
                  Company checks
                </li>
                <li>
                  <FaCheck />
                  Document signatures
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Content
