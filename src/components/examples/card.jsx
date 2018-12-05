import React from "react";
import { Link } from "react-router-dom";

const card = ({ header, title, text, post }) => {
  return (
    <div className="card">
      <h5 className="card-header">{header}</h5>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{text}</p>
        <Link to={post} className="btn btn-primary">
          Read more...
        </Link>
      </div>
    </div>
  );
};

export default card;
