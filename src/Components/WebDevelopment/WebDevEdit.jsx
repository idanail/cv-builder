import React from "react";
import { Col, Row } from "react-bootstrap";
import Achievements from "../MainRender/Edit/Achievements";
import ContactInfo from "../MainRender/Edit/ContactInfo";
import Education from "../MainRender/Edit/Education";
import ImageComp from "../MainRender/Edit/ImageComp";
import Languages from "../MainRender/Edit/Languages";
import Name from "../MainRender/Edit/Name";
import Skills from "../MainRender/Edit/Skills";
import WorkExperience from "../MainRender/Edit/WorkExperience";

const WebDevEdit = () => {
  return (
    <Col className="WebDevEdit">
      <Row>
        <Name />
        <ImageComp />
        <ContactInfo />
      </Row>
      <hr className="rounded-pill" />
      <Row>
        <Col md="7">
          <Row>
            <WorkExperience />
            <Education />
          </Row>
        </Col>
        <Col md="5">
          <Row>
            <Skills />
          </Row>
          <Row>
            <Achievements />
          </Row>
          <Row>
            <Languages />
          </Row>
        </Col>
      </Row>
    </Col>
  );
};

export default WebDevEdit;
