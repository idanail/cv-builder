import React, { useContext, useState } from "react";
import AutosizeInput from "react-input-autosize";
import { DataContext } from "../../../context/CvContext";
import CustomButton from "./CustomButton";

const RenderSkillsWebDev = ({ el }) => {
  const { removeSkill, editSkill, route, handleTips } = useContext(DataContext);
  const [isSkillFocused, setSkillFocused] = useState(false);
  return (
    <span
      className={`position-relative ${
        route === "design"
          ? "skills-edit-design"
          : route === "web-development"
          ? "skills-edit-web-dev"
          : route === "digital-marketing"
          ? "skills-edit-digital-marketing"
          : ""
      }`}
    >
      <AutosizeInput
        id={el.id}
        className={`mr-2 ${
          route === "web-development"
            ? "skill-edit bg-green"
            : route === "digital-marketing"
            ? "skill-edit bg-info"
            : route === "design"
            ? "mb-0 text-secondary h6 d-block"
            : "px-2"
        }`}
        maxLength="30"
        placeholder={el.skill}
        value={el.skill}
        type="text"
        name="skill skills"
        onChange={(e) => editSkill(e.target.value, el.id)}
        onClick={(e) => handleTips(e.target.name)}
        onFocus={() => setSkillFocused(true)}
        onBlur={() => setSkillFocused(false)}
        data-tips="skills"
      />
      {isSkillFocused && (
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
    </span>
  );
};

export default RenderSkillsWebDev;
