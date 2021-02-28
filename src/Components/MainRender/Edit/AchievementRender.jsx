import React, { useContext, useState } from "react";
import TextareaAutosize from "react-textarea-autosize";
import { DataContext } from "../../../context/CvContext";
import CustomButton from "./CustomButton";

const AchievementRender = ({ el }) => {
  const {
    removeAchievement,
    editAchievement,
    handleAchievementEntered,
    route,
  } = useContext(DataContext);
  const [isFocused, setFocused] = useState(false);

  return (
    <div className="AchievementRender d-flex mb-2 justify-content-between align-items-center">
      <div>
        <TextareaAutosize
          type="text"
          name="achievement"
          className="achievement-edit"
          value={el.achievement}
          placeholder="Achievement"
          onChange={(e) => {
            editAchievement(e, el.id, e.target.name);
            handleAchievementEntered(e.target.value ? true : false);
          }}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
        />
        <TextareaAutosize
          type="text"
          name="description"
          className="achievement-edit-desc"
          value={el.description}
          placeholder="Description..."
          onChange={(e) => editAchievement(e, el.id, e.target.name)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
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
            function={() => removeAchievement(el.id)}
            ignore={true}
          />
        )}
      </div>
    </div>
  );
};

export default AchievementRender;
