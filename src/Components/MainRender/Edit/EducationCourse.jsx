import React, { useContext, useState } from "react";
import TextareaAutosize from "react-textarea-autosize";
import { DataContext } from "../../../context/CvContext";
import CustomButton from "./CustomButton";

const EducationCourse = ({ thing, i, el }) => {
  const { editCourse, removeCourse, route } = useContext(DataContext);

  const [isCourseFocused, setCourseFocused] = useState(false);
  return (
    <li className="EducationCourse d-flex">
      <span className="d-flex justify-content-center position-relative">
        <TextareaAutosize
          type="text"
          value={thing.thingLearned}
          name="thingLearned educationDescription"
          placeholder="Thing learned"
          onChange={(e) => editCourse(e, i, thing.id, el.id)}
          onFocus={() => {
            setCourseFocused(true);
          }}
          onBlur={() => {
            setCourseFocused(false);
          }}
        />
        {isCourseFocused && (
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
              function={() => removeCourse(i, el.id)}
              ignore={true}
            />
          </div>
        )}
      </span>
    </li>
  );
};

export default EducationCourse;
