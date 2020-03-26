import React from "react"
import { Container, Row, Col } from "reactstrap"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const HeroImg = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "header-hero.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return <Img fluid={data.placeholderImage.childImageSharp.fluid} />
}

const Hero = () => {
  return (
    <Container>
      <Row className="justify-content-center">
        <Col lg={8}>
          <div className="header-hero-content text-center">
            <h2
              className="header-title wow fadeInUp"
              data-wow-duration="1.3s"
              data-wow-delay=".5s"
            >
              INTEGRATE. STREAMLINE.
            </h2>

            <h3
              className="header-sub-title wow fadeInUp"
              data-wow-duration="1.3s"
              data-wow-delay=".2s"
            >
              We take care of technology so you can take care of your business.
            </h3>

            <Link
              to="/"
              className="header-btn wow fadeInUp"
              data-wow-duration="1.3s"
              data-wow-delay="1.1s"
            >
              Start building
            </Link>
          </div>
        </Col>
      </Row>
      <Row>
        <Col lg={12}>
          <div
            className="header-hero-image text-center wow fadeIn"
            data-wow-duration="1.3s"
            data-wow-delay=".4s"
          >
            <HeroImg />
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default Hero
