import React, {Component} from 'react';
import Header from '../Header/Header';
import './Home.css';
import FontAwesome from 'react-fontawesome';
import {Helmet} from 'react-helmet';
import SecondFooter from '../SecondFooter/SecondFooter';
import axios from 'axios';
import {Link} from 'react-router-dom'



export default class Home extends Component{
    constructor(){
        super()
        this.state={
            name: '',
            number: '',
            email: '',
            exploreServices: false
        }
    }
    exploreServices(){
        this.setState({
            exploreServices: true
        })
    }
    submitForm(){
        axios.post('/submitform', {
            name: this.state.name,
            number: this.state.number,
            email: this.state.email
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
                    <div className="homeVideoText">We are a fully integrated, results-driven digital marketing agency converting clicks into customers. We partner with clients & brands to achieve their business goals with our proprietary <span>Facebook targeting strategies, content creatives, brand awareness </span> & <span>development</span>, and<span> everything in between.</span></div>
                    <div className="homeVideoLink"><Link to='/#becomeAClient' onClick={()=>{this.setState({exploreServices : !this.state.exploreServices})}}>Become A Client</Link></div>
                    <div className="homeArrow"><FontAwesome name=" fa fa-caret-down fa-2x" style={{color: 'white'}}/></div>
                </div>
                <div className="servicesList">
                    <div className="serviceListTitle">OUR SERVICES</div>
                    <div className="serviceLogoList">
                        <div>
                            <img src="https://s3.amazonaws.com/vm.com-2017/wp-content/uploads/2017/02/10202130/creative-icon.png"/>
                            <div style={{textAlign: 'center'}}>Content<br/>Creatives</div>
                        </div>
                        <div>
                            <img src="https://s3.amazonaws.com/vm.com-2017/wp-content/uploads/2017/02/10202353/paid-media-icon.png"/>
                            <div style={{textAlign: 'center'}}>Facbook<br/>Advertising</div>
                        </div>
                        <div>
                            <img src="https://s3.amazonaws.com/vm.com-2017/wp-content/uploads/2017/02/10202349/influencers-icon.png"/>
                            <div style={{textAlign: 'center'}}>Influencer<br/>Marketing</div>
                        </div>
                        <div>
                            <img src="https://s3.amazonaws.com/vm.com-2017/wp-content/uploads/2017/02/16001720/vsmart.png"/>
                            <div style={{textAlign: 'center'}}>Email<br/>Marketing</div>
                        </div>
                        <div>
                            <img src="https://s3.amazonaws.com/vm.com-2017/wp-content/uploads/2017/02/10202344/ecom-icon.png"/>
                            <div>Ecommerce</div>
                        </div>
                        <div>
                            <img src="https://s3.amazonaws.com/vm.com-2017/wp-content/uploads/2017/02/10202401/solutions-icon.png"/>
                            <div style={{textAlign: 'center'}}>Sales<br/>Funnel</div>
                        </div>
                        <div>
                            <img src="https://s3.amazonaws.com/vm.com-2017/wp-content/uploads/2017/02/10202405/talent-icon.png"/>
                            <div style={{textAlign: 'center'}}>Brand<br/>Awareness</div>
                        </div>
                        <div>
                            <img src="https://s3.amazonaws.com/vm.com-2017/wp-content/uploads/2017/02/16194438/beta-4.png"/>
                            <div style={{textAlign: 'center'}}>Paid<br/>Media</div>
                        </div>
                    </div>
                    <Link to="/ourimpact"className="exploreServices"><div className="exploreServicesText">Explore Services</div></Link>
                </div>
                {/* <div className="homeVideo2">
                    <div className="homeVideoText2">A Fully Integrated Digital Marketing Agency Built for Today</div>
                </div> */}
                <div className={this.state.exploreServices ? "infoPopUp" : "infoPopUpOff"}>
                    <div className="infoFormContainer">
                        <div className="infoFormTitle">Contact Us</div>
                        <form>
                            <div onChange={(e)=>{this.setState({name: e.target.value})}}>Name: <input type="text" required/></div>
                            <div onChange={(e)=>{this.setState({email: e.target.value})}}>Email: <input type="text" required/></div>
                            <div onChange={(e)=>{this.setState({number: e.target.value},()=>{console.log(this.state)})}}>Number: <input type="text"required/></div>
                            <div className="infoFormButtons" style={{display: "flex", }}>
                                <button onClick={()=>{this.submitForm()}}>Submit</button>
                                <button onClick={()=>{this.setState({exploreServices: !this.state.exploreServices})}}>Cancel</button>
                            </div>
                        </form>
                    </div>
                </div>
                <SecondFooter/>
            </div>
        )
    }
}