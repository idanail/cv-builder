import React from "react";
import { Col, Row } from "react-bootstrap";
import Footer from "../Footer/Footer";
import "./Popup.css";

const Popup = () => {
  return (
    <Row className="Popup">
      <Col>
        <Row className="bg-wrapper">
          <Col xs="12" md={{ span: 3, offset: 1 }}>
            <p className="h1">Did you finish all three? Way to go!</p>
            <p className="h4">
              Good luck on your next job! If you need help, counseling or just
              want to leave a suggestion, contact us at{" "}
              <a href="mailto:hello@wearelaika.com">hello@wearelaika.com</a>
            </p>
          </Col>
          <Col md="7" className="bg-popup"></Col>
        </Row>
        <Footer />
      </Col>
    </Row>
  );
};

export default Popup;
