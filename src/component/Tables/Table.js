import React, { Component } from "react";
import Form from "../Forms/Form";
import "./table.css";
import { Link } from "react-router-dom";
class Table extends Component {
  constructor() {
    super();
    this.state = {
      selectedIndex: -1,
      pwd: "",
    };
  }
  setToStorage = () => {
    console.log(this.props.list);
    localStorage.setItem("myObjs", JSON.stringify(this.props.list));
  };
  verifyRecord = (pwd, index) => {
    if (pwd === this.props.list[index].pwd) {
      this.props.list[index].isVerified = true;
      this.setToStorage();
    } else alert("Password dosen't match");
    this.setState({ selectedIndex: -1,pwd:"" });
  };
  closeRecord = (index) => {
    //this.props.list[index].isVerified="false";
    // this.setToStorage();
    this.setState({ selectedIndex: -1,pwd:"" });
  };
  render() {
    const { list } = this.props;
    const { deleteRecord } = this.props;
    return (
      <div>
        <Link to="/"><button  class="btn"
                          type="button">Register</button></Link>
        <Link to="/movies"><button  class="btn"
                          type="button">Movies</button></Link>
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
                  <td>
                    {element.isVerified ? (
                      <div>
                        <p>verified</p>
                      </div>
                    ) : this.state.selectedIndex === index ? (
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
                            this.verifyRecord(this.state.pwd, index);
                          }}
                        >
                          verify
                        </button>
                        <button
                          class="btn"
                          id="verify"
                          type="button"
                          onClick={(e) => {
                            this.closeRecord(index);
                          }}
                        >
                          Close
                        </button>
                      </div>
                    ) : (
                      <button
                        class="btn"
                        id="verify"
                        type="button"
                        onClick={(e) => {
                          this.setState({ selectedIndex: index });
                        }}
                      >
                        Click
                      </button>
                    )}
                  </td>
                  <td>
                    <button
                      class="btn"
                      id="del"
                      type="button"
                      onClick={(e) => {
                        deleteRecord(index);
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

export default Table;
