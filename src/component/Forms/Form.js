import React, { Component } from "react";
import "./form.css" ;

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      age: "",
      gender: "male",
      list: [],
    };
  }
  componentDidMount(){
    this.getFromStorage();
  }
  addToList = () => {
    this.setState({
      list: [
        ...this.state.list,
        {
          name: this.state.name,
          age: this.state.age,
          gender: this.state.gender,
        },
      ],
      name: "",
      age: "",
      gender: "male",
    },()=>this.setToStorage());
    
    
  };
  getFromStorage=()=>{
    let objs=localStorage.getItem('myObjs');
    let myList=[];
    if(objs){
      myList=JSON.parse(objs);
      this.setState({
        list:myList
      });
    }
  }
  setToStorage=()=>{
    console.log(this.state.list);
    localStorage.setItem('myObjs',JSON.stringify(this.state.list))
  }
  deleteRecord = (index) => {
    this.state.list.splice(index, 1);
    this.setState({
      list: this.state.list,
    });
  };

  render() {
    return (
      <div class="component">
        <div id="form" class="box">
        <div class="title">
        Form Component</div>
        
        <div >
        <form
          onSubmit={(event) => {
            if (
              this.state.name == "" ||
              this.state.age == "" ||
              this.state.gender == ""
            ) {
              event.preventDefault();
              alert("Insert Every Field");
            } else {
              event.preventDefault();
              this.addToList();
            }
          }}
        >
          
          <input class="input"
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
         
          <input class="input"
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
          <button class="btn" type="submit">Submit</button>
        </form>
        </div>
        </div>
        
        
        <div id="table" class="box">
          <div class="title">Table</div>
        <div >
        <table>
          <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Action</th>
          </tr>
          </thead>
          {this.state.list.map((element, index) => (
            <tr>
              <td>{element.name}</td>
              <td>{element.age}</td>
              <td>{element.gender}</td>
              <td>
                <button class="btn" id="del"
                  type="button"
                  onClick={(e) => {
                    this.deleteRecord(index);
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </table>
        </div>
        </div>
      </div>
    );
  }
}

export default Form;
