import React, { Component } from "react";
import FormError from "./FormError";
import firebase from "firebase/app";

export default class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      displayName: "",
      email: "",
      passOne: "",
      passTwo: "",
      errorMessage: null
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const itemName = e.target.name;
    const itemValue = e.target.value;

    this.setState({ [itemName]: itemValue }, () => {
      this.state.passOne === this.state.passTwo
        ? this.setState({ errorMessage: null })
        : this.setState({ errorMessage: "Password does not match" });
    });
  }

  handleSubmit(e) {
    let registrationInfo = {
      displayName: this.state.displayName,
      email: this.state.email,
      passOne: this.state.passOne
    };

    e.preventDefault();

    firebase
      .auth()
      .createUserWithEmailAndPassword(
        registrationInfo.email,
        registrationInfo.passOne
      )
      .then(() => {
        this.props.registerUser(registrationInfo.displayName);
      })
      .catch(error => {
        error.message !== null
          ? this.setState({ errorMessage: error.message })
          : this.setState({ errorMessage: null });
      });
  }

  render() {
    return (
      <div>
        <form className="mt-3" onSubmit={this.handleSubmit}>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="card bg-light">
                  <div className="card-body">
                    <h3 className="font-weight-light mb-3">Register</h3>
                    <div className="form-row">
                      {this.state.errorMessage !== null ? (
                        <FormError theMessage={this.state.errorMessage} />
                      ) : null}

                      <section className="col-sm-12 form-group">
                        <label
                          className="form-control-label sr-only"
                          htmlFor="displayName"
                        >
                          Display Name
                        </label>
                        <input
                          className="form-control"
                          type="text"
                          id="displayName"
                          placeholder="Display Name"
                          name="displayName"
                          value={this.state.displayName}
                          onChange={this.handleChange}
                          required
                        />
                      </section>
                    </div>
                    <section className="form-group">
                      <label
                        className="form-control-label sr-only"
                        htmlFor="email"
                      >
                        Email
                      </label>
                      <input
                        className="form-control"
                        type="email"
                        id="email"
                        placeholder="Email Address"
                        name="email"
                        value={this.state.email}
                        onChange={this.handleChange}
                        required
                      />
                    </section>
                    <div className="form-row">
                      <section className="col-sm-6 form-group">
                        <input
                          className="form-control"
                          type="password"
                          name="passOne"
                          placeholder="Password"
                          value={this.state.passOne}
                          onChange={this.handleChange}
                          required
                        />
                      </section>
                      <section className="col-sm-6 form-group">
                        <input
                          className="form-control"
                          type="password"
                          name="passTwo"
                          placeholder="Repeat Password"
                          value={this.state.passTwo}
                          onChange={this.handleChange}
                          required
                        />
                      </section>
                    </div>
                    <div className="form-group text-right mb-0">
                      <button className="btn btn-primary" type="submit">
                        Register
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
