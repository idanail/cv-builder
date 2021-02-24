import React, { useContext } from "react";
import { DataContext } from "../../../context/CvContext";
import "./assets/css/Skills.css";
import CustomButton from "./CustomButton";
import SkillsRest from "./SkillsRest";
import SkillsDataScience from "./SkillsDataScience";
import { Col, Row } from "react-bootstrap";

const Skills = (props) => {
  const { data, route, addSkill } = useContext(DataContext);

  return (
    <Col className="Skills mb-2">
      <Row>
        <Col className="d-flex justify-content-between align-items-top mb-2">
          <p
            className={`mb-0 font-weight-bold text-uppercase ${
              route === "design" ? "h6 text-black" : "h5"
            }`}
          >
            {route === "design" ? "Skills" : "Skills & competencies"}
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
              function={addSkill}
              ignore={true}
            />
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          {data.skills.map((el, i) =>
            route === "data-science" ? (
              <SkillsDataScience el={el} key={i} />
            ) : (
              <SkillsRest el={el} key={i} />
            )
          )}
        </Col>
      </Row>
    </Col>
  );
};

export default Skills;
