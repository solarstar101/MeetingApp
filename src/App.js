import React, { Component } from "react";

import Home from "./Components/Home";
import Welcome from "./Components/Welcome";
import Navigation from "./Components/Navigation";
import Login from "./Components/Login";
import Meetings from "./Components/Meetings";
import Register from "./Components/Register";

import { Router } from "@reach/router";
export default class App extends Component {
  constructor() {
    super();

    this.state = {
      user: "Mario"
    };
  }

  render() {
    return (
      <>
        <Navigation user={this.state.user} />
        {this.state.user && <Welcome user={this.state.user} />}

        <Router>
          <Home path="/" user={this.state.user} />
          <Login path="/login" />
          <Meetings path="/meetings" />
          <Register path="/register" />
        </Router>
      </>
    );
  }
}
