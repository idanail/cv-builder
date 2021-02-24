import React, { useContext } from "react";
import { Col, Image, Row } from "react-bootstrap";
// import database from "../../assets/js/database";
import { DataContext } from "../../context/CvContext";
import CustomButton from "../MainRender/Edit/CustomButton";

const WebDevRender = () => {
  const { staticData, handleTips } = useContext(DataContext);
  const data = staticData.filter((el) => el.name === "Web development")[0];

  return (
    <Col className="WebDevRender">
      <Row>
        <Col md="8">
          <Row>
            <Col xs="1">
              <div className="bg-dark list-square py-4 mt-2"></div>
            </Col>
            <Col xs="10">
              <Row>
                <Col md="9">
                  <Row>
                    <Col>
                      <p
                        className="h3 text-capitalize"
                        onClick={(e) => handleTips("full-name intro")}
                      >
                        {data.CV.basicInfo.name}
                      </p>
                      <p
                        className="h6 text-green"
                        onClick={(e) => handleTips("basic-info intro")}
                      >
                        {data.CV.basicInfo.titles}
                      </p>
                      <p onClick={(e) => handleTips("goals about")}>
                        {data.CV.basicInfo.goals}
                      </p>
                    </Col>
                  </Row>
                </Col>
                <Col
                  md="3"
                  className="mt-3 px-0 mt-md-0 d-flex d-md-block justify-content-center"
                >
                  <Image
                    src={data.CV.image.default}
                    className="d-block w-100 rounded-circle web-dev-image uploaded-image"
                    alt={data.CV.basicInfo.name}
                    onClick={(e) => handleTips("about image")}
                  />
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
        <Col md="4" className="mt-4 mt-md-0">
          <ul
            className="contact-info pl-0"
            onClick={(e) => handleTips("info contactInfo")}
          >
            <li className="d-flex justify-content-end align-items-center">
              <span className="mr-2">{data.CV.contactInfo.mail}</span>
              <CustomButton name="mailButton" color="text-dark" />
            </li>
            <li className="d-flex justify-content-end align-items-center">
              <span className="mr-2">{data.CV.contactInfo.phone}</span>
              <CustomButton name="phoneButton" color="text-dark" />
            </li>
            <li className="d-flex justify-content-end align-items-center">
              <span className="mr-2">{data.CV.contactInfo.location}</span>
              <CustomButton name="locationButton" color="text-dark" />
            </li>
            <li className="d-flex justify-content-end align-items-center">
              <span className="mr-2">{data.CV.contactInfo.twitter}</span>
              <CustomButton name="twitterButton" color="text-dark" />
            </li>
          </ul>
        </Col>
      </Row>
      <hr />
      <Row>
        <Col md="7">
          <Row>
            <Col xs="12">
              <p className="h5 font-weight-bold text-uppercase">
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
                  <Col xs="1">
                    <div className="bg-green list-square py-4"></div>
                  </Col>
                  <Col xs="10">
                    <div key={i} className="mb-4">
                      <p className="h6 font-weight-bold">{el.position}</p>
                      <p className="h6">{el.company}</p>
                      <div className="font-italic text-green d-flex justify-content-between">
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
                      <p className="font-italic text-green mt-2 mb-1">
                        {el.aboutJob}
                      </p>
                      <ul className="job-desc-ul pl-4">
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
        </Col>
        <Col md="5">
          <Row>
            <Col
              className="col mb-4"
              onClick={(e) => handleTips("skill skills")}
            >
              <p className="h5 font-weight-bold text-uppercase">
                Skills & competencies
              </p>
              {data.CV.skills
                .map((el, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-1 bg-green mr-2 mb-2 skill"
                  >
                    {el}
                  </span>
                ))
                .reduce((prev, cur) => [prev, " ", cur])}
            </Col>
          </Row>
          <Row>
            <Col className="col mb-4">
              <p className="h5 font-weight-bold text-uppercase">
                Achievements & certificates
              </p>
              {data.CV.achievements.map((el, idx) => (
                <div key={idx}>
                  <p className={el.description ? "mb-0" : "mb-2"}>
                    {el.achievement}
                  </p>
                  {el.description && (
                    <p className="font-italic text-secondary mb-2">
                      {el.description}
                    </p>
                  )}
                </div>
              ))}
            </Col>
          </Row>
          <Row>
            <Col>
              <p className="h5 font-weight-bold text-uppercase">Interests</p>
              <Row>
                {data.CV.interests.map((el, index) => (
                  <div key={index} className="col-6 mb-2">
                    {el}
                  </div>
                ))}
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </Col>
  );
};

export default WebDevRender;
