import React, { Component } from "react";


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
    console.log(this.props);
    const { addToList } = this.props;
    const {name, age, gender} = this.state

    return (
      <div class="component">
        <div id="form" class="box">
          <div class="title">Form Component</div>

          <div>
            <form
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
                placeholder="Enter Name"
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
                placeholder="Enter Age"
                min="1"
                value={this.state.age}
                onChange={(event) => {
                  this.setState({ age: event.target.value });
                }}
              ></input>
              <br></br>
              <label>Gender</label>
              <select
                value={this.state.gender}
                onChange={(event) => {
                  this.setState({ gender: event.target.value });
                }}
              >
                <option value="male">Male</option>

                <option value="female">Female</option>
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
