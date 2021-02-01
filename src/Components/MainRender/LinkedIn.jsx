import { Carousel } from "react-bootstrap";
import React, { Component } from "react";
import linkedInImages from "../../assets/js/linkedin.js";
import "./LinkedIn.css";

class LinkedIn extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="LinkedIn">
        <Carousel>
          {linkedInImages.map((el, index) => (
            <Carousel.Item key={index}>
              <img
                className="d-block w-100"
                src={el.image.default}
                alt="LinkedIn"
              />
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    );
  }
}

export default LinkedIn;
