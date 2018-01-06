import React, {Component} from 'react';
import './Header.css'
import Button from 'react-bootstrap/lib/Button'
import FontAwesome from 'react-fontawesome';
import {Link} from 'react-router-dom';
import {HashLink as Slink} from 'react-router-hash-link';


export default class Header extends Component{
    constructor(){
        super()
        this.state={
            menu : false
        }
    }
    render(){
        return(
            <div className="Header">
                <div className="headerContainer">
                    <div className="headerLogo"><Link className="logo" to="/"><span>GOLD</span>MEDIA</Link></div>
                    <div className="headerLeft">
                        <div><Link className="bert" to="/aboutus">ABOUT US</Link></div>
                        <div><Link className="bert" to="/ourteam">OUR TEAM</Link></div>
                        <div><Link className="bert" to="/ourimpact">OUR IMPACT</Link></div>
                        <div ><Slink to='/#becomeAClient' className="becomeAClient">BECOME A CLIENT</Slink></div>
                    </div>
                    <div className="menuContainer" onClick={()=>{this.setState({menu : !this.state.menu})}}><FontAwesome name="bars fa-lg" className='menu'/></div>
                </div>
                <div className={this.state.menu ? 'menuExtension' : 'menuRetract'}>
                    <div><Link className="bert" to="/aboutus">ABOUT US</Link></div>
                    <div><Link className="bert" to="/ourteam">OUR TEAM</Link></div>
                    <div><Link className="bert" to="/ourimpact">OUR IMPACT</Link></div>
                </div>
            </div>
        )
    }
}


                {/* <div className="Header2">
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
                    <div className="menuBar" onClick={()=>{
                        this.setState({
                            menu : !this.state.menu
                        },()=>{
                            console.log(this.state.menu)
                        })
                    }}>
                        <FontAwesome name="bars fa-lg"/>
                    </div>
                </div>
                <div style={{marginTop: 100, border: '2px solid red'}}>yelo</div> */}