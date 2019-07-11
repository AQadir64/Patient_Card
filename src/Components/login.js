import React, { Component } from "react";
import { comparision, empty } from "../validationFunctions";
import { Redirect, Link, Route } from "react-router-dom";
import ForgetPassword from "./forgetPassword";
import MasterForm from "./MultiStepForm/MasterForm";
import { SecretRoute } from "./secretRoute";
import Portal from "./Portal/Portal";
import { AuthService } from "./authetication";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      redirectToPreviousRoute: false,
      email: "",
      password: "",
      data: []
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onSubmit(event) {
    event.preventDefault();
    const { data, password, email, authenticate } = this.state;
    const valid = data.filter(user => {
      return (
        comparision(user.password, password) & comparision(user.email, email)
      );
    });
    if (empty(password) || empty(email)) {
      this.setState({
        password: ""
      });
      console.log("email/password required");
    } else if (valid.length === 1) {
      AuthService.authenticate(() => {
        this.setState({ redirectToPreviousRoute: true });
      });
    } else {
      alert("denied");
    }
  }
  onChange(event) {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  }
  componentDidMount() {
    const data = localStorage.getItem("users")
      ? JSON.parse(localStorage.getItem("users"))
      : [];
    this.setState({
      data
    });
  }
  render() {
    const { email, password ,redirectToPreviousRoute,data} = this.state;
    const validUser = data.filter(user => {
      return (
        comparision(user.password, password) & comparision(user.email, email)
      );
    }
    )
    if(!redirectToPreviousRoute)
    {
    return (
      <div>
        <h1>WELCOME</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias,
          tenetur.
        </p>
        <form>
          <label>UserName/Email</label>
          <input
            onChange={this.onChange}
            type="email"
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
          <button onClick={this.onSubmit}><Link to="/login/portal"> Login</Link>{" "}</button>
          <p>
            <Link to="/forget-password">
              {" "}
              <button> Forget Password </button>
            </Link>{" "}
          </p>
        </form>
        <p>
          <Link to="/register">register</Link>{" "}
        </p>
        <Route path="/register" component={MasterForm} />
        <Route path="/forget-password" component={ForgetPassword} />
      </div>
    );
    }
    else{
      return (
        <div>
                <SecretRoute path='/login/portal' component={Portal} user={validUser}/>
        </div>
      )
    }
  }
}

export default Login;
