import React, {Component} from 'react';
import FontAwesome from 'react-fontawesome'
import './Footer.css'
export default class Footer extends Component{
    render(){
        return(
            <div className="Footer">
                <div className="footerLeft">
                    <div>Home</div>
                    <div>Case Studies</div>
                    <div>Privacy Policy</div>
                    <div>Terms of Use</div>
                    <div>CopyRight Policy</div>
                </div>
                <div className="footerMid">
                    <h3>Services</h3>
                    <div>Creative</div>
                    <div>Paid Media</div>
                    <div>Influencers</div>
                    <div>eCommerce</div>
                    <div>VaynerSolutions</div>
                    <div>VaynerBeta</div>
                    <div>VaynerTalent</div>
                    <div>VaynerExperience</div>
                </div>
                <div className="footerRight">
                    <FontAwesome name="facebook fa-lg" style={{color: 'white', marginRight: '15px'}}/>
                    <FontAwesome name="twitter fa-lg" style={{color: 'white', marginRight: '15px'}}/>
                    <FontAwesome name="snapchat fa-lg" style={{color: 'white', marginRight: '15px'}}/>
                    <FontAwesome name="instagram fa-lg" style={{color: 'white', marginRight: '15px'}}/>
                    <FontAwesome name="pinterest-p fa-lg" style={{color: 'white', marginRight: '15px'}}/>
                    <FontAwesome name="linkedin fa-lg" style={{color: 'white', marginRight: '15px'}}/>
                </div>
            </div>
        )
    }
}