import React, {Component} from 'react';
import Header from '../Header/Header';
import './Home.css';
import FontAwesome from 'react-fontawesome';
import {Helmet} from 'react-helmet';
import Footer from '../Footer/Footer'
export default class Home extends Component{
    constructor(){
        super()
        this.state={
            name: '',
            
        }
    }
    render(){
        return(
            <div className="Home">
                <Helmet>
                    <title>Gold Media</title>
                </Helmet>
                <Header/>
                <div className="homeVideo">
                    <div className="homeVideoText">We’re a full-service digital agency built for the now. We partner with clients to drive their business <br/>outcomes with best-in-class <span>modern video production, media planning & distribution, influencer marketing, Google & Alexa voice services</span>, and everything <span>in <br/>between</span>.</div>
                    <div className="homeVideoLink"><a src="#">Become A Client</a></div>
                    <div className="homeArrow"><FontAwesome name=" fa fa-caret-down fa-2x" style={{color: 'white'}}/></div>
                </div>
                {/* <div className="homeRecentWork">
                    <div className="recentWorkTitle">RECENT WORK</div>
                    <div className="recentWorkExamples">
                        <div className="exampleOne">
                            <div className="exampleOneImage"></div>
                            <div className="exampleOneDetails">
                                <h3 className="exampleTitle">BUDWEISER</h3>
                                <div className="exampleTitleGrey">Harry Caray’s Last Call</div>
                                <div>Capitalize on a once-in-a-lifetime moment to celebrate a historic win in the most memorable way possible.</div>
                            </div>
                        </div>
                        <div className="exampleTwo">
                            <div className="exampleTwoImage"></div>
                            <div className="exampleTwoDetails">
                                <h3 className="exampleTitle">StainMaster</h3>
                                <div className="exampleTitleGrey">STAINMASTER® Carpet Care Scares Up Sales</div>
                                <div>Drive awareness and trial of STAINMASTER carpet care products nationally to establish the STAINMASTER brand as a top 3 brand in the category.</div>
                            </div>
                        </div>
                    </div> */}
                    {/* <div className="moreExamplesLink"><a>There's Plenty More</a></div>
                </div> */}
                {/* <div className="clientsList">
                    <div className="clientListTitle">SOME OF OUR CLIENTS</div>
                    <div className="clientLogoList">
                        <img src="https://s3.amazonaws.com/vm.com-2017/wp-content/uploads/2017/02/15192659/ABInBev.png"/>
                        <img src="https://s3.amazonaws.com/vm.com-2017/wp-content/uploads/2017/02/15192700/Chase.png"/>
                        <img src="https://s3.amazonaws.com/vm.com-2017/wp-content/uploads/2017/02/15204345/GE2.png"/>
                        <img src="https://s3.amazonaws.com/vm.com-2017/wp-content/uploads/2017/02/15192703/DIAGEO.png"/>
                        <img src="https://s3.amazonaws.com/vm.com-2017/wp-content/uploads/2017/02/15204353/usa2.png"/>
                        <img src="https://s3.amazonaws.com/vm.com-2017/wp-content/uploads/2017/02/15192712/Mondelez.png"/>
                        <img src="https://s3.amazonaws.com/vm.com-2017/wp-content/uploads/2017/02/15192713/PepsiCo.png"/>
                        <img src="https://s3.amazonaws.com/vm.com-2017/wp-content/uploads/2017/02/07212853/syfyLogo.png"/>
                        <img src="https://s3.amazonaws.com/vm.com-2017/wp-content/uploads/2017/02/15204349/Toyota2.png"/>
                        <img src="https://s3.amazonaws.com/vm.com-2017/wp-content/uploads/2017/02/15192724/Turner.png"/>
                        <img src="https://s3.amazonaws.com/vm.com-2017/wp-content/uploads/2017/02/15204351/Unilever2.png"/>
                        <img src="https://s3.amazonaws.com/vm.com-2017/wp-content/uploads/2017/02/15192710/Johnsons.png"/>
                    </div>
                </div> */}
                <div className="servicesList">
                    <div className="serviceListTitle">OUR SERVICES</div>
                    <div className="serviceLogoList">
                        <div>
                            <img src="https://s3.amazonaws.com/vm.com-2017/wp-content/uploads/2017/02/10202130/creative-icon.png"/>
                            <div>Creative</div>
                        </div>
                        <div>
                            <img src="https://s3.amazonaws.com/vm.com-2017/wp-content/uploads/2017/02/10202353/paid-media-icon.png"/>
                            <div>Paid Media</div>
                        </div>
                        <div>
                            <img src="https://s3.amazonaws.com/vm.com-2017/wp-content/uploads/2017/02/10202349/influencers-icon.png"/>
                            <div>Influencers</div>
                        </div>
                        <div>
                            <img src="https://s3.amazonaws.com/vm.com-2017/wp-content/uploads/2017/02/16001720/vsmart.png"/>
                            <div>VaynerSmart</div>
                        </div>
                        <div>
                            <img src="https://s3.amazonaws.com/vm.com-2017/wp-content/uploads/2017/02/10202344/ecom-icon.png"/>
                            <div>Ecommerce</div>
                        </div>
                        <div>
                            <img src="https://s3.amazonaws.com/vm.com-2017/wp-content/uploads/2017/02/10202401/solutions-icon.png"/>
                            <div>VaynerSolutions</div>
                        </div>
                        <div>
                            <img src="https://s3.amazonaws.com/vm.com-2017/wp-content/uploads/2017/02/10202405/talent-icon.png"/>
                            <div>VaynerTalent</div>
                        </div>
                        <div>
                            <img src="https://s3.amazonaws.com/vm.com-2017/wp-content/uploads/2017/02/16194438/beta-4.png"/>
                            <div>VaynerBeta</div>
                        </div>
                    </div>
                    <div className="exploreServices"><a>Explore Services</a></div>
                </div>
                <div className="contactForm" id="becomeAClient">
                    <div className="formTitle">WORK WITH US</div>
                    <fieldset id="group1">
                        <div className="group1">
                            <div className="group1Title">Tell us what you're looking for: *</div>
                            <div className="formRow1">
                                <div>
                                    <input type="radio" name="group1" value="explore"/>I'd like to explore working with VaynerMedia.
                                </div>
                                <div>
                                    <input type="radio" name="group1" value="press"/>I have a press inquiry for VaynerMedia.
                                </div>
                                <div>
                                    <input type="radio" name="group1" value="brand"/>I'd like to grow my personal brand.
                                </div>
                            </div>
                        </div>
                    </fieldset>
                    <fieldset id="group2">
                        <div className="group2">
                            <div>
                                <input type="radio" name="group1" value="buisness"/>I'm a small/medium-sized business owner/manager and want help driving growth.
                            </div>
                            <div>
                                <input type="radio" name="group1" value=""/>I'm interested in your <span>one-day digital consulting & immersion session</span>.
                            </div>
                            <div>
                                <input type="radio" name="group1" value=""/>Other
                            </div>
                        </div>
                    </fieldset>
                    <div className="formInputContainer">
                        <div className="formInputLeft">
                            <div>NAME: <span>*</span></div>
                            <input required type="text" className="normalInput"/>
                            <div>COMPANY: <span>*</span></div>
                            <input required type="text" className="normalInput"/>
                            <div>TELL US ABOUT THE TASK AT HAND: <span>*</span></div>
                            <input required type="text" className="bert"/>
                        </div>
                        <div className="formInputLeft">
                            <div>EMAIL: <span>*</span></div>
                            <input required type="text" className="normalInput"/>
                            <div>PHONE NUMBER: <span>*</span></div>
                            <input required type="text" className="normalInput"/>
                        </div>
                    </div>
                    <div className="emailList">
                        <input type="checkbox"/>
                        <div><span>* </span> Yes, I'd also like to receive information about additional products or services that may be of interest to me. Information submitted <br/>through this form is subject to our Privacy Policy</div>
                    </div>
                    <div className="formSubmit">Submit</div>
                </div>
                <Footer/>
            </div>
        )
    }
}