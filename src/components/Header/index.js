import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import './Style.scss';


class Header extends Component{
  state={
    works:[],
  }
  componentDidMount(){
    axios.get("js/data.json").then ((e)=>{
      this.setState({
        works:e.data.header,
      })
    })
  }
  render(){
    const {works}=this.state;
    const workList = works.map((worktitle)=>{
      return(
        <div key={worktitle.id}>
          <Link to="/"> 
          <h2 className="xx-large">{worktitle.header} <span className="diffrent">{worktitle.span_one} </span></h2> 
          <span className="large diffrent">{worktitle.span_two} </span>
          <img src={worktitle.imge}/>

          </Link>
        </div>
      )
    })
      return(
        <div className="header">
          {workList}
        </div>
    )
  }
}
export default Header;


// 320