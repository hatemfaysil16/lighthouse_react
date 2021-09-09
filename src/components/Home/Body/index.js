import axios from 'axios';
import React, { Component } from 'react';
import './Style.scss';
class Body extends Component{
    state={
        works:[],
    };
    componentDidMount(){
        axios.get("js/data.json").then ((e)=>{
            this.setState({
                works:e.data.body_body
            })
        })
    }
render(){
    const {works} = this.state;
    const workList = works.map((worktitle)=>{
        return(
            <div key={worktitle.id}>
                <h2>{worktitle.header}</h2>
                <ul>
                    <li>{worktitle.list}</li>
                </ul>
            </div>
        )
    })
    return(
        <div className="body">
            {workList}
            </div>
    )
}
}
export default Body;