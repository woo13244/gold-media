import React, {Component} from 'react';
import './Header.css'
import Button from 'react-bootstrap/lib/Button'

export default class Header extends Component{
    render(){
        return(
            <div className="Header">
                <div className="logo"><span>GOLD</span>MEDIA</div>
                <div className="headerContent">
                    <div>
                        <a className="bert">ABOUT US</a>
                    </div>
                    <div>
                        <a>OUR TEAM</a>
                    </div>
                    <div>
                        <a>OUR IMPACT</a>
                    </div>
                    <div className="becomeAClient" >BECOME A CLIENT</div>
                </div>
            </div>
        )
    }
}