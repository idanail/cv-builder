import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import categories from "../../config.js";
import "../../App.css";
import "./Categories.css";

const Categories = () => {
  return (
    <div className="Categories row d-flex align-items-center">
      <div className="col-md-8 offset-md-2">
        <div className="row">
          <div className="col">
            <h1 className="text-center text-md-left">Choose your category</h1>
          </div>
        </div>
        <div className="row">
          {categories.map((el, idx) => (
            <div key={idx} className="col-12 col-sm-6 col-md-3">
              <Card key={el.id} className="category-card px-0">
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
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
