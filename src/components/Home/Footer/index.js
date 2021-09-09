import axios from 'axios';
import React, { Component } from 'react';
import './Style.scss';
class Footer extends Component{
    state={
        works:[],
    };
    componentDidMount(){
        axios.get("js/data.json").then ((e)=>{
            this.setState({
                works:e.data.footer_body
            })
        })
    }
render(){
    const {works} = this.state;
    const workList = works.map((worktitle)=>{
        return(
            <div className="footers" key={worktitle.id}>
                <h2>{worktitle.header}</h2>
                <div className="info">
                    <p>{worktitle.pargrafe}</p>
                    <ul>
                        <li>{worktitle.list_one}</li>
                        <li>{worktitle.list_two}</li>
                        <li>{worktitle.list_three}</li>
                        <li>{worktitle.list_foure}</li>
                        <li>{worktitle.list_five}</li>
                        <li>{worktitle.list_six}</li>
                        <li>{worktitle.list_seven}</li>
                        <li>{worktitle.list_eight}</li>
                        <li>{worktitle.list_night}</li>
                        <li>{worktitle.list_ten}</li>
                        <li>{worktitle.list_eleven}</li>
                        <li>{worktitle.list_twelve}</li>
                        <li>{worktitle.list_thirteen}</li>
                        <li>{worktitle.list_fourreen}</li>
                    </ul>
                    <img src={worktitle.imge}/>


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
export default Footer;