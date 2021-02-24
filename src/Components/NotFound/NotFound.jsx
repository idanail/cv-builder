import React from "react";
import { Col, Jumbotron, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./NotFound.css";
import "../Landing page/LandingPage.css";

const NotFound = () => {
  return (
    <Row className="NotFound">
      <Col className="text-center">
        <Jumbotron>
          <h1 className="font-weight-bold">404 error</h1>
          <p className="h5 mt-3">
            The page you are looking for could not be found.
          </p>
          <Link className="btn btn-violet mt-3" to="/">
            Go to Homepage
          </Link>
        </Jumbotron>
      </Col>
    </Row>
  );
};

export default NotFound;
