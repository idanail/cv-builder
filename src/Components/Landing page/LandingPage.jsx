import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="LandingPage">
      <h1>The Ultimate CV & Portfolio Check-List</h1>
      <button>
        <Link to="/categories">Step inside</Link>
      </button>
    </div>
  );
};

export default LandingPage;
