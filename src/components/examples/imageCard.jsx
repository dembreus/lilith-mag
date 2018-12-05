import React from "react";
import { Link } from "react-router-dom";

const imageCard = ({ img, title, body, id }) => {
  return (
    <Link to={`/posts/${id}`}>
      {" "}
      <div className="card bg-dark text-white">
        <img src={img} alt="image" className="card-img" />
        <div className="card-img-overlay">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{body}</p>
        </div>
      </div>{" "}
    </Link>
  );
};

export default imageCard;
