import React, { Component } from "react";
import Form from "./Forms/Form";
import Table from "./Tables/Table";
import "./mainPage.css";
import Sample from "./Sample";

import { Route, Link, BrowserRouter as Router, Switch } from "react-router-dom";
import Notfound from "./notfound";
import Movies from "./Movies/Movies";

class MainPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      age: "",
      gender: "male",
      email: "",
      pwd: "",
      list: [],
      isVerified: false,
    };
  }
  componentDidMount() {
    this.getFromStorage();
  }
  addToList = (item) => {
    this.setState(
      {
        list: [...this.state.list, item],
        name: "",
        age: "",
        email: "",
        pwd: "",
        gender: "male",
        isVerified: false,
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
    //console.log(this.state.list);
    localStorage.setItem("myObjs", JSON.stringify(this.state.list));
  };
  deleteRecord = (index) => {
    this.state.list.splice(index, 1);
    this.setState({
      list: this.state.list,
    });
    this.setToStorage();
  };

  render() {
    return (
      <Router>
        <div className="mainpage">
          <Switch>
            <Route exact path="/">
              <Sample />
              {/* <Form addToList={this.addToList} /> */}
            </Route>
            <Route exact path="/movies">
              <Movies />
            </Route>
            <Route path="/verify">
              <Table list={this.state.list} deleteRecord={this.deleteRecord} />
            </Route>
            <Route component={Notfound} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default MainPage;
