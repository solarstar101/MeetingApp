import React, { Component } from "react";
import {
  FaUsers,
  FaSignInAlt,
  FaSignOutAlt,
  FaRegPlusSquare
} from "react-icons/fa";

export default class Navigation extends Component {
  render() {
    const { user } = this.props;

    return (
      <nav className="site-nav family-sans navbar navbar-expand bg-primary navbar-dark higher">
        <div className="container-fluid">
          <a href="/" className="navbar-brand">
            <FaUsers className="mr-1" /> Meeting Log
          </a>
          <div className="navbar-nav ml-auto">
            {user ? (
              <>
                <a className="nav-item nav-link" href="/meetings">
                  Meetings
                </a>
                <a className="nav-item nav-link" href="/login">
                  <FaSignOutAlt /> Log out
                </a>
              </>
            ) : (
              <>
                <a className="nav-item nav-link" href="/register">
                  <FaRegPlusSquare /> Register
                </a>
                <a className="nav-item nav-link" href="/login">
                  <FaSignInAlt /> Log In
                </a>
              </>
            )}
          </div>
        </div>
      </nav>
    );
  }
}
