import React, { useContext, useState } from "react";
import TextareaAutosize from "react-textarea-autosize";
import { DataContext } from "../../../context/CvContext";
import CustomButton from "./CustomButton";
import "./assets/css/Education.css";
import EducationCourse from "./EducationCourse";
import { Col, Row } from "react-bootstrap";

const EducationRender = ({ el }) => {
  const {
    removeEducation,
    editEducation,
    addCourse,
    handleTips,
    route,
  } = useContext(DataContext);
  // const [setShowPresent] = useState(false);
  const [isFocused, setFocused] = useState(false);

  return (
    <div
      className={`mb-2 ${
        route === "design"
          ? "d-flex flex-column flex-nowrap"
          : "EducationRender"
      }`}
    >
      <div
        className={`d-flex position-relative ${
          route === "design" ? "order-3" : ""
        }`}
      >
        <TextareaAutosize
          name="degree education"
          placeholder="Degree"
          className={`${
            route === "design"
              ? "position-title-design h6 text-secondary"
              : "position-title"
          }`}
          value={el.degree}
          onChange={(e) => editEducation(e, el.id, e.target.name)}
          onClick={(e) => handleTips(e.target.name)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
        />
        {isFocused && (
          <span>
            <CustomButton
              name="removeButton"
              buttonStyle={
                route === "web-development"
                  ? "parentGreen"
                  : route === "data-science" || route === "design"
                  ? "parentViolet"
                  : route === "digital-marketing"
                  ? "parentInfo"
                  : ""
              }
              function={() => removeEducation(el.id)}
              ignore={true}
            />
          </span>
        )}
      </div>
      <TextareaAutosize
        name="university education"
        id="university"
        className={`${
          route === "design" ? "order-2 h6 text-secondary mb-0" : ""
        }`}
        value={el.university}
        placeholder="University"
        onChange={(e) => editEducation(e, el.id, e.target.name)}
        onClick={(e) => handleTips(e.target.name)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      />
      <Row className={route === "design" ? "order-1 mb-1" : ""}>
        <Col xs="5">
          <div
            className={`font-italic d-flex justify-content-between ${
              route === "web-development"
                ? "text-green"
                : route === "digital-marketing"
                ? "text-info"
                : route === "design"
                ? "font-weight-bold"
                : ""
            }`}
          >
            <div className="d-flex align-items-start">
              {route !== "design" && (
                <>
                  <input
                    maxLength="2"
                    type="text"
                    name="startMonth education"
                    className={
                      route === "design"
                        ? "start-end-month-design"
                        : route === "data-science"
                        ? "start-end-month-data-science"
                        : route === "digital-marketing"
                        ? "start-end-month-digital-marketing"
                        : "start-end-month"
                    }
                    value={el.startMonth}
                    placeholder="00"
                    onChange={(e) => editEducation(e, el.id, e.target.name)}
                    onClick={(e) => handleTips(e.target.name)}
                  />
                  <span className="d-flex align-items-center">/</span>
                </>
              )}
              <input
                maxLength="4"
                type="text"
                name="startYear education"
                className={
                  route === "design"
                    ? "start-end-year-design w-42"
                    : route === "data-science"
                    ? "start-end-year-data-science w-38"
                    : route === "digital-marketing"
                    ? "start-end-year-digital-marketing"
                    : "start-end-year"
                }
                value={el.startYear}
                placeholder="0000"
                onChange={(e) => editEducation(e, el.id, e.target.name)}
                onClick={(e) => handleTips(e.target.name)}
              />
              <span
                className={route === "design" ? "font-weight-bold" : "mx-2"}
              >
                -
              </span>
              {el.present ? (
                <p className="mb-0">{route === "design" ? "" : "Present"}</p>
              ) : (
                <>
                  {route !== "design" && (
                    <>
                      <input
                        maxLength="2"
                        type="text"
                        name="endMonth education"
                        className={
                          route === "design"
                            ? "start-end-month-design"
                            : route === "data-science"
                            ? "start-end-month-data-science"
                            : route === "digital-marketing"
                            ? "start-end-month-digital-marketing"
                            : "start-end-month"
                        }
                        value={el.endMonth}
                        placeholder="00"
                        onChange={(e) => editEducation(e, el.id, e.target.name)}
                        onClick={(e) => handleTips(e.target.name)}
                      />
                      <span className="d-flex align-items-center">/</span>
                    </>
                  )}
                  <input
                    maxLength="4"
                    type="text"
                    name="endYear education"
                    className={
                      route === "design"
                        ? "start-end-year-design w-42"
                        : route === "data-science"
                        ? "start-end-year-data-science w-38"
                        : route === "digital-marketing"
                        ? "start-end-year-digital-marketing"
                        : "start-end-year"
                    }
                    value={el.endYear}
                    placeholder="0000"
                    onChange={(e) => editEducation(e, el.id, e.target.name)}
                    onClick={(e) => handleTips(e.target.name)}
                    // onFocus={() => setShowPresent(true)}
                  />
                </>
              )}
            </div>
          </div>
        </Col>
        <Col
          xs={route === "design" ? "7" : "3"}
          className="d-flex justify-content-end"
        >
          <div className="form-check d-flex align-items-center">
            <input
              type="checkbox"
              name="present"
              className="form-check-input present"
              onChange={(e) => editEducation(e, el.id, e.target.name)}
              // onBlur={() => setShowPresent(false)}
              data-html2canvas-ignore
            />
            <label
              className="form-check-label"
              htmlFor="flexCheckDefault"
              data-html2canvas-ignore
            >
              Present
            </label>
          </div>
        </Col>
        {route !== "design" && (
          <Col xs="4">
            <input
              type="text"
              name="location education"
              className={`text-right ${
                route === "design"
                  ? "city-country-design"
                  : route === "data-science"
                  ? "city-country-data-science"
                  : route === "digital-marketing"
                  ? "city-country-digital-marketing"
                  : "city-country"
              }`}
              value={el.location}
              placeholder="City, Country"
              onChange={(e) => editEducation(e, el.id, e.target.name)}
              onClick={(e) => handleTips(e.target.name)}
            />
          </Col>
        )}
      </Row>
      {route !== "design" && (
        <>
          <span className="d-flex align-items-center mt-2">
            <input
              type="text"
              name="courses education"
              value={el.courses}
              className={`font-italic ${
                route === "web-development"
                  ? "text-green"
                  : route === "digital-marketing"
                  ? "text-info"
                  : ""
              }`}
              placeholder="Studied/Courses"
              onChange={(e) => editEducation(e, el.id, e.target.name)}
              onClick={(e) => handleTips(e.target.name)}
            />
            <CustomButton
              name="addButton"
              buttonStyle={
                route === "web-development"
                  ? "childGreen"
                  : route === "data-science" || route === "design"
                  ? "childViolet"
                  : route === "digital-marketing"
                  ? "childInfo"
                  : ""
              }
              function={() => addCourse(el.id)}
              ignore={true}
            />
          </span>
          <ul
            className={`pl-0 mt-2 ${
              route === "web-development"
                ? "edit-job-desc-ul-web-dev"
                : route === "data-science"
                ? "edit-job-desc-ul-data-science"
                : route === "digital-marketing"
                ? "edit-job-desc-ul-digital-marketing"
                : ""
            }`}
          >
            {el.educationDescription.map((thing, i) => (
              <EducationCourse key={i} thing={thing} i={i} el={el} />
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default EducationRender;
