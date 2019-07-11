import React, { Component } from "react";
import { isEmail, empty } from "../validationFunctions";
class ForgetPassword extends Component {
  constructor() {
    super();
    this.state = {
      email: ""
    };
    this.onChange= this.onChange.bind(this)
    this.onSubmit= this.onSubmit.bind(this)
  }
  onChange(event) {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  }
  onSubmit(event) {
    event.preventDefault();
    const { email } = this.state;
    if (empty(email)) {
      console.log("email required");
    } else if (!isEmail(email)) {
      console.log("invalid email formet");
    } else {
      alert("email has been sended");
    }
  }
  render() {
    const { email } = this.state;
    return (
      <div>
        <form>
          <label>Email</label>
          <input
            onChange={this.onChange}
            type="email"
            name="email"
            value={email}
          />
          <button onClick={this.onSubmit}>Recover</button>
        </form>
      </div>
    );
  }
}

export default ForgetPassword;
