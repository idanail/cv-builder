import { Carousel, Image } from "react-bootstrap";
import React, { useContext, useEffect } from "react";
import "./LinkedIn.css";
import { DataContext } from "../../context/CvContext.jsx";
import bill1 from "../../assets/img/linkedin_screenshots/bill1.png";
import bill2 from "../../assets/img/linkedin_screenshots/bill2.png";
import bill3 from "../../assets/img/linkedin_screenshots/bill3.png";
import bill4 from "../../assets/img/linkedin_screenshots/bill4.png";

const LinkedIn = () => {
  const { handleLinkedIn, handleTips } = useContext(DataContext);

  useEffect(() => {
    handleLinkedIn(true);
  });

  return (
    <div className="LinkedIn">
      <Carousel interval={null}>
        <Carousel.Item>
          <Image
            className="d-block w-75 mx-auto"
            src={bill1}
            alt="Bill Gates' LinkedIn profile - About"
            onMouseEnter={(e) => handleTips("linkedin about")}
          />
        </Carousel.Item>
        <Carousel.Item>
          <Image
            className="d-block w-75 mx-auto"
            src={bill2}
            alt="Bill Gates' LinkedIn profile - Articles & activity"
            onMouseEnter={(e) => handleTips("linkedin about")}
          />
        </Carousel.Item>
        <Carousel.Item>
          <div
            className="d-block w-75 mx-auto position-absolute linkedin-experience"
            onMouseEnter={(e) => handleTips("linkedin experience")}
          ></div>
          <div
            className="d-block w-75 mx-auto position-absolute linkedin-education"
            onMouseEnter={(e) => handleTips("linkedin education")}
          ></div>
          <Image
            className="d-block w-75 mx-auto"
            src={bill3}
            alt="Bill Gates' LinkedIn profile - Experience & Education"
          />
        </Carousel.Item>
        <Carousel.Item>
          <Image
            className="d-block w-75 mx-auto"
            src={bill4}
            alt="Bill Gates' LinkedIn profile - Interests"
            onMouseEnter={(e) => handleTips("linkedin interests")}
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default LinkedIn;
