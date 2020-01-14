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
    navigate("/login");
  };

  addMeeting = meetingName => {
    const ref = firebase.database().ref(`meetings/${this.state.user.uid}`);
    ref.push({ meetingName: meetingName });
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
          <Meetings addMeeting={this.addMeeting} path="/meetings" />
          <Register registerUser={this.updateLogin} path="/register" />
        </Router>
      </>
    );
  }
}
