import React, { Component } from "react";
import { Link } from "@reach/router";

export default class Welcome extends Component {
  render() {
    const { userName, logOutUser } = this.props;

    return (
      <div className="text-center mt-4">
        <span className={`text-secondary font-weight-bold pl-1`}>
          Welcome {userName},
          <Link
            to="/login"
            className={`font-weight-bold text-primary pl-1`}
            onClick={e => logOutUser(e)}
          >
            Log Out
          </Link>
        </span>
      </div>
    );
  }
}
