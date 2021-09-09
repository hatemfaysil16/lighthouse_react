import React, { Component } from 'react';
import './Style.scss';
import './Media.scss';
import axios from 'axios';
import {Link} from 'react-router-dom';

class ContactUS extends Component{
    state={
        works:[],
    };
    componentDidMount(){
        axios.get("js/data.json").then ((e)=>{
            this.setState({
                works:e.data.contact,
            });
        });
    };
render(){
    const {works} = this.state;
    const handleEmails = ()=>{
        window.open("mailto:hatemfaysil16@gmail.com")
    }
    const openHome = ()=>{
        window.open('./Home');
    }
    const facebook = (url)=>{
        window.open('https://www.facebook.com/157097164897963/posts/760947844512889/?app=fbl');
    }
    const youtube = ()=>{
        window.open('https://www.youtube.com/channel/UCs1TJvJ9xg5PwrgTRikJV_w');
    }
    const website = ()=>{
        window.open('https://ad4sas.com/');
    }
    const workList = works.map((worktitle)=>{
        return(
            <div key={worktitle.id}>
                <div className="row">

                <div className="contact__one col-xl-2 col-lg-2 col-md-2 col-sm-2 col-2">
                    <Link onClick={openHome}><img src={worktitle.imges}/></Link>
                    </div>


                    <div className="contact__two col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6">
                        <ul>                    
                        <Link> <li onClick={facebook}>{worktitle.Address}</li> </Link>
                        <Link> <li onClick={facebook}>{worktitle.From}</li> </Link>
                        <Link> <li onClick={facebook}>{worktitle.Telephone}</li> </Link>
                        <Link> <li onClick={facebook}>{worktitle.Mobile_one}</li> </Link>
                        <Link> <li onClick={facebook}>{worktitle.Mobile_two}</li> </Link>
                        <Link> <li onClick={handleEmails}>{worktitle.E_mail}</li></Link>
                        <Link> <li onClick={website}>{worktitle.website}</li></Link>
                        <Link> <img onClick={facebook}src={worktitle.facebook}></img> </Link>
                        <Link> <img onClick={youtube} src={worktitle.youtube}></img> </Link>
                        </ul>
                    </div>
                </div>

            </div>
        )
    })
        return(
            <div className="containers">
                <div className="contact">
                {workList}
                </div>
            </div>
            )
    }
}

export default ContactUS;




