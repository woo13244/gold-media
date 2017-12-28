import React , {Component} from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer'
import './AboutUs.css'

export default class AboutUs extends Component{
    render(){
        return(
            <div className="AboutUs">
                <Header />
                <div className="aboutusContent" style={{marginTop: '60px'}}>
                    <div className="aboutusVideoOne">
                        <div>We Create Brand <br/>Value</div>
                    </div>
                    <div className="aboutusTextContainer">
                        <div className="aboutusText">
                            <div className="missionTitle">Mission</div>
                            <div>We partner with brands to create an online presence for the now. Social media is an innovative tool to directly scale and reach your target audiences. We custom tailor your marketing campaigns to fit your target market and audience. Our mission is to drive brand awareness through creative content and direct marketing strategies.</div>
                            <div className="goalsTitle">Goals</div>
                            <div>Our goal is to help brands assimilate to the now and what works today. Old mediums of advertising such as newspaper, radio, billboard, television ads do not yield results. These outdated forms of advertising costly and ineffective. Our goal is to place your brand/business where your target audiences are through direct social media marketing. </div>
                        </div>
                        <div className="goalsList">
                            <div className="goalsListItem">
                                <div>01.</div>
                                <div>“ONLINE ADVERTISING DOESN’T HAVE TO BE A “WILD WEST.”</div>
                                <div>– BENJAMIN EDELMAN (HARVARD BUSINESS SCHOOL)</div>
                            </div>
                            <div className="goalsListItem">
                                <div>02.</div>
                                <div>“SOCIAL MEDIA IS A SAVIOR NOT A NEMESIS, AN ASSET NOT A LIABILITY, A TIME SAVER NOT A TIME KILLER FOR AD AGENCY NEW BUSINESS”</div>
                                <div>– MICHAEL GASS</div>
                            </div>
                            <div className="goalsListItem">
                                <div>03.</div>
                                <div>“CONTENT DOESN’T WIN. OPTIMIZED CONTENT WINS”</div>
                                <div>– LI EVANS, SEARCH MARKETING GURU</div>
                            </div>
                            <div className="goalsListItem">
                                <div>04.</div>
                                <div>“VISUAL MARKETING DOES NOT JUST SELL A PRODUCT OR SERVICE – IT SELLS AN EXPERIENCE AROUND YOUR BUSINESS.”</div>
                                <div>– REBEKAH RADICE</div>
                            </div>
                        </div>
                    </div>
                    <div className="aboutusVideoTwo">
                        <div className="videoTwoTitle">"Adapt To What<br/> Works Now Or<br/>Dissolve"</div>
                        <div>KEVIN KIM | FOUNDER</div>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}