import React, { Component } from "react";

class Step2 extends Component {
  render() {
    if (this.props.currentStep !== 2) {
      return null;
    }
    return (
      <div>
        <h2>Contact</h2>
        <label htmlFor="nicBform">Nic/B-form Number</label>
        <input
          name="nicBform"
          onChange={this.props.handleChange}
          type="number"
          placeholder={"Enter Nic/B-form Number"}
          id="nicBform"
          value={this.props.values.nicBform}
        />
        <label htmlFor="phoneNumber">Phone Number</label>
        <input
          name="phoneNumber"
          onChange={this.props.handleChange}
          type="number"
          placeholder={"Enter Phone Number"}
          id="nicBform"
          value={this.props.values.phoneNumber}
        />

        <label htmlFor="address">Address</label>
        <input
          name="address"
          onChange={this.props.handleChange}
          type="text"
          placeholder={"Enter complete Address"}
          id="address"
          value={this.props.values.address}
        />
      </div>
    );
  }
}

export default Step2;
