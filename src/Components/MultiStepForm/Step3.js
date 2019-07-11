import React, { Component } from "react";
export default class Step3 extends Component {
  render() {
    if (this.props.currentStep !== 3) {
      return null;
    }
    return (
      <div>
        <h2>About You</h2>
        <label htmlFor="age">Age</label>
        <input
          name="age"
          onChange={this.props.handleChange}
          type="number"
          placeholder={"Enter Your Age"}
          id="age"
          value={this.props.values.age}
        />
      </div>
    );
  }
}
