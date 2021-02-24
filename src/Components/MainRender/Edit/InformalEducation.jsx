import React, { useContext } from "react";
import { DataContext } from "../../../context/CvContext";
import CustomButton from "./CustomButton";
import InformalEducationRender from "./InformalEducationRender";

const InformalEducation = (props) => {
  const { data, route, addInformalEducation } = useContext(DataContext);
  return (
    <div className="Education col-12">
      <div className="d-flex justify-content-between align-items-top mb-2">
        <p className="h5 mb-0 font-weight-bold text-uppercase">
          Informal education
        </p>
        <div className="ml-5">
          <CustomButton
            name="addButton"
            buttonStyle={
              route === "web-development"
                ? "parentGreen"
                : route === "data-science" || route === "design"
                ? "parentViolet"
                : route === "digital-marketing"
                ? "parentInfo"
                : ""
            }
            function={addInformalEducation}
            ignore={true}
          />
        </div>
      </div>

      {data.informalEducation.map((el, i) => (
        <InformalEducationRender key={i} el={el} />
      ))}
    </div>
  );
};

export default InformalEducation;
