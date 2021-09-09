import axios from 'axios';
import React, { Component } from 'react';
import './Style.scss';
class Video extends Component{
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
    const {works} = this.state;
    const workList = works.map((worktitle)=>{
        return(
            <div className="videos" key={worktitle.id}>
                <div className={worktitle.class}>
                <iframe  src={worktitle.Link_youtube} title={worktitle.title} frameborder="0" allow={worktitle.allow} allowfullscreen></iframe>
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
export default Video;


// width="560" height="315"

