import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="Footer row">
      <div className="col text-center text-secondary">
        <span>
          Created with {"<"}3 by the{" "}
          <a href="https://codepreneurs.brainster.co/" target="_blank">
            Brainster Coding Academy
          </a>{" "}
          students and{" "}
          <a href="https://www.wearelaika.com/" target="_blank">
            {" "}
            wearelaika.com
          </a>
        </span>
      </div>
    </div>
  );
};

export default Footer;
