import React, { useContext, useState } from "react";
import { DataContext } from "../../../context/CvContext";
import CustomButton from "./CustomButton";
import "./assets/css/WorkExperience.css";
import TextareaAutosize from "react-textarea-autosize";

const WorkExperienceTask = ({ acc, i, el }) => {
  const { editTask, removeTask, route } = useContext(DataContext);
  const [isTaskFocused, setTaskFocused] = useState(false);

  return (
    <li className="WorkExperienceTask d-flex">
      <span className="d-flex justify-content-center position-relative">
        <TextareaAutosize
          type="text"
          value={acc.accomplishment}
          name="accomplishment jobDescription"
          className="task-textarea"
          placeholder="Accomplishment"
          onChange={(e) => editTask(e, i, acc.id, el.id)}
          onFocus={() => {
            setTaskFocused(true);
          }}
          onBlur={() => {
            setTaskFocused(false);
          }}
        />
        {isTaskFocused && (
          <div className="task-delete-button position-relative">
            <CustomButton
              name="removeButton"
              buttonStyle={
                route === "web-development"
                  ? "childGreen"
                  : route === "data-science" || route === "design"
                  ? "childViolet"
                  : route === "digital-marketing"
                  ? "childInfo"
                  : ""
              }
              function={() => removeTask(i, el.id)}
              ignore={true}
            />
          </div>
        )}
      </span>
    </li>
  );
};

export default WorkExperienceTask;
