import React, { useContext, useEffect } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../../App.css";
import categories from "../../assets/js/database.js";
import { DataContext } from "../../context/CvContext.jsx";
import Banner from "../Banner/Banner.jsx";
import "./Categories.css";

const Categories = () => {
  const { setEditModeFalse } = useContext(DataContext);

  useEffect(() => {
    setEditModeFalse();
  }, [setEditModeFalse]);

  return (
    <Row className="Categories d-flex align-items-center">
      <Col>
        <Row>
          <Col md={{ span: 8, offset: 2 }}>
            <Row>
              <Col>
                <h1 className="text-center text-md-left">
                  Choose your category
                </h1>
              </Col>
            </Row>
            <Row className="categories-wrapper">
              {categories.map((el, i) => (
                <Col key={i} sm="6" md="3">
                  <Card key={el.id} className="category-card px-0 zoom">
                    <Card.Body className="d-flex flex-column justify-content-end">
                      <Card.Title className="my-5 text-center">
                        {el.title}
                      </Card.Title>
                      <div className="text-right">
                        <Link
                          to={`/categories/${el.url}/cv`}
                          className="btn btn-violet px-3 py-2 text-uppercase font-weight-bold"
                        >
                          Choose
                        </Link>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
        <Banner />
      </Col>
    </Row>
  );
};

export default Categories;
