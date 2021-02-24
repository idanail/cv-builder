import React, { useContext, useState } from "react";
import AutosizeInput from "react-input-autosize";
import { DataContext } from "../../../context/CvContext";
import CustomButton from "./CustomButton";
import "./assets/css/InformalEducation.css";

const InformalEducationRender = ({ el }) => {
  const { removeInformalEducation, editInformalEducation, route } = useContext(
    DataContext
  );
  const [isEducationFocused, setEducationFocused] = useState(false);

  return (
    <span className="InformalEducationRender position-relative">
      <AutosizeInput
        name="education informalEducation"
        maxLength="35"
        id={el.id}
        className="px-2 mr-2 mb-2 informal-education"
        onChange={(e) => editInformalEducation(e, el.id, e.target.name)}
        value={el.education}
        placeholder="Informal education"
        type="text"
        onFocus={() => setEducationFocused(true)}
        onBlur={() => setEducationFocused(false)}
        data-tips="skills"
      />
      {isEducationFocused && (
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
          function={() => removeInformalEducation(el.id)}
          ignore={true}
        />
      )}
    </span>
  );
};

export default InformalEducationRender;
