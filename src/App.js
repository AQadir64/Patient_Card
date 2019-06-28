import React, { Component } from "react";
import Login from "./Components/login";
import "./style/style.css"
import Users from "./Components/Users";
class App extends Component {
  render() {
    return (
      <div>
        <h1>PATIENT CARD APPLICATION</h1>
        <Login> </Login>
        <Users></Users>
      </div>
    );
  }
}

export default App;
