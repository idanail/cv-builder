import React, { useContext, useEffect } from "react";
import { Carousel, Image } from "react-bootstrap";
import { DataContext } from "../../context/CvContext.jsx";
import "./WeAreLaika.css";
import laika1 from "./img/Laika screenshots/laika1.png";
import laika2 from "./img/Laika screenshots/laika2.png";
import laika3 from "./img/Laika screenshots/laika3.png";
import laika4 from "./img/Laika screenshots/laika4.png";
import laika5 from "./img/Laika screenshots/laika5.png";

const WeAreLaika = () => {
  const { handleWeAreLaika, handleTips } = useContext(DataContext);

  useEffect(() => {
    handleWeAreLaika(true);
  });

  return (
    <div className="WeAreLaika">
      <Carousel>
        <Carousel.Item>
          <Image
            className="d-block w-75 mx-auto"
            src={laika1}
            alt="WeAreLaika screenshot"
            onMouseEnter={() => handleTips("wearelaika email")}
          />
        </Carousel.Item>
        <Carousel.Item>
          <div
            className="wearelaika-links d-block w-75 mx-auto position-absolute"
            onMouseEnter={() => handleTips("wearelaika links")}
          ></div>
          <div
            className="wearelaika-what-for d-block w-75 mx-auto position-absolute"
            onMouseEnter={() => handleTips("wearelaika whatFor")}
          ></div>
          <Image
            className="d-block w-75 mx-auto"
            src={laika2}
            alt="WeAreLaika screenshot"
          />
        </Carousel.Item>
        <Carousel.Item>
          <div
            className="wearelaika-industry d-block w-75 mx-auto position-absolute"
            onMouseEnter={() => handleTips("wearelaika industry")}
          ></div>
          <div
            className="wearelaika-experience d-block w-75 mx-auto position-absolute"
            onMouseEnter={() => handleTips("wearelaika experience")}
          ></div>
          <Image
            className="d-block w-75 mx-auto"
            src={laika3}
            alt="WeAreLaika screenshot"
          />
        </Carousel.Item>
        <Carousel.Item>
          <Image
            className="d-block w-75 mx-auto"
            src={laika4}
            alt="WeAreLaika screenshot"
            onMouseEnter={() => handleTips("wearelaika education")}
          />
        </Carousel.Item>
        <Carousel.Item>
          <div
            className="wearelaika-experience-2 d-block w-75 mx-auto position-absolute"
            onMouseEnter={() => handleTips("wearelaika experience")}
          ></div>
          <div
            className="wearelaika-salary d-block w-75 mx-auto position-absolute"
            onMouseEnter={() => handleTips("wearelaika salary")}
          ></div>
          <div
            className="wearelaika-job-type d-block w-75 mx-auto position-absolute"
            onMouseEnter={() => handleTips("wearelaika jobType")}
          ></div>
          <Image
            className="d-block w-75 mx-auto"
            src={laika5}
            alt="WeAreLaika screenshot"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default WeAreLaika;
