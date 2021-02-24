import React, { useContext } from "react";
import WebDevRender from "./WebDevRender";
import WebDevEdit from "./WebDevEdit";
import "./WebDevelopment.css";
import { DataContext } from "../../context/CvContext";
import { Row } from "react-bootstrap";

const WebDevelopment = () => {
  const { editMode } = useContext(DataContext);

  return (
    <Row className="WebDevelopment text-left mx-md-5 mt-3">
      {editMode ? <WebDevEdit /> : <WebDevRender />}
    </Row>
  );
};

export default WebDevelopment;
