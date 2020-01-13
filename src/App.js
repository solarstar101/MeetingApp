import React, { Component } from "react";
import { Router, navigate } from "@reach/router";
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
      user: null,
      displayName: null,
      userID: null
    };

    this.updateLogin = this.updateLogin.bind(this);
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged(FBUser => {
      FBUser &&
        this.setState({
          user: FBUser,
          displayName: FBUser.displayName,
          userID: FBUser.uid
        });
    });
  }

  registerUser = userName => {
    firebase.auth().updateLogin(userName);
  };

  updateLogin = userName => {
    firebase.auth().onAuthStateChanged(FBUser => {
      FBUser.updateProfile({
        displayName: userName
      }).then(() => {
        this.setState({
          user: FBUser,
          displayName: FBUser.displayName,
          userID: FBUser.uid
        });
        navigate("/meetings");
      });
    });
  };

  logOutUser = e => {
    e.preventDefault();
    this.setState({
      user: null,
      displayName: null,
      userID: null
    });
  };

  render() {
    return (
      <>
        <Navigation logOutUser={this.logOutUser} loguser={this.state.user} />
        {this.state.user && (
          <Welcome
            logOutUser={this.logOutUser}
            userName={this.state.displayName}
          />
        )}

        <Router>
          <Home path="/" user={this.state.user} />
          <Login updateLogin={this.updateLogin} path="/login" />
          <Meetings path="/meetings" />
          <Register registerUser={this.registerUser} path="/register" />
        </Router>
      </>
    );
  }
}
