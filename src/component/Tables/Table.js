import React, { Component } from 'react'
import Form from '../Forms/Form';
import "./table.css";
 class Table extends Component {


    render() {
        const {list}=this.props;
        const {deleteRecord}=this.props
        return (
            <div>
                
                <div id="table" >
          <div class="title">Table</div>
        <div >
        <table className="box">
          <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Action</th>
          </tr>
          </thead>
          <tbody>
          {list.map((element, index) => (
            <tr>
              <td>{element.name}</td>
              <td>{element.age}</td>
              <td>{element.gender}</td>
              <td>
                <button class="btn" id="del"
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
          </tbody>
        </table>
        </div>
        </div>
            </div>
        )
    }
}

export default Table
