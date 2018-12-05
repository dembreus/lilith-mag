import React, { Component } from "react";
import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import Header from "./components/header";
import Posts from "./components/pages/posts";
import Post from "./components/examples/post";
import Profile from "./components/pages/profile";
import WorksCited from "./components/pages/worksCited";
import NotFound from "./components/pages/notFound";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route path="/works-cited" component={WorksCited} />
          <Route exact path="/posts/:id" component={Post} />
          <Route path="/posts" component={Posts} />
          <Route exact path="/profile" component={Profile} />
          <Route path="/not-found" component={NotFound} />
          <Redirect from="/" exact to="/posts" />
          <Redirect to="/not-found" />
        </Switch>
      </div>
    );
  }
}

export default App;
