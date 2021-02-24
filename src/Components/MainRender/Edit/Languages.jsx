import React, { useContext } from "react";
import { Col } from "react-bootstrap";
import { DataContext } from "../../../context/CvContext";
import "../../WebDevelopment/WebDevelopment.css";
import CustomButton from "./CustomButton";
import LanguageRender from "./LanguageRender";

const Languages = () => {
  const { data, addLanguage, route } = useContext(DataContext);

  return (
    <Col className="Languages mb-4">
      <div className="d-flex justify-content-between align-items-top mb-2">
        <p className="h5 mb-0 font-weight-bold text-uppercase">Languages</p>
        <span className="ml-3">
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
            function={addLanguage}
            ignore={true}
          />
        </span>
      </div>
      {data.languages.map((el, i) => (
        <LanguageRender key={i} el={el} />
      ))}
    </Col>
  );
};

export default Languages;
