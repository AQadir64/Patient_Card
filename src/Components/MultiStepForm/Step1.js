import React, { Component } from "react";

class Step1 extends Component {
    render() {
    if (this.props.currentStep !== 1) {
      return null;
    }
    return (
      <div>
          <h2>Get started</h2>
        <label htmlFor="Full Name">Full Name</label>
        <input
          onChange={this.props.handleChange}
          type="text"
          placeholder={"Enter Full Name"}
          name="fullName"
          id="fullName"
          value={this.props.values.fullName}
        />
        <label htmlFor="email">Email</label>
        <input
          onChange={this.props.handleChange}
          type="email"
          placeholder={"Enter email"}
          name="email"
          id="email"
          value={this.props.values.email}
        />
        <label htmlFor="password">Password</label>
        <input
          onChange={this.props.handleChange}
          type="password"
          placeholder={"Enter Password"}
          name="password"
          id="password"
          value={this.props.values.password}
        />
        <label htmlFor="Confirm Password">Confirm Password</label>
        <input
          onChange={this.props.handleChange}
          type="password"
          placeholder={"Confirm Password"}
          name="confirmPassword"
          id="confirmPassword"
          value={this.props.values.confirmPassword}
        />
      </div>
    );
  }
}

export default Step1;
