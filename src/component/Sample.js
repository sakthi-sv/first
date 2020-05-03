import React, { Component } from 'react'
import Axios from 'axios'

export default class Sample extends Component {
    handelClick(){
        //connects with the backend and retrives data
        Axios.get("/node")
        .then(res=>{
            console.log(res);
        });
    }
    render() {
        return (
            <div>
                <h1>connecting to Express</h1>
                <button onClick={this.handelClick}>Connect</button>
            </div>
        )
    }
}
