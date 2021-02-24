import React from "react";
import { Col, Image, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../../App.css";
import backgroundImage from "../../assets/img/backgrounds/BackgroundFirstPage.png";
import Footer from "../Footer/Footer";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <Row className="LandingPage">
      <Col>
        <Row className="landing-main">
          <Col
            md={{ span: 8, offset: 2 }}
            className="d-flex align-items-center"
          >
            <Row>
              <Col md="6" className="d-flex flex-column justify-content-center">
                <h1 className="text-center text-md-left mb-4">
                  The Ultimate
                  <br />
                  CV & Portfolio Check-List
                </h1>
                <p className="text-secondary text-center text-md-left mb-4">
                  Are you a Web Developer, Data Scientist, Digital Marketer or a
                  Designer? Have your CV and portfolio in check and create a
                  5-star representation of your skills with this guide.
                </p>
                <div className="text-center text-md-left">
                  <Link
                    className="btn btn-violet px-5 py-3 text-uppercase font-weight-bold"
                    to="/categories"
                  >
                    Step inside
                  </Link>
                </div>
              </Col>
              <Col md="6">
                <Image src={backgroundImage} className="d-block w-100" alt="" />
              </Col>
            </Row>
          </Col>
        </Row>
        <Footer />
      </Col>
    </Row>
  );
};

export default LandingPage;
