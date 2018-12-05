import React from "react";
import { Link } from "react-router-dom";
import articles from "../../data/articles";

const post = ({ title, body }) => {
  return (
    <div class="container">
      <div class="row">
        <div class="col-md-9">
          <article class="card mb-4">
            <header class="card-header text-center">
              <div class="card-meta">
                <Link to="/">
                  <time class="timeago" datetime="2017-10-26 20:00">
                    4 December 2018
                  </time>
                </Link>{" "}
                in <Link to="page-category.html">Journey</Link>
              </div>
              <Link to="post-image.html">
                <h1 class="card-title">{articles[0].title}</h1>
              </Link>
            </header>
            <Link to="post-image.html">
              <img class="card-img" src="img/1.jpg" alt="" />
            </Link>
            <div class="card-body">
              <p>{articles[0].body}</p>

              <hr />
            </div>
          </article>
          {/* <!-- /.card --> */}
        </div>
        <div class="col-md-3 ml-auto">
          <aside class="sidebar">
            <div class="card mb-4">
              <div class="card-body">
                <h4 class="card-title">About</h4>
                <p class="card-text">
                  Etiam rhoncus. Maecenas tempus, tellus eget condimentum
                  rhoncus, sem quam <a href="#">semper libero</a>, sit amet
                  adipiscing sem neque sed ipsum.{" "}
                </p>
              </div>
            </div>
            {/* <!-- /.card --> */}
          </aside>

          <aside class="sidebar sidebar-sticky">
            <div class="card mb-4">
              <div class="card-body">
                <h4 class="card-title">Tags</h4>
                <a class="btn btn-light btn-sm mb-1" href="page-category.html">
                  Journey
                </a>
                <a class="btn btn-light btn-sm mb-1" href="page-category.html">
                  Work
                </a>
                <a class="btn btn-light btn-sm mb-1" href="page-category.html">
                  Lifestype
                </a>
                <a class="btn btn-light btn-sm mb-1" href="page-category.html">
                  Photography
                </a>
                <a class="btn btn-light btn-sm mb-1" href="page-category.html">
                  Food & Drinks
                </a>
              </div>
            </div>
            {/* <!-- /.card --> */}
            <div class="card mb-4">
              <div class="card-body">
                <h4 class="card-title">Popular stories</h4>
                <a href="post-image.html" class="d-inline-block">
                  <h4 class="h6">The blind man</h4>
                  <img class="card-img" src="img/2.jpg" alt="" />
                </a>
                <time class="timeago" datetime="2017-10-03 20:00">
                  3 october 2017
                </time>{" "}
                in Lifestyle
                <a href="post-image.html" class="d-inline-block mt-3">
                  <h4 class="h6">Crying on the news</h4>
                  <img class="card-img" src="img/3.jpg" alt="" />
                </a>
                <time class="timeago" datetime="2017-07-16 20:00">
                  16 july 2017
                </time>{" "}
                in Work
              </div>
            </div>
            {/* <!-- /.card --> */}
          </aside>
        </div>
      </div>
    </div>
  );
};

export default post;
