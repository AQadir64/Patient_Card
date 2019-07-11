import React, { Component } from "react";
import Login from "./Components/login";
import "../src/style/style.css";
import MainPage from "./Components/mainPage";
import { Link, Route, Switch } from "react-router-dom";
import MasterForm from "./Components/MultiStepForm/MasterForm";
import ForgetPassword from "./Components/forgetPassword";
import Portal from "./Components/Portal";
class App extends Component {
  render() {
    return (
      <div>
        <h1>PATIENT CARD APPLICATION</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register">register</Link>
            </li>
          </ul>
        </nav>
        <Route exact path="/" component={MainPage} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={MasterForm} />
        <Route path="/forget-password" component={ForgetPassword}/>
      </div>
    );
  }
}

export default App;
