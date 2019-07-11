import React, { Component } from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import { AuthService } from "../authetication";
import { SecretRoute } from "../secretRoute";
import { Redirect, Link, Route } from "react-router-dom";
import Portal from "../Portal/Portal";
import {
  empty,
  alphabets,
  isEmail,
  comparision,
  length
} from "../../validationFunctions";
class MasterForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data : [],
      redirectToPreviousRoute: false,
      currentStep: 1,
      values: {
        fullName: "",
        email: "",
        password: "",
        confirmPassword: "",
        phoneNumber: "",
        address: "",
        nicBform: "",
        age: ""
      }
    };
    this._nextStep = this._nextStep.bind(this);
    this._prevStep = this._prevStep.bind(this);
    this.onGetStarted = this.onGetStarted.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.step2Next = this.step2Next.bind(this);
  }

  

  onGetStarted(event) {
    event.preventDefault();
    const { data } = this.state;
    const { email, password, fullName, confirmPassword } = this.state.values;
    const validUser = data.filter(user => {
      return (
         comparision(user.email, email)
      );
    }
    )
    console.log(validUser)
    if (
      empty(email) ||
      empty(password) ||
      empty(confirmPassword) ||
      empty(fullName)
    ) {
      console.log("fields requried");
      this.setState(prevState => ({
        values: {
          ...prevState.values,
          password: "",
          confirmPassword: ""
        }
      }));
      
    }
    else if (!validUser)
    {
      console.log("email already exists")
      this.setState(prevState => ({
        values: {
          ...prevState.values,
          email: "",
          fullName: "",
          password: "",
          confirmPassword: ""
        }
      }));
    }
    else if (!alphabets(fullName)) {
      console.log("name cannot contain numbers");
      this.setState(prevState => ({
        values: {
          ...prevState.values,
          fullName: "",
          password: "",
          confirmPassword: ""
        }
      }));
    } else if (!isEmail(email)) {
      console.log("invalid email formet");
      this.setState(prevState => ({
        values: {
          ...prevState.values,
          password: "",
          confirmPassword: ""
        }
      }));
    } else if (!length(password, 8)) {
      console.log("password should contain 8 characters");
      this.setState(prevState => ({
        values: {
          ...prevState.values,
          password: "",
          confirmPassword: ""
        }
      }));
    } else if (!comparision(password, confirmPassword)) {
      console.log("password does not match");
      this.setState(prevState => ({
        values: {
          ...prevState.values,
          password: "",
          confirmPassword: ""
        }
      }));
    } else {
      this._nextStep();
    }
  }

  componentDidMount() {
    const data = localStorage.getItem("users")
      ? JSON.parse(localStorage.getItem("users"))
      : [];
    this.setState({
      data
    });
  }

  _nextStep() {
    let currentStep = this.state.currentStep;
    currentStep = currentStep >= 2 ? 3 : currentStep + 1;
    this.setState({
      currentStep
    });
  }

  _prevStep() {
    let currentStep = this.state.currentStep;
    currentStep = currentStep <= 1 ? 1 : currentStep - 1;
    this.setState({
      currentStep
    });
  }

  getStartedButton() {
    let currentStep = this.state.currentStep;
    if (currentStep === 1) {
      return <button onClick={this.onGetStarted}> Get Started</button>;
    }
  }

  step2Next(event) {
    event.preventDefault();
    const { phoneNumber, nicBform } = this.state.values;
    if (!length(phoneNumber, 11)) {
      console.log("phone Number should contain 11 numbers");
      this.setState(prevState => ({
        values: {
          ...prevState.values,
          phoneNumber: ""
        }
      }));
    } else if (!length(nicBform, 13)) {
      console.log("Nic/B-form number should contain 13 numbers");
      this.setState(prevState => ({
        values: {
          ...prevState.values,
          phoneNumber: ""
        }
      }));
    } else {
      this._nextStep();
    }
  }

  prevButton() {
    let currentStep = this.state.currentStep;
    if (currentStep > 2) {
      return <button onClick={this._prevStep}>Previous</button>;
    }
    return null;
  }

  nextButton() {
    let currentStep = this.state.currentStep;
    if (currentStep > 2 && currentStep < 3) {
      return <button onClick={this._nextStep}>Next</button>;
    }
    return null;
  }
  finishButton() {
    let currentStep = this.state.currentStep;
    if (currentStep === 3) {
      return (
        <button onClick={this.handleSubmit}>
          <Link to="/register/portal">Finish</Link>{" "}
        </button>
      );
    }
    return null;
  }
  step2NextButton() {
    let currentStep = this.state.currentStep;
    if (currentStep === 2) {
      return <button onClick={this.step2Next}> Next</button>;
    }
  }
  handleChange(event) {
    const { name, value } = event.target;
    this.setState(prevState => ({
      values: {
        ...prevState.values,
        [name]: value
      }
    }));
  }
  handleSubmit = event => {
    event.preventDefault();
    const {
      email,
      fullName,
      password,
      age,
      nicBform,
      phoneNumber,
      address
    } = this.state.values;
    const user = {
      email,
      fullName,
      password,
      age,
      nicBform,
      phoneNumber,
      address
    };
    const data = localStorage.getItem("users")
      ? JSON.parse(localStorage.getItem("users"))
      : [];
    data.push(user);
    localStorage.setItem("users", JSON.stringify(data));
    AuthService.authenticate(() => {
      this.setState({ redirectToPreviousRoute: true });
    });
  };
  render() {
    const { currentStep ,redirectToPreviousRoute} = this.state;
    
    const {
      email,
      fullName,
      password,
      age,
      nicBform,
      phoneNumber,
      address
    } = this.state.values;
    const user = {
      email,
      fullName,
      password,
      age,
      nicBform,
      phoneNumber,
      address
    };
    if (!redirectToPreviousRoute) {
      return (
        <div>
          <form onSubmit={this.handleSubmit}>
            <Step1
              currentStep={currentStep}
              values={this.state.values}
              handleChange={this.handleChange}
              onGetStarted={this.onGetStarted}
            />
            <Step2
              currentStep={currentStep}
              values={this.state.values}
              handleChange={this.handleChange}
            />
            <Step3
              currentStep={currentStep}
              values={this.state.values}
              handleChange={this.handleChange}
            />
            {this.prevButton()}
            {this.nextButton()}
            {this.step2NextButton()}
            {this.getStartedButton()}
            {this.finishButton()}
          </form>
        </div>
      );
    } else {
      return (
        <div>
          <SecretRoute path="/register/portal" component={Portal} user={user}/>
        </div>
      );
    }
  }
}

export default MasterForm;
