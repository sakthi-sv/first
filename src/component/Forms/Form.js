import React, { Component } from "react";
import "./form.css";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      age: "",
      gender: "male",
    };
  }
  render() {
    // console.log(this.props);
    const { addToList } = this.props;
    const {name, age, gender} = this.state

    return (
      <div class="component">
        <div id="form" >
          <div class="title">Form Component</div>

          <div >
            <form className="box"
              onSubmit={(event) => {
                event.preventDefault();
                if (name === "" || age === "" || gender === "") {
                  alert("Insert Every Field");
                } else {
                  addToList({name, age, gender});
                }
              }}
            >
              <input
                class="input"
                type="text"
                name="Name"
                placeholder="Name"
                value={this.state.name}
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
                value={this.state.age}
                onChange={(event) => {
                  this.setState({ age: event.target.value });
                }}
              ></input>
              <br></br>
              <label >Gender</label>
              <select className="gender"
                value={this.state.gender}
                onChange={(event) => {
                  this.setState({ gender: event.target.value });
                }}
              >
                <option className="gender" value="male">Male</option>

                <option className="gender" value="female">Female</option>
              </select>
              <br></br>
              <button class="btn" type="submit">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Form;
