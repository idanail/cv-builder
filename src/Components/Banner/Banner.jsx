import React from "react";
import { Col, Row } from "react-bootstrap";
import "./Banner.css";

const Banner = () => {
  return (
    <Row className="Banner">
      <Col className="bg-yellow d-flex justify-content-end align-items-center">
        <span>Do you want to learn hands-on digital Skills?</span>
        <a
          href="https://brainster.co/"
          id="visit-brainster"
          target="_blank"
          rel="noreferrer"
          className="btn"
        >
          Visit brainster
        </a>
      </Col>
      <Col className="bg-violet d-flex justify-content-end align-items-center">
        <span>Do you want to receive job offers by IT Companies?</span>
        <a
          href="https://www.wearelaika.com/"
          id="visit-laika"
          target="_blank"
          rel="noreferrer"
          className="btn"
        >
          Visit Laika
        </a>
      </Col>
    </Row>
  );
};

export default Banner;
