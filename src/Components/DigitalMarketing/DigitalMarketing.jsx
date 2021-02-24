import React, { useContext } from "react";
import { Row } from "react-bootstrap";
import { DataContext } from "../../context/CvContext";
import DigitalMarketingEdit from "./DigitalMarketingEdit";
import DigitalMarketingRender from "./DigitalMarketingRender";

const DigitalMarketing = () => {
  const { editMode } = useContext(DataContext);
  return (
    <Row className="DigitalMarketing text-left mx-md-5 mt-3">
      {editMode ? <DigitalMarketingEdit /> : <DigitalMarketingRender />}
    </Row>
  );
};

export default DigitalMarketing;
