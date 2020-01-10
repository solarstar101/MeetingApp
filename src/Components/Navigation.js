import React, { Component } from "react";
import {
  FaUsers,
  FaSignInAlt,
  FaSignOutAlt,
  FaRegPlusSquare
} from "react-icons/fa";
import { Link } from "@reach/router";

export default class Navigation extends Component {
  render() {
    const { user } = this.props;

    return (
      <nav className="site-nav family-sans navbar navbar-expand bg-primary navbar-dark higher">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            <FaUsers className="mr-1" /> Meeting Log
          </Link>
          <div className="navbar-nav ml-auto">
            {user ? (
              <>
                <Link className="nav-item nav-link" to="/meetings">
                  Meetings
                </Link>
                <Link className="nav-item nav-link" to="/login">
                  <FaSignOutAlt /> Log out
                </Link>
              </>
            ) : (
              <>
                <Link className="nav-item nav-link" to="/register">
                  <FaRegPlusSquare /> Register
                </Link>
                <Link className="nav-item nav-link" to="/login">
                  <FaSignInAlt /> Log In
                </Link>
              </>
            )}
          </div>
        </div>
      </nav>
    );
  }
}
