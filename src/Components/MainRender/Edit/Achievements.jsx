import React, { useContext } from "react";
import { DataContext } from "../../../context/CvContext";
import "../../WebDevelopment/WebDevelopment.css";
import AchievementRender from "./AchievementRender";
import CustomButton from "./CustomButton";
import "./assets/css/Achievements.css";
import { Col, Row } from "react-bootstrap";

const Achievements = () => {
  const { data, addAchievement, route } = useContext(DataContext);

  return (
    <Col className="Achievements mb-2">
      <Row>
        <Col className="d-flex justify-content-between align-items-top mb-2">
          <p className="h5 mb-0 font-weight-bold text-uppercase">
            Achievements & certificates
          </p>
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
              function={addAchievement}
              ignore={true}
            />
          </span>
        </Col>
      </Row>
      {data.achievements.map((el, i) => (
        <AchievementRender key={i} el={el} />
      ))}
    </Col>
  );
};

export default Achievements;
