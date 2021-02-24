import React, { useContext } from "react";
import TextareaAutosize from "react-textarea-autosize";
import { DataContext } from "../../../context/CvContext";
import About from "./About";
import "../../DataScience/DataScience.css";
import { Col, Row } from "react-bootstrap";

const Name = () => {
  const { data, addName, addTitles, handleTips, route } = useContext(
    DataContext
  );

  return (
    <Col md={route === "web-development" ? "6" : ""} className="Name">
      <Row>
        {route === "web-development" && (
          <Col xs="1">
            <div className="bg-dark list-square py-4 mt-2"></div>
          </Col>
        )}
        <Col xs={route === "web-development" ? "10" : "12"}>
          <TextareaAutosize
            name="full-name intro"
            id={`${
              route === "design" ? "full-name-design" : "full-name-web-dev"
            }`}
            placeholder="Full Name"
            className={`${
              route === "web-design" ? "full-name-design" : "full-name-web-dev"
            }`}
            value={data.basicInfo.name}
            onChange={(e) => addName(e.target.value)}
            onClick={(e) => handleTips(e.target.name)}
          />
          <TextareaAutosize
            name="basic-info intro"
            id={`${
              route === "web-development"
                ? "basic-info-web-dev"
                : route === "data-science"
                ? "basic-info-data-science"
                : route === "digital-marketing"
                ? "basic-info-digital-marketing"
                : "basic-info-design"
            }`}
            placeholder="Professional title"
            className={`${
              route === "design"
                ? "mb-0 text-secondary letter-spacing about-design"
                : ""
            }`}
            value={data.basicInfo.titles}
            onChange={(e) => addTitles(e.target.value)}
            onClick={(e) => handleTips(e.target.name)}
          />
          {route !== "design" && <About />}
        </Col>
      </Row>
    </Col>
  );
};

export default Name;
