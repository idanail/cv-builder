import React, { useContext } from "react";
import { Row } from "react-bootstrap";
import { DataContext } from "../../context/CvContext";
import DataScienceEdit from "./DataScienceEdit";
import DataScienceRender from "./DataScienceRender";

const DataScience = () => {
  const { editMode } = useContext(DataContext);
  return (
    <Row className="DataScience text-left mx-md-5 mt-3">
      {editMode ? <DataScienceEdit /> : <DataScienceRender />}
    </Row>
  );
};

export default DataScience;
