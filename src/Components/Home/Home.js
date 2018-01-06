import React, {Component} from 'react';
import Header from '../Header/Header';
import './Home.css';
import FontAwesome from 'react-fontawesome';
import {Helmet} from 'react-helmet';
import SecondFooter from '../SecondFooter/SecondFooter';
import axios from 'axios';
import {HashLink as Slink} from 'react-router-hash-link'
export default class Home extends Component{
    constructor(){
        super()
        this.state={
            subject: '',
            name: '',
            company: '',
            email: '',
            phone: '',
            task: '',
            emailList: false
        }
    }
    radioButton(x){
        this.setState({
            subject: x
        },()=>{
            console.log(this.state.subject)
        })
    }

    submitForm(){
        axios.post('/submitform', {
            subject: this.state.subject,
            name: this.state.name,
            company: this.state.company,
            email: this.state.email,
            phone: this.state.phone,
            task: this.state.task,
            emailList: this.state.emailList
        },()=>{'posted on client side'})
    }
    render(){
        return(
            <div className="Home">
                <Helmet>
                    <title>Gold Media</title>
                </Helmet>
                <Header/>
                <div className="homeVideo">
                    <div className="homeVideoText">We are a fully integrated, results-driven digital marketing agency built for the now. We partner with clients & brands to achieve their business goals with best-in-class <span>social media planning / distribution, influencer marketing, marketing</span> & <span>brand development</span>, and<span> everything in between.</span></div>
                    <div className="homeVideoLink"><Slink to='/#becomeAClient'>Become A Client</Slink></div>
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
                            <div>FacbookAdvertising</div>
                        </div>
                        <div>
                            <img src="https://s3.amazonaws.com/vm.com-2017/wp-content/uploads/2017/02/10202349/influencers-icon.png"/>
                            <div>Influencers</div>
                        </div>
                        <div>
                            <img src="https://s3.amazonaws.com/vm.com-2017/wp-content/uploads/2017/02/16001720/vsmart.png"/>
                            <div>WebDevelopment</div>
                        </div>
                        <div>
                            <img src="https://s3.amazonaws.com/vm.com-2017/wp-content/uploads/2017/02/10202344/ecom-icon.png"/>
                            <div>Ecommerce</div>
                        </div>
                        <div>
                            <img src="https://s3.amazonaws.com/vm.com-2017/wp-content/uploads/2017/02/10202401/solutions-icon.png"/>
                            <div>AmazonSolutions</div>
                        </div>
                        <div>
                            <img src="https://s3.amazonaws.com/vm.com-2017/wp-content/uploads/2017/02/10202405/talent-icon.png"/>
                            <div>GoldTalent</div>
                        </div>
                        <div>
                            <img src="https://s3.amazonaws.com/vm.com-2017/wp-content/uploads/2017/02/16194438/beta-4.png"/>
                            <div>GoldBeta</div>
                        </div>
                    </div>
                    <div className="exploreServices"><Slink to="/#becomeAClient">Explore Services</Slink></div>
                </div>
                <div className="contactForm" id="becomeAClient">
                    <div className="formTitle">WORK WITH US</div>
                    <fieldset id="group1">
                        <div className="group1">
                            <div className="group1Title">Tell us what you're looking for: *</div>
                            <div className="formRow1">
                                <div>
                                    <input type="radio" name="group1" value="explore" onClick={()=>{this.radioButton("I'd like to explore working with GoldMedia")}}/>I'd like to explore working with GoldMedia.
                                </div>
                                <div>
                                    <input type="radio" name="group1" value="press" onClick={()=>{this.radioButton("I have a press inquiry for GoldMedia")}}/>I have a press inquiry for GoldMedia.
                                </div>
                                <div>
                                    <input type="radio" name="group1" value="brand" onClick={()=>{this.radioButton("I'd like to grow my personal brand")}}/>I'd like to grow my personal brand.
                                </div>
                            </div>
                        </div>
                    </fieldset>
                    <fieldset id="group2">
                        <div className="group2">
                            <div>
                                <input type="radio" name="group1" value="buisness" onClick={()=>{this.radioButton("I'm a small/medium-sized business owner/manager and want help driving growth.")}}/>I'm a small/medium-sized business owner/manager and want help driving growth.
                            </div>
                            <div>
                                <input type="radio" name="group1" value="consulting" onClick={()=>{this.radioButton("I'm interested in your one-day digital consulting & immersion session")}}/>I'm interested in your <span>one-day digital consulting & immersion session</span>.
                            </div>
                            <div>
                                <input type="radio" name="group1" value="other" onClick={()=>{this.radioButton("Other")}}/>Other
                            </div>
                        </div>
                    </fieldset>
                    <div className="formInputContainer">
                        <div className="formInputLeft">
                            <div>NAME: <span>*</span></div>
                            <input required type="text" className="normalInput" onChange={(e)=>{this.setState({name : e.target.value},()=>{console.log(this.state.name)})}}/>
                            <div>COMPANY: <span>*</span></div>
                            <input required type="text" className="normalInput" onChange={(e)=>{this.setState({company : e.target.value},()=>{console.log(this.state.company)})}}/>
                            <div>TELL US ABOUT THE TASK AT HAND: <span>*</span></div>
                            {/* {<input required type="text" className="bert" onChange={(e)=>{this.setState({task : e.target.value},()=>{console.log(this.state.task)})}}/>} */}
                            <textarea name="input_20" id="input_2_20" class="textarea medium" className="bert" aria-invalid="false" rows="10" cols="50"></textarea>
                            {/* <textarea rows="4" cols="50" wrap='soft' className='bert' onChange={(e)=>{this.setState({task : e.target.value},()=>{console.log(this.state.task)})}}></textarea> */}
                        </div>
                        <div className="formInputLeft">
                            <div>EMAIL: <span>*</span></div>
                            <input required type="text" className="normalInput" onChange={(e)=>{this.setState({email : e.target.value},()=>{console.log(this.state.email)})}}/>
                            <div>PHONE NUMBER: <span>*</span></div>
                            <input required type="text" className="normalInput" onChange={(e)=>{this.setState({phone : e.target.value},()=>{console.log(this.state.phone)})}}/>
                        </div>
                    </div>
                    <div className="emailList">
                        <input type="checkbox" onClick={()=>{this.setState({emailList: !this.state.emailList},()=>{console.log(this.state.emailList)})}}/>
                        <div><span>* </span> Yes, I'd also like to receive information about additional products or services that may be of interest to me. Information submitted <br/>through this form is subject to our Privacy Policy</div>
                    </div>
                    <div className="formSubmit" onClick={()=>{this.submitForm()}}>Submit</div>
                </div>
                <SecondFooter/>
            </div>
        )
    }
}