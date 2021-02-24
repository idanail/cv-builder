import React, { useContext } from "react";
import { DataContext } from "../../../context/CvContext";

const CustomButton = (props) => {
  const { icons, iconStyle } = useContext(DataContext);

  return (
    <div
      // style={{ color: "white" }}
      style={iconStyle[props.buttonStyle]}
      className={`CustomButton d-flex align-items-center`}
      onMouseDown={props.function}
      data-html2canvas-ignore={props.ignore}
    >
      {icons[props.name]}
    </div>
  );
};

export default CustomButton;
