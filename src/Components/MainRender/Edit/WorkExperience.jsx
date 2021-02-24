import React, { useContext } from "react";
import { Col, Row } from "react-bootstrap";
import { DataContext } from "../../../context/CvContext.jsx";
import "./assets/css/WorkExperience.css";
import CustomButton from "./CustomButton.jsx";
import WorkExperienceRender from "./WorkExperienceRender.jsx";

const WorkExperience = () => {
  const { addWorkExperience, data, route } = useContext(DataContext);
  return (
    <Col xs="12" className="WorkExperience mb-2">
      <Row>
        {route === "web-development" && <Col xs="1"></Col>}
        <Col
          xs={route === "web-development" ? "11" : "12"}
          className="d-flex justify-content-between align-items-center mb-2"
        >
          <p
            className={`mb-0 font-weight-bold text-uppercase ${
              route === "design" ? "h6" : "h5"
            }`}
          >
            Work experience
          </p>
          <span className="ml-3">
            <CustomButton
              name="addButton"
              buttonStyle={
                route === "web-development"
                  ? "parentGreen"
                  : route === "data-science" || route === "design"
                  ? "parentViolet"
                  : route === "digital-marketing"
                  ? "parentInfo"
                  : ""
              }
              function={addWorkExperience}
              ignore={true}
            />
          </span>
        </Col>
      </Row>
      {data.workExperience.map((el, i) => (
        <Row key={i}>
          {route === "web-development" && (
            <Col xs="1">
              <div className="bg-green list-square py-4"></div>
            </Col>
          )}
          <Col xs={route === "web-development" ? "11" : "12"}>
            <WorkExperienceRender el={el} />
          </Col>
        </Row>
      ))}
    </Col>
  );
};

export default WorkExperience;
