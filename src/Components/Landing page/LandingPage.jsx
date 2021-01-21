import React from "react";
import { Button } from "react-bootstrap";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "./LandingPage.css";
import backgroundImage from "../../assets/img/backgrounds/BackgroundFirstPage.png";

const LandingPage = () => {
  return (
    <div className="LandingPage row d-flex align-items-center">
      <div className="col-8 offset-2">
        <div className="row">
          <div className="col-6 d-flex flex-column justify-content-center">
            <h1 className="text-left mb-4">
              The Ultimate
              <br />
              CV & Portfolio Check-List
            </h1>
            <p className="text-secondary mb-4">
              Are you a Web Developer, Data Scientist, Digital Marketer or a
              Designer? Have your CV and portfolio in check and create a 5-star
              representation of your skills with this guide.
            </p>
            <div>
              <Link
                className="btn btn-violet px-5 py-3 text-uppercase font-weight-bold"
                to="/categories"
              >
                Step inside
              </Link>
            </div>
          </div>
          <div className="col-6">
            <img className="d-block w-100" src={backgroundImage} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
