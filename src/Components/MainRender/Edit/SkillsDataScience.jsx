import React, { useContext, useState } from "react";
import { Col, Row } from "react-bootstrap";
import AutosizeInput from "react-input-autosize";
import StarRatingComponent from "react-star-rating-controlled-component";
import TextareaAutosize from "react-textarea-autosize";
import { DataContext } from "../../../context/CvContext";
import "./assets/css/Skills.css";
import CustomButton from "./CustomButton";

const SkillRenderDataScience = ({ el }) => {
  const {
    handleTips,
    removeSkill,
    editSkill,
    route,
    handleSkillLevel,
  } = useContext(DataContext);
  const [isFocused, setFocused] = useState(false);

  return (
    <Row className="SkillsDataScience">
      <Col
        xs="12"
        className="d-flex justify-content-between mb-3"
        onClick={(e) => handleTips("skill skills")}
      >
        <div
          className={`d-flex w-100 justify-content-between ${
            isFocused && "pr-2"
          }`}
        >
          <TextareaAutosize
            id={el.id}
            // maxLength="10"
            value={el.skill}
            onChange={(e) => editSkill(e.target.value, el.id)}
            placeholder={el.skill}
            type="text"
            data-tips="skills"
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
          />
          <StarRatingComponent
            name="rate2"
            editing={true}
            onStarClick={(e) => {
              handleSkillLevel(e, el.id);
            }}
            renderStarIcon={() => (
              <div className="ml-2 p-2 rounded-circle"></div>
            )}
            starCount={5}
            value={el.level}
          />
        </div>
        <div>
          {isFocused && (
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
              function={() => removeSkill(el.id)}
              ignore={true}
            />
          )}
        </div>
      </Col>
    </Row>
  );
};

export default SkillRenderDataScience;
