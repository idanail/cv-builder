import React from "react";
import { Col, Row } from "react-bootstrap";
import "./Footer.css";

const Footer = () => {
  return (
    <Row className="Footer">
      <Col className="text-center text-secondary">
        <span>
          Created with {"<"}3 by the{" "}
          <a
            href="https://codepreneurs.brainster.co/"
            target="_blank"
            rel="noreferrer"
          >
            Brainster Coding Academy
          </a>{" "}
          students and{" "}
          <a
            href="https://www.wearelaika.com/"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            wearelaika.com
          </a>
        </span>
      </Col>
    </Row>
  );
};

export default Footer;
