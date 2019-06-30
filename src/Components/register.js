import React, { Component } from "react";
import validator from "validator"
import { comparision,alphabets, length, empty, phone, number } from "../validationFunctions";
class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      validationMsg: "",
      values:{
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
      phoneNumber: "",
      nicBformNumber: ""
    }};

    this.onChange = this.onChange.bind(this);
    this.onClickMe = this.onClickMe.bind(this);
  }
  onClickMe(event) {
    event.preventDefault()
    const { email, password,fullName,confirmPassword,nicBformNumber,phoneNumber,validationMsg } = this.state.values;
    const match = comparision(password,confirmPassword)
    console.log(match)
    const alpha = alphabets(fullName)
    console.log(fullName,alpha)
    const len = length(password,8)
    console.log(password,len)
    const em = empty(phoneNumber)
    console.log(phoneNumber,em)
    const ph = phone(phoneNumber)
    console.log(phoneNumber,ph)
    const num = number(nicBformNumber)
    console.log(nicBformNumber,num)
  }
  onChange(event) {
    const { value, name } = event.target;
    this.setState((prevState) =>({
      values:{
        ...prevState.values,
        [name]: value
      }
    }));
  }
  render() {
    const { email, password,fullName,confirmPassword,nicBformNumber,phoneNumber,validationMsg} = this.state;
    return (
      <div>
        <form>
          <label>Full Name</label>
          <input
            onChange={this.onChange}
            type="text"
            name="fullName"
            value={fullName}
          />
          <label>Email</label>
          <input
            type="email"
            onChange={this.onChange}
            name="email"
            value={email}
          />
          <label>Password</label>
          <input
            type="password"
            onChange={this.onChange}
            name="password"
            value={password}
          />
          <label>Confirm Password</label>
          <input
            type="password"
            onChange={this.onChange}
            name="confirmPassword"
            value={confirmPassword}
          />
          <div>
            <p>{validationMsg}</p>
          </div>
          <label>Phone Number</label>
          <input
            onChange={this.onChange}
            name="phoneNumber"
            value={phoneNumber}
          />
          <label>Nic/B-form Number</label>
          <input
            onChange={this.onChange}
            name="nicBformNumber"
            value={nicBformNumber}
          />
          <input type="submit" value="Sign Up" onClick={this.onClickMe}/>
        </form>
      </div>
    );
  }
}

export default SignUp;
