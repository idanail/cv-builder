import React from "react";
import { Col, Row } from "react-bootstrap";
import Achievements from "../MainRender/Edit/Achievements";
import ContactInfoDataScience from "../MainRender/Edit/ContactInfoDataScience";
import Education from "../MainRender/Edit/Education";
import ImageComp from "../MainRender/Edit/ImageComp";
import InformalEducation from "../MainRender/Edit/InformalEducation";
import Languages from "../MainRender/Edit/Languages";
import Name from "../MainRender/Edit/Name";
import Skills from "../MainRender/Edit/Skills";
import WorkExperience from "../MainRender/Edit/WorkExperience";

const DigitalMarketingEdit = (props) => {
  return (
    <Col className="DigitalMarketingEdit">
      <Row>
        <Col xs="4" md="3">
          <ImageComp />
        </Col>
        <Col xs="8" md="9">
          <Row>
            <Name />
          </Row>
        </Col>
      </Row>
      <Row>
        <ContactInfoDataScience />
      </Row>
      <Row>
        <Col md="6">
          <Row>
            <Col xs="12">
              <WorkExperience />
            </Col>
            <Col xs="12">
              <Education />
            </Col>
          </Row>
        </Col>
        <Col md="6">
          <Row>
            <Col xs="12">
              <Skills />
            </Col>
            <Col xs="12">
              <Achievements />
            </Col>
            <Col xs="12" className="mt-3">
              <Languages />
            </Col>
            <Col xs="12">
              <InformalEducation />
            </Col>
          </Row>
        </Col>
      </Row>
    </Col>
  );
};

export default DigitalMarketingEdit;
