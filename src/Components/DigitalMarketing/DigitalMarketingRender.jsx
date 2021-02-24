import React, { useContext } from "react";
import { Col, Image, Row } from "react-bootstrap";
import { DataContext } from "../../context/CvContext";
import CustomButton from "../MainRender/Edit/CustomButton";
import "./DigitalMarketing.css";

const DigitalMarketingRender = (props) => {
  const { staticData, handleTips } = useContext(DataContext);
  const data = staticData.filter((el) => el.name === "Digital Marketing")[0];
  return (
    <Col className="DigitalMarketingRender">
      <Row>
        <Col>
          <Row>
            <Col xs="4" md="3" className="d-flex justify-content-center">
              {/* Image */}
              <Image
                src={data.CV.image.default}
                className="d-block rounded-circle data-science-image image-cover"
                alt={data.CV.basicInfo.name}
                onClick={(e) => handleTips("about image")}
                width="100px"
                height="100px"
              />
            </Col>
            <Col xs="8" md="9">
              {/* Name, About */}
              <p
                className="h3 text-capitalize"
                onClick={(e) => handleTips("full-name intro")}
              >
                {data.CV.basicInfo.name}
              </p>
              <p
                className="h6 text-info"
                onClick={(e) => handleTips("basic-info intro")}
              >
                {data.CV.basicInfo.titles}
              </p>
              <p onClick={(e) => handleTips("goals about")}>
                {data.CV.basicInfo.goals}
              </p>
            </Col>
          </Row>
          <Row>
            <Col
              className="my-3 py-2 d-flex justify-content-around bg-info text-white"
              onClick={(e) => handleTips("contact contactInfo")}
            >
              {/* E-mail, Phone */}
              <div className="d-flex align-items-center">
                <CustomButton name="mailButton" color="text-white" />
                <span className="ml-2">{data.CV.contactInfo.mail}</span>
              </div>
              <div className="d-flex align-items-center">
                <CustomButton name="phoneButton" color="text-white" />
                <span className="ml-2">{data.CV.contactInfo.phone}</span>
              </div>
            </Col>
          </Row>
          <Row>
            <Col md="6">
              {/* Work Experience, Education */}
              <Row>
                <Col xs="12">
                  <p className="h5 text-dark font-weight-bold text-uppercase">
                    Work experience
                  </p>
                </Col>
                {data.CV.workExperience.map((el, i) => (
                  <Col
                    key={i}
                    xs="12"
                    onClick={(e) => handleTips("work workExperience")}
                  >
                    <Row>
                      <Col>
                        <div key={i} className="mb-4">
                          <p className="h6 mb-0 font-weight-bold">
                            {el.position}
                          </p>
                          <p className="h6">{el.company}</p>
                          <div className="font-italic text-info d-flex justify-content-between">
                            <span>
                              {el.period.startMonth
                                ? `${el.period.startMonth}/`
                                : ""}
                              {el.period.startYear} -{" "}
                              {el.period.endMonth
                                ? `${el.period.endMonth}/`
                                : ""}
                              {el.period.endYear
                                ? el.period.endYear
                                : "Present"}
                            </span>
                            <span>{el.period.location}</span>
                          </div>
                          <p className="font-italic text-info mt-2 mb-1">
                            {el.aboutJob}
                          </p>
                          <ul className="job-desc-ul pl-4 digital-marketing-ul">
                            {el.jobDescription.map((desc, i) => (
                              <li key={i}>{desc}</li>
                            ))}
                          </ul>
                        </div>
                      </Col>
                    </Row>
                  </Col>
                ))}
              </Row>
              <Row>
                <Col xs="12">
                  <p className="h5 text-dark font-weight-bold text-uppercase">
                    Education
                  </p>
                </Col>
                {data.CV.education.map((el, i) => (
                  <Col key={i} onClick={(e) => handleTips("work education")}>
                    <p className="h6 mb-0 font-weight-bold">{el.study}</p>
                    <p className="h6">{el.institution}</p>
                    {el.period.startMonth && el.period.startYear && (
                      <div className="font-italic text-info d-flex justify-content-between">
                        <span>
                          {el.period.startMonth
                            ? `${el.period.startMonth}/`
                            : ""}
                          {el.period.startYear} -{" "}
                          {el.period.endMonth ? `${el.period.endMonth}/` : ""}
                          {el.period.endYear ? el.period.endYear : "Present"}
                        </span>
                        <span>{el.period.location}</span>
                      </div>
                    )}
                    <p className="font-italic text-info mt-2 mb-1">
                      {el.aboutEducation}
                    </p>

                    <ul className="job-desc-ul pl-4 digital-marketing-ul educationDescription-list">
                      {el.educationDescription.map((el, i) => (
                        <li key={i} className="mr-3">
                          {el}
                        </li>
                      ))}
                    </ul>
                  </Col>
                ))}
              </Row>
            </Col>
            <Col md="6">
              {/* Skills, Achievments, Languages, Informal Education */}
              <Row>
                <Col
                  className="mb-4"
                  onClick={(e) => handleTips("skill skills")}
                >
                  <p className="h5 font-weight-bold text-uppercase">
                    Skills & competencies
                  </p>
                  {data.CV.skills
                    .map((el, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-info mr-2 mb-2 skill"
                      >
                        {el}
                      </span>
                    ))
                    .reduce((prev, cur) => [prev, " ", cur])}
                </Col>
              </Row>
              <Row>
                <Col className="mb-3">
                  <p className="h5 text-dark font-weight-bold text-uppercase">
                    Achievements
                  </p>
                  {data.CV.achievements.map((el, i) => (
                    <p key={i} className="mb-2">
                      {el.achievement}
                    </p>
                  ))}
                </Col>
              </Row>
              <Row>
                <Col xs="12">
                  <p className="h5 text-dark font-weight-bold text-uppercase">
                    Languages
                  </p>
                </Col>
                {data.CV.languages.map((el, i) => (
                  <Col
                    xs="12"
                    key={i}
                    className="mb-3"
                    onClick={(e) => handleTips("lang languages")}
                  >
                    <p className="mb-0">{el.language}</p>
                    <p className="mb-0 font-italic text-info">
                      Full Professional Proficiency
                    </p>
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </Col>
  );
};

export default DigitalMarketingRender;
