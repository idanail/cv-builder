import React, { useContext } from "react";
import TextareaAutosize from "react-textarea-autosize";
import { DataContext } from "../../../context/CvContext";

const About = () => {
  const { data, addGoals, handleTips, route } = useContext(DataContext);
  return (
    <TextareaAutosize
      name="goals about"
      id="goals"
      className={`pb-1 ${route === "design" ? "text-secondary h6" : ""}`}
      placeholder="About me"
      value={data.basicInfo.goals}
      onChange={(e) => addGoals(e.target.value)}
      onClick={(e) => handleTips(e.target.name)}
    />
  );
};

export default About;
