import React, { useContext, useState } from "react";
import { DataContext } from "../../../context/CvContext";
import CustomButton from "./CustomButton";
import "./assets/css/Languages.css";

const LanguageRender = ({ el }) => {
  const {
    removeLanguage,
    editLanguage,
    handleFocus,
    languageLevelHandler,
    route,
  } = useContext(DataContext);

  const [isLangFocused, setLangFocused] = useState(false);

  return (
    <div className="LanguageRender mb-2 d-flex justify-content-between align-items-center">
      <div>
        <input
          type="text"
          name="language languages"
          className="language-edit"
          value={el.language}
          placeholder={el.language ? el.language : "Language"}
          onChange={(e) => editLanguage(e, el.id, e.target.name)}
          onFocus={() => {
            setLangFocused(true);
            handleFocus(true);
          }}
          onBlur={() => {
            setLangFocused(false);
            handleFocus(false);
          }}
        />

        {!isLangFocused ? (
          <input
            type="text"
            name="level languages"
            className="language-edit-desc"
            value={
              el.level === 1
                ? "Elementary Proficiency"
                : el.level === 2
                ? "Limited Working Proficiency"
                : el.level === 3
                ? "Professional Working Proficiency"
                : el.level === 4
                ? "Full Professional Proficiency"
                : "Native or Bilingual Proficiency"
            }
            placeholder="Level"
            onChange={(e) => editLanguage(e, el.id, e.target.name)}
            // onClick={(e) => handleTips(e.target.name)}
            onFocus={() => {
              setLangFocused(true);
              handleFocus(true);
            }}
            onBlur={() => {
              setLangFocused(false);
              handleFocus(false);
            }}
          />
        ) : (
          <div className="level-wrapper">
            <span
              onMouseDown={(e) => languageLevelHandler(e, el.id)}
              className="1"
              onClick={() => setLangFocused(false)}
            >
              1/5
            </span>
            <span
              onMouseDown={(e) => languageLevelHandler(e, el.id)}
              className="2"
              onClick={() => setLangFocused(false)}
            >
              2/5
            </span>
            <span
              onMouseDown={(e) => languageLevelHandler(e, el.id)}
              className="3"
              onClick={() => setLangFocused(false)}
            >
              3/5
            </span>
            <span
              onMouseDown={(e) => languageLevelHandler(e, el.id)}
              className="4"
              onClick={() => setLangFocused(false)}
            >
              4/5
            </span>
            <span
              onMouseDown={(e) => languageLevelHandler(e, el.id)}
              className="5"
              onClick={() => setLangFocused(false)}
            >
              5/5
            </span>
          </div>
        )}
      </div>
      {isLangFocused && (
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
          function={() => removeLanguage(el.id)}
          ignore={true}
        />
      )}
    </div>
  );
};

export default LanguageRender;
