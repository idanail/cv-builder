import React, { useContext } from "react";
import "./assets/css/ContactInfo.css";
import { DataContext } from "../../../context/CvContext";
import CustomButton from "./CustomButton";
import { Col } from "react-bootstrap";

const ContactInfo = () => {
  const { data, editContactInfo, handleTips, route } = useContext(DataContext);
  return (
    <Col
      md={route === "web-development" ? "4" : ""}
      className="ContactInfo mt-0"
    >
      <ul className="contact-info pl-0">
        <li className="d-flex">
          <input
            type="text"
            className={`mb-0 ${
              route === "design" ? "h6 text-secondary" : "mr-2"
            }`}
            name="mail contactInfo"
            placeholder="E-mail"
            value={data.contactInfo.mail}
            onChange={(e) => editContactInfo(e)}
            onClick={(e) => handleTips(e.target.name)}
          />
          {route !== "design" && (
            <CustomButton name="mailButton" color="text-dark" />
          )}
        </li>
        <li className="d-flex">
          <input
            type="tel"
            className={`mb-0 ${
              route === "design" ? "h6 text-secondary" : "mr-2"
            }`}
            name="phone contactInfo"
            placeholder="Phone number"
            value={data.contactInfo.phone}
            onChange={(e) => editContactInfo(e)}
            onClick={(e) => handleTips(e.target.name)}
          />
          {route !== "design" && (
            <CustomButton name="phoneButton" color="text-dark" />
          )}
        </li>
        <li className="d-flex">
          <input
            type="text"
            className={`mb-0 ${
              route === "design" ? "h6 text-secondary" : "mr-2"
            }`}
            name="location contactInfo"
            placeholder="City, Country"
            value={data.contactInfo.location}
            onChange={(e) => editContactInfo(e)}
            onClick={(e) => handleTips(e.target.name)}
          />
          {route !== "design" && (
            <CustomButton name="locationButton" color="text-dark" />
          )}
        </li>
        <li className="d-flex">
          <input
            type="text"
            className={`mb-0 ${
              route === "design" ? "h6 text-secondary" : "mr-2"
            }`}
            name="linkedin contactInfo"
            placeholder="LinkedIn"
            value={data.contactInfo.linkedin}
            onChange={(e) => editContactInfo(e)}
            onClick={(e) => handleTips(e.target.name)}
          />
          {route !== "design" && (
            <CustomButton name="linkedInButton" color="text-dark" />
          )}
        </li>
        {route !== "design" && (
          <li className="d-flex">
            <input
              type="text"
              className={`mb-0 ${
                route === "design" ? "h6 text-secondary" : "mr-2"
              }`}
              name="github contactInfo"
              placeholder="GitHub"
              value={data.contactInfo.github}
              onChange={(e) => editContactInfo(e)}
              onClick={(e) => handleTips(e.target.name)}
            />
            {route !== "design" && (
              <CustomButton name="githubButton" color="text-dark" />
            )}
          </li>
        )}
      </ul>
    </Col>
  );
};

export default ContactInfo;
