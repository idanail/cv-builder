import React, { useContext } from "react";
import { Row } from "react-bootstrap";
import { DataContext } from "../../context/CvContext";
import DesignEdit from "./DesignEdit";
import DesignRender from "./DesignRender";

const Design = () => {
  const { editMode } = useContext(DataContext);
  return (
    <Row className="Design text-left mx-md-5 mt-3">
      {editMode ? <DesignEdit /> : <DesignRender />}
    </Row>
  );
};

export default Design;
