import React, { useContext, useEffect } from "react";
import { Button, Col, Modal, Row } from "react-bootstrap";
import { Link, NavLink, Redirect } from "react-router-dom";
import { DataContext } from "../../context/CvContext";
import Banner from "../Banner/Banner";
import DataScience from "../DataScience/DataScience";
import Design from "../Design/Design";
import DigitalMarketing from "../DigitalMarketing/DigitalMarketing";
import WebDevelopment from "../WebDevelopment/WebDevelopment";
import LinkedIn from "./LinkedIn";
import "./MainRender.css";
import WeAreLaika from "./WeAreLaika";

const MainRender = (props) => {
  const {
    editMode,
    handleEditMode,
    getRoute,
    displayTips,
    isLinkedInChecked,
    isWeAreLaikaChecked,
    isWorkEntered,
    isEducationEntered,
    isAchievementEntered,
    isLanguageEntered,
    handleDownload,
    modal,
    handleClose,
  } = useContext(DataContext);

  const currentCategory = props.match.params.url;
  const { pathname } = props.location;
  const ref = React.createRef();

  let currentComponent;

  useEffect(() => getRoute(currentCategory), [currentCategory]);

  let element = document.getElementById("current-component");

  switch (pathname) {
    case `/categories/${currentCategory}/cv`:
      switch (currentCategory) {
        case "web-development":
          currentComponent = <WebDevelopment />;
          break;

        case "data-science":
          currentComponent = <DataScience />;
          break;

        case "digital-marketing":
          currentComponent = <DigitalMarketing />;
          break;

        case "design":
          currentComponent = <Design />;
          break;

        default:
          currentComponent = <Redirect to="/notfound" />;
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
      currentComponent = <Redirect to="/notfound" />;
      break;
  }

  return (
    <Row className="MainRender" ref={ref}>
      <Col className="mb-5">
        <Row className="position-relative">
          <Col md="8">
            <Row
              className={
                pathname === `/categories/${currentCategory}/cv`
                  ? "m-md-5 pt-4 box-shadow bg-white"
                  : "m-md-5 pt-4"
              }
            >
              <Col md="10">
                <ul className="main-ul text-center text-md-left">
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
              </Col>
              <Col
                md="2"
                className="d-none d-md-block text-center text-md-right"
              >
                {pathname === `/categories/${currentCategory}/cv` && (
                  <Link
                    to="#"
                    onClick={handleEditMode}
                    className="btn btn-edit text-uppercase"
                  >
                    Edit
                  </Link>
                )}
              </Col>
              <Col md="12" id="current-component">
                {currentComponent}
              </Col>
              {pathname === `/categories/${currentCategory}/cv` && (
                <Col className={`pt-4 pb-5 pb-md-0 ${!editMode && "mb-4"}`}>
                  <Row>
                    <Col
                      xs={editMode ? "4" : "12"}
                      className="d-flex d-md-none justify-content-center align-items-center"
                    >
                      {pathname === `/categories/${currentCategory}/cv` && (
                        <Link
                          to="#"
                          onClick={() => {
                            window.scrollTo(0, 0);
                            handleEditMode();
                          }}
                          className="btn btn-edit text-uppercase"
                        >
                          Edit
                        </Link>
                      )}
                    </Col>
                    {editMode && (
                      <Col
                        xs="7"
                        md={{ span: 3, offset: 9 }}
                        className="pb-3 d-flex justify-content-center align-items-center"
                      >
                        <Link
                          to={
                            isLinkedInChecked &&
                            isWeAreLaikaChecked &&
                            isWorkEntered &&
                            isEducationEntered &&
                            isAchievementEntered &&
                            isLanguageEntered
                              ? "/popup"
                              : "#"
                          }
                          onClick={() => handleDownload(element)}
                          className="btn btn-edit btn-download text-uppercase mt-3"
                          data-toggle="modal"
                          data-target="#downloadModal"
                        >
                          Download
                        </Link>
                      </Col>
                    )}
                  </Row>
                </Col>
              )}
            </Row>
          </Col>
          <Col md="4">
            <Row
              className={
                pathname === `/categories/${currentCategory}/cv`
                  ? "mr-5 box-shadow tips-page-cv"
                  : "mr-5 box-shadow tips-page-rest"
              }
            >
              <Col className="tips-font p-5 bg-white">
                {displayTips
                  ? displayTips
                  : "Here's where you get comments on each section of the CV, e.g. you click on the photo and it gives you tips on how it should look like."}
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col>
            <Modal show={modal} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Before downloading the CV:</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <ul>
                  {!isLinkedInChecked || !isWeAreLaikaChecked ? (
                    <li>
                      {!isLinkedInChecked && !isWeAreLaikaChecked
                        ? "Please check the LinkedIn and WeAreLaika sections."
                        : !isLinkedInChecked
                        ? "Please check the LinkedIn section."
                        : !isWeAreLaikaChecked
                        ? "Please check the WeAreLaika section."
                        : ""}
                    </li>
                  ) : (
                    ""
                  )}
                  {!isWorkEntered ||
                  !isEducationEntered ||
                  !isAchievementEntered ||
                  !isLanguageEntered ? (
                    <li>
                      {!isWorkEntered &&
                      !isEducationEntered &&
                      !isAchievementEntered &&
                      !isLanguageEntered
                        ? "Please enter at least one work experience, one education, one achievement and one language."
                        : !isWorkEntered &&
                          !isEducationEntered &&
                          !isAchievementEntered
                        ? "Please enter at least one work experience, one education and one achievement."
                        : !isWorkEntered &&
                          !isEducationEntered &&
                          !isLanguageEntered
                        ? "Please enter at least one work experience, one education and one language."
                        : !isEducationEntered &&
                          !isAchievementEntered &&
                          !isLanguageEntered
                        ? "Please enter at least one education, one achievement and one language."
                        : !isWorkEntered && !isEducationEntered
                        ? "Please enter at least one work experience and one education."
                        : !isWorkEntered && !isAchievementEntered
                        ? "Please enter at least one work experience and one achievement."
                        : !isWorkEntered && !isLanguageEntered
                        ? "Please enter at least one work experience and one language."
                        : !isEducationEntered && !isAchievementEntered
                        ? "Please enter at least one education and one achievement"
                        : !isEducationEntered && !isLanguageEntered
                        ? "Please enter at least one education and one language"
                        : !isAchievementEntered && !isLanguageEntered
                        ? "Please enter at least one achievement and one language"
                        : !isWorkEntered
                        ? "Please enter at least one work experience."
                        : !isEducationEntered
                        ? "Please enter at least one education."
                        : !isAchievementEntered
                        ? "Please enter at least one achievement."
                        : !isLanguageEntered
                        ? "Please enter at least one language."
                        : ""}
                    </li>
                  ) : (
                    ""
                  )}
                </ul>
              </Modal.Body>
              <Modal.Footer>
                <Button className="btn text-uppercase" onClick={handleClose}>
                  Close
                </Button>
              </Modal.Footer>
            </Modal>
          </Col>
        </Row>
        <Banner />
      </Col>
    </Row>
  );
};

export default MainRender;
