import React, { Component } from "react";
import data from "../Appdata";

class Login extends Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: "",
      data,
    };

    this.onChange = this.onChange.bind(this)
    this.onClickMe = this.onClickMe.bind(this)
  }
  onClickMe(event) {
    event.preventDefault()
    const {data} = this.state
    const valid = data.filter((user)=>{
      return user.password === this.state.password & user.email === this.state.email
    })
    if(valid.length===1)
    {
      alert("access")
    }
    else{
      alert("denied")
    }
  }
  onChange(event) {
    const { value,name} = event.target;
    console.log(value,name);
    this.setState({[name]: value});
  }
  render() {
    const { email, password } = this.state;
    return (
      <div>
        <form>
          <label>User Name/Email</label>
          <input onChange={this.onChange} type="email" name="email" value={email} />
          <label>Password</label>
          <input type="password" onChange={this.onChange} name="password" value={password} />
          <button onClick={this.onClickMe}>Login</button>
        </form>
      </div>
    );
  }
}

export default Login;
