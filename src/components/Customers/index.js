import axios from 'axios';
import React, { Component } from 'react';
import './Style.scss';
import {Link} from 'react-router-dom';
class Customers extends Component{
    state={
        works:[],
    };
    componentDidMount(){
        axios.get("js/data.json").then ((e)=>{
            this.setState({
                works:e.data.videos
            })
        })
    }
render(){
    const facebook = (url)=>{
        window.open('https://www.facebook.com/157097164897963/posts/760947844512889/?app=fbl');
    }
    const youtube = ()=>{
        window.open('https://www.youtube.com/channel/UCs1TJvJ9xg5PwrgTRikJV_w');
    }
    const {works} = this.state;
    const workList = works.map((worktitle)=>{
        return(
            <div className="Customers" key={worktitle.id}>
                <div className={worktitle.class}>
                <iframe  src={worktitle.Link_youtube} title={worktitle.title} frameborder="0" allow={worktitle.allow} allowfullscreen></iframe>
            </div>
            <div className="info">
            <Link> <img onClick={facebook}src={worktitle.facebook}></img> </Link>
            <Link> <img onClick={youtube} src={worktitle.youtube}></img> </Link>
            </div>
            </div>

        )
    })
    return(
        <div className="containers">
            {workList}
        </div>
    )
}
}
export default Customers;



