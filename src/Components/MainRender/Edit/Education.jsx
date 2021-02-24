import React, { useContext } from "react";
import { Col, Row } from "react-bootstrap";
import { DataContext } from "../../../context/CvContext";
import CustomButton from "./CustomButton";
import EducationRender from "./EducationRender";

const Education = () => {
  const { addEducation, data, route } = useContext(DataContext);

  return (
    <Col xs="12" className="Education mb-4">
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
            Education
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
              function={addEducation}
              ignore={true}
            />
          </span>
        </Col>
      </Row>
      {data.education.map((el, i) => (
        <Row key={i}>
          {route === "web-development" && (
            <Col xs="1">
              <div className="bg-green list-square py-4"></div>
            </Col>
          )}
          <Col xs={route === "web-development" ? "11" : "12"}>
            <EducationRender el={el} />
          </Col>
        </Row>
      ))}
    </Col>
  );
};

export default Education;
