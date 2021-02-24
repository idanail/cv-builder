import React, { useContext } from "react";
import { Col, Row } from "react-bootstrap";
import { DataContext } from "../../context/CvContext";
import "./Design.css";

const DesignRender = () => {
  const { staticData, handleTips } = useContext(DataContext);
  const data = staticData.filter((el) => el.name === "Design")[0];
  return (
    <Col md="10" className="DesignRender">
      <Row>
        <Col md="7" className="bg-black p-5 d-none d-md-block"></Col>
        <Col md="5" className="d-none d-md-block"></Col>
      </Row>
      <Row className="border-black-right border-black-bottom border-black-top-mobile mb-3">
        <Col
          md="7"
          className="bg-black text-white pl-5 pr-4 pb-5 mr-0 pt-5 pt-md-0"
        >
          <p
            className="h3 font-weight-bold text-capitalize letter-spacing"
            onClick={(e) => handleTips("full-name intro")}
          >
            {data.CV.basicInfo.name}
          </p>
          <p
            className="mb-0 text-secondary letter-spacing"
            onClick={(e) => handleTips("basic-info intro")}
          >
            {data.CV.basicInfo.titles}
          </p>
        </Col>
        <Col md="5" className="d-none d-md-block border-black-top"></Col>
        <Col xs="12">
          <Row>
            <Col xs="10" md="7" className="py-5 pl-5 pr-0 border-black-left">
              <p
                className="font-16 text-secondary mb-0"
                onClick={(e) => handleTips("goals about")}
              >
                {data.CV.basicInfo.goals}
              </p>
            </Col>
          </Row>
        </Col>
        <Col md="6" className="border-black-left pb-4 pb-md-5">
          <Row>
            <Col className="pl-5">
              <Row>
                <Col xs="12">
                  <p className="h6 font-weight-bold text-uppercase">
                    Work experience
                  </p>
                </Col>
                {data.CV.workExperience.map((el, i) => (
                  <Col
                    xs="12"
                    key={i}
                    className="mb-4"
                    onClick={(e) => handleTips("work workExperience")}
                  >
                    <div className="d-flex justify-content-between">
                      <p className="h6 mb-1 font-weight-bold">
                        {el.period.startMonth ? `${el.period.startMonth}.` : ""}
                        {el.period.startYear} -{" "}
                        {el.period.endMonth ? `${el.period.endMonth}.` : ""}
                        {el.period.endYear ? el.period.endYear : ""}
                      </p>
                      <span>{el.period.location}</span>
                    </div>
                    <p className="h6 mb-1 text-secondary">{el.company}</p>
                    <p className="h6 text-secondary">{el.position}</p>
                    <p className="h6 text-secondary">{el.jobDescription}</p>
                  </Col>
                ))}
                <Col xs="12">
                  <p className="h6 font-weight-bold text-uppercase">Contact</p>
                  <ul className="design-contact-info text-secondary pl-0 mb-0">
                    <li className="h6 mb-0">{data.CV.contactInfo.phone}</li>
                    <li className="h6 mb-0">{data.CV.contactInfo.mail}</li>
                    <li className="h6 mb-0">{data.CV.contactInfo.linkedin}</li>
                    <li className="h6 mb-0">{data.CV.contactInfo.location}</li>
                  </ul>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
        <Col
          md={{ span: 4, offset: 1 }}
          className="pl-5 pb-4 pl-md-0 border-black-left-mobile"
        >
          <Row>
            <Col xs="12">
              <p className="h6 font-weight-bold text-uppercase">Education</p>
            </Col>
            {data.CV.education.map((el, i) => (
              <Col
                key={i}
                xs="12"
                className="mb-4"
                onClick={(e) => handleTips("work education")}
              >
                <div className="d-flex justify-content-between">
                  <p className="h6 mb-1 text-secondary">
                    {el.period.startMonth ? `${el.period.startMonth}.` : ""}
                    {el.period.startYear} -{" "}
                    {el.period.endMonth ? `${el.period.endMonth}.` : ""}
                    {el.period.endYear ? el.period.endYear : ""}
                  </p>
                  <span>{el.period.location}</span>
                </div>
                <p className="h6 mb-1 text-secondary">{el.institution}</p>
              </Col>
            ))}
            <Col xs="12">
              <p className="h6 text-uppercase font-weight-bold">Skills</p>
              <ul className="design-contact-info text-secondary pl-0">
                {data.CV.skills.map((el, i) => (
                  <li key={i} className="h6 mb-0">
                    {el}
                  </li>
                ))}
              </ul>
            </Col>
          </Row>
        </Col>
      </Row>
    </Col>
  );
};

export default DesignRender;
