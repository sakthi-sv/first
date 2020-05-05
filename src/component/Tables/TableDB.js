import React, { Component } from "react";
import "./table.css";
import Axios from "axios";
import { Link } from "react-router-dom";
export default class TableDB extends Component {
  constructor() {
    super();
    this.state = {
      list: [],
      selectedId: -1,
      pwd: "",
    };
  }
  componentDidMount(){
      this.getfromDB();
  }
  getfromDB =()=>{
   
    Axios.get('http://localhost:8000/signup')
      .then((res)=>{
        console.log(res);
        this.setState({
            list:res.data
        })
      },(error)=>{
        console.log(error);
      });
  }
  deleteRecordDB=(id,index)=>{
      console.log("fr",id)
      this.state.list.splice(index, 1);
      this.setState({
        list: this.state.list,
      });
      console.log("ewgg",this.state.list);
      Axios.delete("http://localhost:8000/signup/"+id)
        .then((res)=>{
            console.log(res);
        })

  }
  putToDB=(id)=>{
        Axios.put("http://localhost:8000/signup/"+id,{"isVerified":true})
            .then((res)=>{
                console.log(res);
            })
  }
  verifyRecord = (pwd, index) => {
      console.log(pwd,this.state.list[index].password)
    if (pwd === this.state.list[index].password) {
      this.state.list[index].isVerified = true;
      this.putToDB(this.state.list[index].id);
    } else alert("Password dosen't match");
    this.setState({ selectedId: -1,pwd:"" });
  };
  closeRecord = () => {
    this.setState({ selectedId: -1,pwd:"" });
  };

  render() {
      console.log("hi")
    const { list } = this.state;
    return (
      <div>
        <Link to="/">
          <button class="btn" type="button">
            Register
          </button>
        </Link>
        <Link to="/movies">
          <button class="btn" type="button">
            Movies
          </button>
        </Link>
        <div id="table">
          <div class="title">Table</div>
          <div>
            <table className="box">
              <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Gender</th>
                <th>Email</th>
                <th>verify</th>
                <th>Action</th>
              </tr>
              {list.map((element, index) => (
                <tr>
                  <td>{element.name}</td>
                  <td>{element.age}</td>
                  <td>{element.gender}</td>
                  <td>{element.email}</td>
                  <td>{element.isVerified?
                                    <div>
                                        <p>verified</p>
                                    </div>
                                    :
                                        this.state.selectedId===element.id?
                                        <div>
                                            <input
                                            type="password"
                                            placeholder="Password"
                                            value={this.state.pwd}
                                            onChange={(event) => {
                                                this.setState({
                                                pwd: event.target.value,
                                                });
                                            }}
                                            />
                                            <button
                                            class="btn"
                                            id="verify"
                                            type="button"
                                            onClick={(e) => {
                                                this.verifyRecord(this.state.pwd,index);
                                            }}
                                            >
                                            verify
                                            </button>
                                            <button
                                            class="btn"
                                            id="verify"
                                            type="button"
                                            onClick={(e) => {
                                                this.closeRecord();
                                            }}
                                            >
                                            Close
                                            </button>
                                      </div>
                                     : 
                                      <button
                                        class="btn"
                                        id="verify"
                                        type="button"
                                        onClick={(e) => {
                                          this.setState({ selectedId:element.id });
                                        }}
                                      >
                                        Click
                                      </button>
                  
                }</td>
                  <td>
                    <button
                      class="btn"
                      id="del"
                      type="button"
                      onClick={(e) => {
                        this.deleteRecordDB(element.id,index);
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
