import React, { Component } from "react";

export default class Welcome extends Component {
  render() {
    const { user } = this.props;

    return (
      <div className="text-center mt-4">
        <span className={`text-secondary font-weight-bold pl-1`}>
          Welcome {user},
          <a href="/" className={`font-weight-bold text-primary pl-1`}>
            Log Out
          </a>
        </span>
      </div>
    );
  }
}
