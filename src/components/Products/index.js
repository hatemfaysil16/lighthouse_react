import React, { Component } from 'react';
import './Style.scss';
import './Media.scss';
import axios from 'axios';


class Products extends Component{
    state={
        works:[],
    };
    componentDidMount(){
        axios.get("js/data.json").then ((e)=>{
            this.setState({
                works:e.data.products,
            });
        });
    };

    render(){
        const {works} = this.state;
        const workList = works.map((worktitle)=>{
            return(
                <div key={worktitle.id}>
                    <h2>{worktitle.header_one}</h2>
                    <img src={worktitle.imges}/>
                    <p>{worktitle.body}</p>
                </div>
            )
        })
        return(
            <div className="containers">
               <div className="products">
                  <div className="info">
                    {workList}
                   </div>
                </div>
            </div>
            )
    }
}

export default Products;