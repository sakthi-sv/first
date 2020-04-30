import React, { Component } from "react";
import "./form.css";
import { Redirect, withRouter } from "react-router-dom";

class Form extends Component {
  constructor(props) {
    super(props);
    //console.log(props);
    this.state = {
      name: "",
      age: "",
      gender: "male",
      email: "",
      pwd: "",
      cpwd: "",
      isVerified:false
    };
  }
  render() {
    // console.log(this.props);
    const { addToList } = this.props;

    const { name, age, gender, email, pwd, cpwd,isVerified } = this.state;

    return (
      <div className="component">
        <div className="form">
          <div className="title">Form Component</div>

          <div>
            <form
              className="box"
              onSubmit={(event) => {
                event.preventDefault();
                if (
                  name === "" ||
                  age === "" ||
                  gender === "" ||
                  email === "" ||
                  pwd === "" ||
                  cpwd === ""
                ) {
                  alert("Insert Every Field");
                } else if (pwd !== cpwd) {
                  alert("Password and Confirm Password didn't match");
                } else {
                  addToList({ name, age, gender, email, pwd ,isVerified});
                  this.props.history.push("/verify");
                }
              }}
            >
              <input
                class="input"
                type="text"
                name="Name"
                placeholder="Name"
                value={name}
                onChange={(event) => {
                  this.setState({
                    name: event.target.value,
                  });
                }}
              ></input>
              <br></br>

              <input
                class="input"
                type="number"
                name="Age"
                placeholder="Age"
                min="1"
                value={age}
                onChange={(event) => {
                  this.setState({ age: event.target.value });
                }}
              ></input>
              <br></br>

              <select
                className="gender"
                value={gender}
                onChange={(event) => {
                  this.setState({ gender: event.target.value });
                }}
              >
                <option className="gender" value="male">
                  Male
                </option>

                <option className="gender" value="female">
                  Female
                </option>
              </select>
              <br></br>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={email}
                onChange={(event) => {
                  this.setState({ email: event.target.value });
                }}
              ></input>
              <br></br>
              <input
                type="password"
                name="pwd"
                placeholder="Password"
                value={pwd}
                onChange={(event) => {
                  this.setState({ pwd: event.target.value });
                }}
              ></input>
              <br></br>
              <input
                type="password"
                name="cpwd"
                placeholder="Confirm Password"
                value={cpwd}
                onChange={(event) => {
                  this.setState({ cpwd: event.target.value });
                }}
              ></input>
              <input type="hidden" name="isVerified" value={isVerified}/>
              <br></br>
              <button class="btn" type="submit">
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Form);
