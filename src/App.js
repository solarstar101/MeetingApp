import React, { Component } from "react";
import { Router } from "@reach/router";
import firebase from "./Database/Firebase";

import Home from "./Components/Home";
import Welcome from "./Components/Welcome";
import Navigation from "./Components/Navigation";
import Login from "./Components/Login";
import Meetings from "./Components/Meetings";
import Register from "./Components/Register";

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      user: null
    };
  }

  componentDidMount() {
    const ref = firebase.database().ref("user");

    ref.on("value", snapshot => {
      let FBUser = snapshot.val();
      this.setState({ user: FBUser });
      console.log(FBUser);
    });
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
