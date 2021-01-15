import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import categories from "./config";

const Categories = () => {
  return (
    <div className="Categories d-flex">
      {categories.map((el) => (
        <Card key={el.id} style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title>{el.title}</Card.Title>
            <Link to={el.url}>Choose</Link>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default Categories;
