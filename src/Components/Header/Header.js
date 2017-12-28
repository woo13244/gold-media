import React, {Component} from 'react';
import './Header.css'
import Button from 'react-bootstrap/lib/Button'
import FontAwesome from 'react-fontawesome';
import {Link} from 'react-router-dom';
import {HashLink as Slink} from 'react-router-hash-link';


export default class Header extends Component{
    render(){
        return(
            <div className="Header">
                <Link className="logo" to="/"><span>GOLD</span>MEDIA</Link>
                <div className="headerContent">
                    <div>
                        <Link className="bert" to="/aboutus">ABOUT US</Link>
                    </div>
                    <div>
                        <Link className="bert" to="/ourteam">OUR TEAM</Link>
                    </div>
                    <div>
                        <Link className="bert" to="/ourimpact">OUR IMPACT</Link>
                    </div>
                    <Slink to="/#becomeAClient"><div className="becomeAClient" >BECOME A CLIENT</div></Slink>
                </div>
                {/* <div className="menuBar">
                    <FontAwesome name="bars fa-lg"/>
                </div> */}
            </div>
        )
    }
}