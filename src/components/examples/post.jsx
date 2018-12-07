import React from "react";
import { Link } from "react-router-dom";
import articles from "../../data/articles";
import nancy from "../../images/nancy-glazier.png";

const post = ({ match }) => {
  const id = match.params.id;
  const article = articles.filter(a => a.id === id);
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-9">
          <article className="card mb-4">
            <header className="card-header text-center">
              <h1 className="card-title">{articles[0].title}</h1>
            </header>
            <Link to="post-image.html">
              <img className="card-img" src="nancy" alt="" />
            </Link>
            <div className="card-body">
              <p>{articles[0].body}</p>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
};

export default post;
