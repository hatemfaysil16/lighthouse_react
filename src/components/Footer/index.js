import React, { Component } from 'react';
import './Style.scss';
import './Media.scss';
import Line from './Line';
import {Link} from 'react-router-dom';
import axios from 'axios';

class Footer extends Component{
    state={
        works:[],
    };


        componentDidMount(){
            axios.get("js/data.json").then ((e)=>{
                this.setState({
                    works:e.data.footer,
                });
            });
        };

        render(){
            const handleEmailMe = () => {
                window.open("mailto:lighthouselighthouse2@gmail.com")
            }
            const facebook = () => {
                window.open('https://www.facebook.com/157097164897963/posts/760947844512889/?app=fbl')
            }
            const youtube = () => {
                window.open('https://www.youtube.com/channel/UCs1TJvJ9xg5PwrgTRikJV_w')
            }
            const {works} = this.state;
            const workList = works.map((worktitle)=>{
                return(
                    <div className="footer"key={worktitle.id}>
                        
                        
                        <div className="footer__one ">
                            <h2>{worktitle.header_one}</h2>
                            <Link onClick={facebook}><img src={worktitle.imges_one}/></Link>
                        </div>


                        <div className="footer__two ">
                            <h2><span>{worktitle.header_two}</span></h2>
                            <ul>
                                <li><span>{worktitle.Address}</span> <small>{worktitle.From}</small> </li>
                                <li><span>{worktitle.Mobile}</span> <small>{worktitle.Mobile_one}</small> </li>
                                <li><span>{worktitle.Mobile}</span> <small>{worktitle.Mobile_two}</small> </li>
                                <li  className="E_mail"> <span>{worktitle.E_mail}</span> <small><Link onClick={handleEmailMe} className="email">{worktitle.E_mail_one}</Link></small> </li>
                                <li  className="facebook"> <span>{worktitle.facebook}</span> <small><Link onClick={facebook} className="email">{worktitle.link_facebook}</Link></small> </li>
                                <li  className="youtube"> <span>{worktitle.youtube}</span> <small><Link onClick={youtube} className="email">{worktitle.link_youtube}</Link></small> </li>
                            </ul>
                        </div>
                    </div>
                )
            })
    
        return(
            <>
    {workList}
    <Line/>         
            </>
        )
    }
}

export default Footer;