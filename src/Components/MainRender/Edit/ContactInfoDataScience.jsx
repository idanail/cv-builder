import React, { useContext } from "react";
import { Col, Row } from "react-bootstrap";
import TextareaAutosize from "react-textarea-autosize";
import { DataContext } from "../../../context/CvContext";
import CustomButton from "./CustomButton";
import "../../DataScience/DataScience.css";

const ContactInfoDataScience = (props) => {
  const { data, route, editContactInfo, handleTips } = useContext(DataContext);
  return (
    <Col
      className={`ContactInfoDataScience my-3 py-2 ${
        route === "data-science" ? "data-science-contact" : "text-white bg-info"
      }`}
    >
      <Row
        className={
          route === "digital-marketing" ? "contactInfo-textarea-dm" : ""
        }
      >
        <Col
          xs={{ span: 10, offset: 0 }}
          md={{ span: 4, offset: 2 }}
          className="contact-wrapper"
        >
          <span className="d-flex">
            <CustomButton
              name="mailButton"
              color={`${route === "data-science" ? "text-dark" : "text-white"}`}
            />
            <TextareaAutosize
              type="text"
              name="mail contactInfo"
              className="ml-1"
              placeholder="E-mail"
              value={data.contactInfo.mail}
              onChange={(e) => editContactInfo(e)}
              onClick={(e) => handleTips(e.target.name)}
            />
          </span>
        </Col>
        <Col
          xs={{ span: 10, offset: 0 }}
          md={{ span: 5, offset: 1 }}
          className="contact-wrapper"
        >
          <div className="d-flex">
            <CustomButton
              name="phoneButton"
              color={`${route === "data-science" ? "text-dark" : "text-white"}`}
            />
            <TextareaAutosize
              type="tel"
              name="phone contactInfo"
              className="ml-1"
              placeholder="Phone number"
              value={data.contactInfo.phone}
              onChange={(e) => editContactInfo(e)}
              onClick={(e) => handleTips(e.target.name)}
            />
          </div>
        </Col>
        <Col
          xs={{ span: 10, offset: 0 }}
          md={{ span: 4, offset: 0 }}
          className="contact-wrapper"
        >
          <div className="d-flex">
            <CustomButton
              name="locationButton"
              color={`${route === "data-science" ? "text-dark" : "text-white"}`}
            />
            <TextareaAutosize
              type="tel"
              name="location contactInfo"
              className="ml-1"
              placeholder="Location"
              value={data.contactInfo.location}
              onChange={(e) => editContactInfo(e)}
              onClick={(e) => handleTips(e.target.name)}
            />
          </div>
        </Col>
        <Col
          xs={{ span: 10, offset: 0 }}
          md={{ span: 4, offset: 0 }}
          className="contact-wrapper"
        >
          <div className="d-flex">
            <CustomButton
              name="linkedInButton"
              color={`${route === "data-science" ? "text-dark" : "text-white"}`}
            />
            <TextareaAutosize
              type="tel"
              name="linkedin linkedInInfo"
              className="ml-1"
              placeholder="LinkedIn"
              value={data.contactInfo.linkedin}
              onChange={(e) => editContactInfo(e)}
              onClick={(e) => handleTips(e.target.name)}
            />
          </div>
        </Col>
        <Col
          xs={{ span: 10, offset: 0 }}
          md={{ span: 4, offset: 0 }}
          className="contact-wrapper"
        >
          <div className="d-flex">
            <CustomButton
              name="githubButton"
              color={`${route === "data-science" ? "text-dark" : "text-white"}`}
            />
            <TextareaAutosize
              type="tel"
              name="github gitHubInfo"
              className="ml-1"
              placeholder="GitHub"
              value={data.contactInfo.github}
              onChange={(e) => editContactInfo(e)}
              onClick={(e) => handleTips(e.target.name)}
            />
          </div>
        </Col>
      </Row>
    </Col>
  );
};

export default ContactInfoDataScience;
