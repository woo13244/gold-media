import React, {Component} from 'react'
import Header from '../Header/Header'
import './Home.css';
import FontAwesome from 'react-fontawesome'


export default class Home extends Component{
    render(){
        return(
            <div className="Home">
                <Header/>
                <div className="homeVideo">
                    <div className="homeVideoText">We’re a full-service digital agency built for the now. We partner with clients to drive their business <br/>outcomes with best-in-class <span>modern video production, media planning & distribution, influencer marketing, Google & Alexa voice services</span>, and everything <span>in <br/>between</span>.</div>
                    <div className="homeVideoLink"><a src="#">Watch Budweiser's amazing YouTube Ad of the Year 2016</a></div>
                    <div className="homeArrow"><FontAwesome name=" fa fa-caret-down fa-2x" style={{color: 'white'}}/></div>
                </div>
                <div className="homeRecentWork">
                    <div className="recentWorkTitle">RECENT WORK</div>
                    <div className="recentWorkExamples">
                        <div className="exampleOne">
                            <div className="exampleOneImage"></div>
                            <div className="exampleOneDetails">
                                <div className="exampleTitle">BUDWEISER</div>
                                <div className="exampleTitleGrey">Harry Caray’s Last Call</div>
                                <div>Capitalize on a once-in-a-lifetime moment to celebrate a historic win in the most memorable way possible.</div>
                            </div>
                        </div>
                        <div className="exampleTwo">
                            <div className="exampleTwoImage"></div>
                            <div className="exampleTwoDetails"></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}