import React, { Component } from "react";
import Form from "./Forms/Form";
import Table from "./Tables/Table";
import "./mainPage.css";
class MainPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      age: "",
      gender: "male",
      list: [],
    };
  }
  componentDidMount() {
    this.getFromStorage();
  }
  addToList = (item) => {
    this.setState(
      {
        list: [
          ...this.state.list,
          item,
        ],
        name: "",
        age: "",
        gender: "male",
      },
      this.setToStorage
    );
  };
  getFromStorage = () => {
    let objs = localStorage.getItem("myObjs");
    let myList = [];
    if (objs) {
      myList = JSON.parse(objs);
      this.setState({
        list: myList,
      });
    }
  };
  setToStorage = () => {
    console.log(this.state.list);
    localStorage.setItem("myObjs", JSON.stringify(this.state.list));
  };
  deleteRecord = (index) => {
    this.state.list.splice(index, 1);
    this.setState({
      list: this.state.list,
    });
  };
  render() {
    return (
      <div className="mainpage">
        
        <Form
          addToList={this.addToList}
        />
        <Table list={this.state.list} deleteRecord={this.deleteRecord} />
      </div>
    );
  }
}

export default MainPage;
