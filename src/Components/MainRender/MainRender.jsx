import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import WebDevelopment from "../WebDevelopment/WebDevelopment";
import CV from "./CV";
import LinkedIn from "./LinkedIn";
import "./MainRender.css";
import WeAreLaika from "./WeAreLaika";

class MainRender extends Component {
  constructor() {
    super();
    this.state = {
      isInEditMode: false,
    };
  }

  handleEditMode = () => {
    this.setState({
      isInEditMode: !this.state.isInEditMode,
    });
  };

  render() {
    const currentCategory = this.props.match.params.url;
    const { pathname } = this.props.location;
    let currentComponent;

    switch (pathname) {
      case `/categories/${currentCategory}/cv`:
        switch (currentCategory) {
          case "web-development":
            currentComponent = (
              <WebDevelopment editMode={this.state.isInEditMode} />
            );
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
        <div className="row position-relative">
          <div className="col-md-8">
            <div
              className={
                pathname === `/categories/${currentCategory}/cv`
                  ? "row m-5 pt-4 box-shadow"
                  : "row m-5 pt-4"
              }
            >
              <div className="col-md-10">
                <ul className="main-ul">
                  <li>
                    <NavLink
                      activeClassName="active"
                      className="btn btn-violet text-uppercase"
                      to={`/categories/${currentCategory}/cv`}
                    >
                      CV
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      activeClassName="active"
                      className="btn btn-violet text-uppercase"
                      to={`/categories/${currentCategory}/linkedin`}
                    >
                      LinkedIn
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      activeClassName="active"
                      className="btn btn-violet text-uppercase"
                      to={`/categories/${currentCategory}/wearelaika`}
                    >
                      Wearelaika.com
                    </NavLink>
                  </li>
                </ul>
              </div>
              <div className="col-md-2 text-right">
                {pathname === `/categories/${currentCategory}/cv` && (
                  <Link
                    to="#"
                    onClick={this.handleEditMode}
                    className="btn btn-edit text-uppercase"
                  >
                    Edit
                  </Link>
                )}
              </div>
              <div className="col-md-12">{currentComponent}</div>
              <div className="col-md-12">
                <div className="row">
                  <div className="col-md-3 offset-md-9 pb-4 text-right">
                    <Link
                      to="#"
                      className="btn btn-edit btn-download text-uppercase"
                    >
                      Download
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div
              className={
                pathname === `/categories/${currentCategory}/cv`
                  ? "row mr-5 box-shadow tips-page-cv"
                  : "row mr-5 box-shadow tips-page-rest"
              }
            >
              <div className="col">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi
                quos quis unde nam, expedita et id quia quas laborum ut,
                voluptatibus laboriosam similique! Culpa reprehenderit facere
                alias similique hic modi, libero totam impedit sit debitis
                excepturi ullam necessitatibus amet aliquid non sunt dolorum!
                Esse libero quae expedita dolore deleniti aliquid?
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MainRender;
