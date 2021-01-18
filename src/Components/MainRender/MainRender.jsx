import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import CV from "./CV";
import LinkedIn from "./LinkedIn";
import "./MainRender.css";
import WeAreLaika from "./WeAreLaika";

class MainRender extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const currentCategory = this.props.match.params.url;
    let currentComponent;

    switch (this.props.location.pathname) {
      case `/categories/${currentCategory}/cv`:
        switch (currentCategory) {
          case "web-development":
            currentComponent = <p>CV - Web development</p>;
            break;

          case "data-science":
            currentComponent = <p>CV - Data Science</p>;
            break;

          case "digital-marketing":
            currentComponent = <p>CV - Digital Marketing</p>;
            break;

          case "design":
            currentComponent = <p>CV - Design</p>;
            break;

          default:
            break;
        }

        break;

      case `/categories/${currentCategory}/linkedin`:
        currentComponent = <LinkedIn />;
        break;

      case `/categories/${currentCategory}/wearelaika`:
        currentComponent = <WeAreLaika />;
        break;

      default:
        currentComponent = <CV />;
        break;
    }

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
                    <NavLink
                      activeClassName="active"
                      to={`/categories/${currentCategory}/linkedin`}
                    >
                      LinkedIn
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      activeClassName="active"
                      to={`/categories/${currentCategory}/wearelaika`}
                    >
                      Wearelaika.com
                    </NavLink>
                  </li>
                </ul>
              </div>
              <div className="col-md-2">
                {/* {editButton} */}
                {this.props.location.pathname ===
                  `/categories/${currentCategory}/cv` && (
                  <NavLink to="">Edit</NavLink>
                )}
              </div>
              <div className="col-md-12">
                {currentComponent}
                {/* Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla,
                perferendis! */}
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="row mt-5 mr-5 mb-5 border">
              <div className="col">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
                repellendus eum officiis, fugit molestiae, optio aspernatur
                alias assumenda nisi ipsum porro neque. Fugit dolorum voluptatem
                odit, labore sit maiores dolore a aut iste ipsum.
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MainRender;
