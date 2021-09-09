import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './Style.scss';
import './Media.scss';
import axios from 'axios';

class Line extends Component{
    state={
        works:[],
    };


        componentDidMount(){
            axios.get("js/data.json").then ((e)=>{
                this.setState({
                    works:e.data.line_footer,
                });
            });
        };

        render(){
            const facebook = () => {
                window.open('https://www.facebook.com/157097164897963/posts/760947844512889/?app=fbl')
            }
            const {works} = this.state;
            const workList = works.map((worktitle)=>{
                return(
                    <div key={worktitle.id} className="line">
                    <div class="line__rit">{worktitle.span_one}<Link onClick={facebook} className="email">{worktitle.span_two}</Link></div>
                    <div class="line__lef">{worktitle.span_three}</div>
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
export default Line;