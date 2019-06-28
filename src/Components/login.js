import React, { Component } from "react";

class Login extends Component {
  render() {
    return (
      <div>
        <form>
          <label>User Name/Email</label>
          <input type="text" />
          <label>Password</label>
          <input type="text" />
          <button type="submit" onClick={()=>{
            console.log("validation")
          }}>Login</button>
        </form>
      </div>
    );
  }
}

export default Login;
