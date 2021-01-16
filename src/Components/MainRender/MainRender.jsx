import React, { Component } from "react";
import "./MainRender.css";
import { NavLink } from "react-router-dom";
import categories from "../../config";

class MainRender extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const currentCategory = this.props.match.params.url;

    return (
      <div className="MainRender container-fluid">
        <div className="row">
          <div className="col-md-8">
            <div className="row m-5 border">
              <div className="col-md-10">
                <ul>
                  <li>
                    <NavLink
                      activeClassName="active"
                      to={`/categories/${currentCategory}/cv`}
                    >
                      CV
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to={`/categories/${currentCategory}/linkedin`}>
                      LinkedIn
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to={`/categories/${currentCategory}/wearelaika`}>
                      Wearelaika.com
                    </NavLink>
                  </li>
                </ul>
              </div>
              <div className="col-md-2">
                <NavLink to="">Edit</NavLink>
              </div>
            </div>
          </div>
          <div className="col-md-4"></div>
        </div>
      </div>
    );
  }
}

export default MainRender;
