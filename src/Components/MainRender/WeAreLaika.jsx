import React from "react";
import weAreLaikaImages from "../../assets/js/wearelaika.js";
import { Carousel } from "react-bootstrap";

const WeAreLaika = () => {
  return (
    <div className="WeAreLaika">
      <Carousel>
        {weAreLaikaImages.map((el, index) => (
          <Carousel.Item key={index}>
            <img
              className="d-block w-100"
              src={el.image.default}
              alt="WeAreLaika screenshot"
            />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default WeAreLaika;
