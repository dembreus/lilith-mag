import React from "react";
import { Link } from "react-router-dom";

const navBar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-light bg-white absolute-top">
      <div className="container">
        <Link className="navbar-brand mx-auto order-1 order-md-3" to="/">
          Lilith Mag
        </Link>
        <button
          className="navbar-toggler order-2 order-md-1"
          type="button"
          data-toggle="collapse"
          data-target="#navbar"
          aria-controls="navbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div
          className="collapse navbar-collapse order-3 order-md-2"
          id="navbar"
        >
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link " to="/profile" id="home">
                Profile
              </Link>
            </li>
            <li className="nav-item ">
              <Link className="nav-link" to="/posts" id="posts">
                Posts
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link " to="/works-cited" id="works-cited">
                Works Cited
              </Link>
            </li>
          </ul>
        </div>

        {/* <div
          className="collapse navbar-collapse order-4 order-md-4"
          id="navbar"
        >
          <form className="form-inline" role="search">
            <input
              className="search js-search form-control form-control-rounded mr-sm-2"
              type="text"
              title="Enter search query here.."
              placeholder="Search.."
              aria-label="Search"
            />
          </form> 
        </div> */}
      </div>
    </nav>
  );
};

export default navBar;
