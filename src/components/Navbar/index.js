import React ,{Component}from 'react';
import './Style.scss';
import './Media.scss';
import {Link} from 'react-router-dom';
import axios from 'axios';


class Navbar extends Component {
    state={
        works:[],
    };
    componentDidMount(){
        axios.get("js/data.json").then ((e)=>{
            this.setState({
                works:e.data.navbar,
            });
        });
    };
    render(){
        const {works} = this.state;
        const workList = works.map((worktitle)=>{
            return(
                <>
                <li className="active"><Link to="/"> {worktitle.list_one}</Link></li>
                <li><Link to="/products">{worktitle.list_two}</Link></li>
                <li><Link to="/gallery">{worktitle.list_three}</Link></li>
                <li><Link to="/contactUs">{worktitle.list_foure}</Link></li>
                </>
            )
        })
          return(
            <ul className="nav">
                {workList}
            </ul>
        )
    }
}

export default Navbar;