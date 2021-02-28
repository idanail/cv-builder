import React, { useContext, useEffect } from "react";
import { DataContext } from "../../context/CvContext";
import About from "../MainRender/Edit/About";
import Name from "../MainRender/Edit/Name";
import WorkExperience from "../MainRender/Edit/WorkExperience";
import ContactInfo from "../MainRender/Edit/ContactInfo";
import Education from "../MainRender/Edit/Education";
import Skills from "../MainRender/Edit/Skills";
import { Col, Row } from "react-bootstrap";

const DesignEdit = () => {
  const { handleLanguageEntered, handleAchievementEntered } = useContext(
    DataContext
  );

  useEffect(() => {
    handleLanguageEntered(true);
    handleAchievementEntered(true);
  });

  return (
    <Col md="10" className="DesignEdit">
      <Row>
        <Col md="7" className="bg-black p-5 d-none d-md-block"></Col>
        <Col md="5"></Col>
      </Row>
      <Row className="border-black-right border-black-bottom border-black-top-mobile mb-3">
        <Col
          md="7"
          className="bg-black text-white pt-5 pt-md-0 pr-4 pb-5 pl-5 mr-0"
        >
          <Name />
        </Col>
        <Col md="5" className="d-none d-md-block border-black-top"></Col>
        <Col xs="12">
          <Row>
            <Col xs="10" md="7" className="py-5 pl-5 pr-0 border-black-left">
              <About />
            </Col>
          </Row>
        </Col>
        <Col md="6" className="border-black-left pb-md-5">
          <Row>
            <Col className="pl-5 pr-5 pr-md-0">
              <Row>
                <WorkExperience />
                <Col xs="12">
                  <p className="h6 font-weight-bold text-uppercase">Contact</p>
                  <Row>
                    <ContactInfo />
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
        <Col
          md={{ span: 4, offset: 1 }}
          className="pl-5 pr-5 pr-md-0 pb-4 pl-md-0 border-black-left-mobile"
        >
          <Row>
            <Education />
            <Col xs="12">
              <Row>
                <Skills />
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </Col>
  );
};

export default DesignEdit;
