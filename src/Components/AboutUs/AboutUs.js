import React , {Component} from 'react';
import Header from '../Header/Header';
import SecondFooter from '../SecondFooter/SecondFooter'
import './AboutUs.css'

export default class AboutUs extends Component{
    constructor(){
        super()
        this.state={
            aboutUsToggle: true
        }
    }
    render(){
        return(
            <div className="AboutUs">
                <Header />
                <div className="aboutusContent" style={{marginTop: '60px'}}>
                    <div className="aboutusVideoOne">
                        <div className="aboutusVideoOneText">We Create Brand <br/>Value</div>
                    </div>
                    <div className="aboutusTextContainer">
                        <div className="aboutusText">
                            <div className="missionTitle">Whats our mission?</div>
                            <div>We partner with brands to create an online presence for what works now. Social media is an innovative game-changing business tool to directly scale and reach your target audiences. We custom tailor your social media marketing campaigns to fit your target market and audience. Our mission is to drive brand awareness through creative content and direct marketing strategies. We place ads in front of consumers that want to see your ad. We can track every single dollar spent on our advertising strategies to mitigate ad spend: GET MORE FOR YOUR AD SPEND DOLLAR WITH US. We have unparalleled experience in Facebook Marketing and specialize in turning clicks into customers! Let Gold Media help you integrate paid media advertising to your business.</div>
                            <div className="goalsTitle">Goals</div>
                            <div>Our goal is to help brands assimilate to what works today. Outdated methods of advertising such as newspaper, radio, billboard, television ads yield results but can you track it?<br/><br/>With paid media (Facebook/Instagram) advertisements we can track every Ad dollar spent and optimize your campaigns to decrease wasted ad spend! Paid media advertising allows us to mitigate your ad spend dollars and get the most for your buck! Our goal is to place your brand/business where your target audiences are: through targeted social media marketing. </div></div>
                            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                            <div className="aboutUsToggleButton" onClick={()=>{this.setState({aboutUsToggle: true})}}>SAVE MONEY AND PRODUCE RESULTS</div>
                            <div style={{width: 2, height: 25, backgroundColor: 'grey', margin: '0 10px 0 10px'}}></div>
                            <div className="aboutUsToggleButton" onClick={()=>{this.setState({aboutUsToggle: false})}}>WHY YOU NEED DIGITAL MARKETING</div>
                            </div>
                            <div className={this.state.aboutUsToggle ? 'aboutUsToggle1' : 'aboutUsOff'}>
                                <div style={{width: '60%'}}>
                                    <div style={{textAlign: 'left', fontSize: 18, color: 'charcoal', fontWeight: 'bold'}}>Optimizing your social media marketing for conversions</div>
                                    <div style={{textAlign: 'left', fontSize: 16}}>Our social media management services save businesses money and yield greater results. Our company specializes in Facebook & Instagram marketing that is integrated with an effective sales funnel. Our previous works show that our company knows how to optimize your social media channels to fulfill your marketing goals. We turn clicks into customers by integrating facebook ads with visually stimulating creative content.  Whether your business is in E-commerce, real estate, small businesses, consumer products, or nonprofits, our social media management services position your business for success. </div>
                                </div>
                                <div>
                                    <img src="https://foundr.com/wp-content/uploads/2015/12/download.png" style={{width: 300, }}/>
                                </div>
                                <div style={{fontSize: 20, textAlign: 'center', marginTop: 30, fontWeight: 'bolder', marginBottom: 50}}>Our proprietary marketing strategies produce REAL RESULTS driving, qualified traffic to our clients’ websites and store fronts.</div>
                            </div>
                            <div className={this.state.aboutUsToggle ? 'aboutUsOff' : 'aboutUsToggle'}>
                                <div className="aboutUsToggleTitles">Your consumers are on social media. (Facebook especially)</div>
                                <div className='aboutUsToggleText' >Regardless of what industry your company is in, your consumers are using social media on a daily basis. It is essential that you keep your potential customers engaged and connected to your brand so that you’re always their first option. </div>
                                <div className='aboutUsToggleTitles'>There are people searching for your company</div>
                                <div className='aboutUsToggleText'>If your company is offering a product or service, you can assume consumers will look for the best product or service among the immense competition. Our digital marketing service will help your business to generate qualified leads for your business. </div>
                                <div className='aboutUsToggleTitles'>People are talking about your comapny on social media.</div>
                                <div className='aboutUsToggleText'>You need to listen closely to what your consumers are commenting about your company online. It is imperative that your business responds to the concerns of your customers on Social Media. The end goal is to keep your customers happy. Our digital marketing service will help show only the positive aspects of your business and help mitigate negative concerns!</div>
                                <div className='aboutUsToggleTitles'>Companies NEED expert social media management.</div>
                                <div className='aboutUsToggleText1'> Most business owners do not have the time nor the knowledge to run an on-going Social media marketing campaign. Let us at Gold Media Marketing help you optimize your ads to get the most for your ad spend dollar. </div>
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
                <SecondFooter/>
            </div>
        )
    }
}