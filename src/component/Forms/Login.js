import React, { Component } from 'react'
import Axios from "axios";
import { Redirect, withRouter } from "react-router-dom";
  class Login extends Component {
    constructor(props){
        super(props);
        this.state={
            name:"",
            password:"",
            isValid:false
        }
        if(localStorage.getItem("isValid")){
          this.props.history.push("/users");
        }
    }
    Validate(isValid){
     if(isValid){
            alert("welcome"+this.state.name);
            this.props.history.push("/users");}
      else  alert("Invalid Username or password");
  }
    getfromDB =(item)=>{
   
        Axios.post('http://localhost:8000/signup/login',item)
          .then((res)=>{
            console.log(res);
            this.setState({
                isValid:res.data.isValid
              })
              localStorage.setItem("isValid", res.data.isValid);
              this.Validate(res.data.isValid);
          },(error)=>{
            console.log(error);
          });
      }

    render() {
        const {name,password}=this.state;
        return (
            <div>
                <form
                className="box"
                onSubmit={(e)=>{
                    e.preventDefault();
                    this.getfromDB({name,password});
                }}>
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
                type="password"
                name="password"
                placeholder="Password"
                value={password}
                onChange={(event) => {
                  this.setState({ password: event.target.value });
                }}
              ></input>
              <button className="btn" type="submit">Login</button>
                </form>
            </div>
        )
    }
}
export default withRouter(Login);