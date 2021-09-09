import axios from 'axios';
import React, { Component } from 'react';
import './Style.scss';
class Headers extends Component{
    state={
        works:[],
    };
    componentDidMount(){
        axios.get("js/data.json").then ((e)=>{
            this.setState({
                works:e.data.header_body
            })
        })
    }
render(){
    const {works} = this.state;
    const workList = works.map((worktitle)=>{
       return(


           <div key={worktitle.id} className="big" >


               <h2 className="head">{worktitle.header}</h2>
               <div className="headers">
               <img src={worktitle.imge}/>
               <p>{worktitle.pargrafe}</p>
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
export default Headers;