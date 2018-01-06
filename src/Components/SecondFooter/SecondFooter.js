import React, {Component} from 'react';
import './SecondFooter.css';
import FontAwesome from 'react-fontawesome'

export default class SecondFooter extends Component{
    render(){
        return(
            <div className="SecondFooter" style={{marginTop : '50px'}}>
                <a className="emailIcon" href="mailto:kev@goldmedia.biz"><FontAwesome name="envelope-o fa-lg"/></a>
                <div>CONTACT US</div>
                <div className="socialIcons">
                    <a href="#"><FontAwesome name="facebook-square fa-lg"/></a>
                    <a href="https://www.instagram.com/goldmediainc/"><FontAwesome name="instagram fa-lg"/></a>
                </div>
            </div>
        )
    }
}