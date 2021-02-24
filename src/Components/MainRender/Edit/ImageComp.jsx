import React, { useContext } from "react";
import { Col, Image } from "react-bootstrap";
import addImg from "../../../assets/img/cv-images/addimg.png";
import { DataContext } from "../../../context/CvContext";
import "./assets/css/Image.css";

const ImageComp = () => {
  const { data, handleTips, fileUploadInputChange, route } = useContext(
    DataContext
  );

  return (
    <Col
      md={
        route === "data-science" || route === "digital-marketing" ? "12" : "2"
      }
      className="Image mt-3 px-0 mt-md-0 d-flex justify-content-center my-auto"
    >
      <label htmlFor="attach-image">
        <Image
          src={data.image ? data.image : addImg}
          className={`rounded-circle image-cover ${
            route === "web-development" ? "web-dev-image" : ""
          }`}
          width="100px"
          height="100px"
          alt={data.image ? "Your photo" : "Click to add photo..."}
          onMouseEnter={(e) => handleTips("img image")}
        />
      </label>
      <input
        className=""
        type="file"
        id="attach-image"
        hidden
        ref={React.createRef()}
        onChange={fileUploadInputChange}
      />
    </Col>
  );
};

export default ImageComp;
