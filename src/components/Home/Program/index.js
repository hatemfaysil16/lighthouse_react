import axios from 'axios';
import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './Style.scss';
class Program extends Component{
    state={
        works:[],
    };
    componentDidMount(){
        axios.get("js/data.json").then ((e)=>{
            this.setState({
                works:e.data.Program
            })
        })
    }
render(){
    const {works} = this.state;
    const workList = works.map((worktitle)=>{
        return(
            
            <div className="Program"key={worktitle.id}>
                <div className="input-group">
                    <input type="search"/>
                    <button><i class={worktitle.search}></i></button>
                </div>

                <div className="infos">
                    <h2>{worktitle.header}</h2>
                    <ul>
                        <Link><li>{worktitle.list_one}</li></Link> 
                        <Link><li>{worktitle.list_two}</li></Link>
                        <Link><li>{worktitle.list_three}</li></Link>
                        <Link><li>{worktitle.list_foure}</li></Link>
                        <Link><li>{worktitle.list_five}</li></Link>
                        <Link><li>{worktitle.list_six}</li></Link>
                        <Link><li>{worktitle.list_seven}</li></Link>
                        <Link><li>{worktitle.list_ten}</li></Link>
                        <Link><li>{worktitle.list_ten_one}</li></Link>
                    </ul>
                </div>

                
            </div>
        )
    })
    return(
        <>
            {workList}
        </>
    )
}
}
export default Program;