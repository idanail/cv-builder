import React, { Component } from "react";
import bill1 from "./img/LinkedIn screenshots/bill1.png";

class LinkedIn extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="LinkedIn">
        <img src={bill1} alt="LinkedIn" className="w-100 d-block" />
      </div>
    );
  }
}

export default LinkedIn;
