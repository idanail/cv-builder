import React, { useContext } from "react";
import { DataContext } from "../../context/CvContext";
import StarRatingComponent from "react-star-rating-controlled-component";
import "./DataScience.css";
import CustomButton from "../MainRender/Edit/CustomButton";
import { Col, Image, Row } from "react-bootstrap";

const DataScienceRender = () => {
  const { staticData, handleTips } = useContext(DataContext);
  const data = staticData.filter((el) => el.name === "Data Science")[0];

  return (
    <Col className="DataScienceRender">
      <Row>
        <Col>
          <Row>
            <Col xs="4" md="3" className="d-flex justify-content-center">
              {/* Image */}
              <Image
                src={data.CV.image.default}
                className="d-block rounded-circle data-science-image"
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
              className="my-3 py-2 d-flex justify-content-around data-science-contact"
              onClick={(e) => handleTips("contact contactInfo")}
            >
              {/* E-mail, Phone */}
              <div className="d-flex align-items-center">
                <CustomButton name="mailButton" color="text-dark" />
                <span className="ml-2">{data.CV.contactInfo.mail}</span>
              </div>
              <div className="d-flex align-items-center">
                <CustomButton name="phoneButton" color="text-dark" />
                <span className="ml-2">{data.CV.contactInfo.phone}</span>
              </div>
            </Col>
          </Row>
          <Row>
            <Col md="6">
              {/* WorkExperience, Education */}
              <Row>
                <Col xs="12">
                  <p className="h5 text-dark font-weight-bold text-uppercase">
                    Work experience
                  </p>
                </Col>
                {data.CV.workExperience.map((el, i) => (
                  <Col
                    xs="12"
                    key={i}
                    onClick={(e) => handleTips("work workExperience")}
                  >
                    <Row>
                      <Col>
                        <div key={i} className="mb-4">
                          <p className="h6 mb-0 font-weight-bold">
                            {el.position}
                          </p>
                          <p className="h6">{el.company}</p>
                          <div className="font-italic text-secondary d-flex justify-content-between">
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
                          <p className="font-italic text-secondary mt-2 mb-1">
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
              <Row>
                <Col xs="12">
                  <p className="h5 text-dark font-weight-bold text-uppercase">
                    Education
                  </p>
                </Col>
                {data.CV.education.map((el, i) => (
                  <Col
                    xs="12"
                    key={i}
                    onClick={(e) => handleTips("work education")}
                  >
                    <Row>
                      <Col>
                        <div key={i} className="mb-4">
                          <p className="h6 mb-0 font-weight-bold">{el.study}</p>
                          <p className="h6">{el.institution}</p>
                          {el.period.startMonth && el.period.startYear && (
                            <div className="font-italic text-secondary d-flex justify-content-between">
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
                          )}
                          <p className="font-italic text-secondary mt-2 mb-1">
                            {el.aboutEducation}
                          </p>
                        </div>
                      </Col>
                    </Row>
                  </Col>
                ))}
              </Row>
            </Col>
            <Col md="6">
              {/* Skills, Achievments, Languages, Informal Education */}
              <Row>
                <Col xs="12">
                  <p className="h5 text-dark font-weight-bold text-uppercase">
                    Skills
                  </p>
                </Col>
                {data.CV.dataScienceSkills.map((el, i) => (
                  <Col
                    xs="12"
                    key={i}
                    className="mb-3 d-flex justify-content-between"
                    onClick={(e) => handleTips("skills skills")}
                  >
                    <span>{el.skill}</span>

                    <span className="d-flex">
                      <StarRatingComponent
                        name="rate"
                        editing={false}
                        renderStarIcon={() => (
                          <div className="ml-2 p-2 rounded-circle"></div>
                        )}
                        starCount={5}
                        value={el.level}
                      />
                    </span>
                  </Col>
                ))}
              </Row>
              <Row>
                <Col className="mb-3">
                  <p className="h5 text-dark font-weight-bold text-uppercase">
                    Certificates
                  </p>
                  {data.CV.certificates.map((el, i) => (
                    <p key={i} className="mb-2">
                      {el}
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
                    <p className="mb-0 font-italic">
                      Full Professional Proficiency
                    </p>
                  </Col>
                ))}
              </Row>
              <Row>
                <Col className="mb-3">
                  <Row>
                    <Col xs="12">
                      <p className="h5 text-dark font-weight-bold text-uppercase">
                        Informal education
                      </p>
                    </Col>
                    {data.CV.informalEducation.map((el, i) => (
                      <Col
                        xs="12"
                        key={i}
                        onClick={(e) =>
                          handleTips("education informalEducation")
                        }
                      >
                        <span className="px-2 py-1 mr-2 mb-2 skill">{el}</span>
                      </Col>
                    ))}
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </Col>
  );
};

export default DataScienceRender;
