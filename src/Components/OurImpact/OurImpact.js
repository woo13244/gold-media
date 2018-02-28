import React , {Component} from 'react'
import Header from '../Header/Header';
import SecondFooter from '../SecondFooter/SecondFooter';
import './OurImpact.css';


export default class OurImpact extends Component{
    render(){
        return(
            <div className="OurImpact">
                <Header/>
                <div className="ourImpactContainer">
                    <div className="ourImpactVideo">
                        <div>How are you<br/> telling your story?</div>
                    </div>
                    <div class="ourImpactContent">
                        <div class="howTitle">[OUR IMPACT]</div>
                        <div class="ourImpactText"><span>Are you having trouble drawing traffic to your business? We’ve got you covered!</span>
                        <br/>
                        <span style={{color: 'black', marginBottom: 30}}>Multiply your Business’ Facebook Traffic.</span>
                        <br/>
                        GoldMedia is a fully integrated digital marketing agency that  that specializes in converting clicks into customers by implementing our proprietary Facebook Ad Strategies. Our clients have seen SIGNIFICANT leaps in their sales volume while mitigating their ad spend costs. By fully integrating and optimizing your Facebook Ad Campaigns on an ongoing basis, we’ll unlock the unlimited potential of paid media advertising. With more than 2 billion Facebook users worldwide, and over 100 million hours of videos watched daily, Facebook has
                        </div>
                        <p className='ourImpactText' style={{marginBottom: 75}}>With more than 2 billion Facebook users worldwide, and over 100 million hours of videos watched daily, Facebook has created a tremendous platform for any business to reach their audiences and deliver your compelling brand.</p>
                        <div style={{color: 'gold', textAlign: 'center', fontSize: 45, fontWeight: 'bolder', textShadow: '-1px 0 black, 0 2px black, 1px 0 black, 0 -1px black', marginBottom: 15}}>What can we do for you...</div>
                        <div style={{color: 'rgb(88, 88, 88)', fontSize: 23, textAlign: 'center',fontWeight: 'bold'}}>Are you ready to unlock the full potential of social media advertising for the longevity of your business? Social media is the best way to engage with your potential customers.  Over 70% of Americans use Facebook and over 100 million hours of videos are watched DAILY. This type of exposure for your business was IMPOSSIBLE before Facebook Ads. Visually stimulating content combined with a Targeted Facebook Campaign will draw traffic to your business. And with this in place we can create an effective sales funnel and an email marketing campaign that draws the passive buyers back in! We can take your business to the moon!</div>
                        <img src="https://s3.amazonaws.com/vm.com-2017/wp-content/uploads/2017/02/16194438/beta-4.png" style={{width: 200, margin: '20px auto auto',}}/>
                        <div style={{fontSize: 22, textAlign: 'center', marginTop: 15, fontWeight: 'bolder', color : 'black'}}>GOLD MEDIA</div>
                        <div style={{color: 'gold', textAlign: 'center', fontSize: 45, textShadow: '-1px 0 black, 0 2px black, 1px 0 black, 0 -1px black', fontWeight: 'bolder', marginTop: 35, marginBottom: 20}}>How can we do it?</div>
                        <div style={{fontSize: 35, textAlign: 'left', color: 'black', fontWeight: 'bolder', textDecoration: 'underline',}}>STEP 1: Paid Media</div>
                        <div style={{margin: 'auto',}}>
                        <div style={{fontSize: 25, textAlign: 'left', }}>We create a targeted Facebook marketing campaign tailored just for your business. Whether it’s for a brand awareness or lead generation campaign, it will be optimized to get more for your ad spend dollar from start to finish, with our team at Gold Media. </div>
                            <div className="stepOneFacebook">
                                <img src="https://eightdigitmedia.com/wp-content/uploads/2017/08/facebook-1.png" style={{width: 150, height: 150, marginRight: 25, }}/>
                                <div>
                                    <div style={{fontSize: 30, textAlign: 'center', color: 'black', fontWeight: 'bolder',}}>Facebook Ads</div>
                                    <div style={{fontSize: 25, textAlign: 'center', marginBottom: 25,}}>We curate custom tailored ads to increase your brand awareness on Facebook. Ads do best when the content is visually stimulating, engaging and native. Our Ad strategies draw consumers in and keep them wanting more.</div>
                                </div>
                            </div>
                            <div className="stepOneFacebook">
                                <div className="instagramPicture" ></div>
                                <div>
                                    <div style={{fontSize: 30, textAlign: 'center', color: 'black', fontWeight: 'bolder', }}>Instagram Ads</div>
                                    <div style={{fontSize: 25, textAlign: 'center', marginBottom: 25,}}>We create Instagram story campaigns that send high-quality traffic to your landing page to convert to sales and leads.</div>
                                </div>
                            </div>
                            <div className="stepOneFacebook">
                                <img  style ={{marginRight: 20, width: 150, height: 150}}src="data:image/png;base64,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"/>
                                <div>
                                    <div style={{fontSize: 30, textAlign: 'center', color: 'black', fontWeight: 'bolder', }}>Retargeting</div>
                                    <div style={{fontSize: 25, textAlign: 'center', marginBottom: 25,}}>Retargeting creates greater online sales by keeping your brand and company in the consumers eyes and bringing “passive shoppers” back when they’re ready to buy.</div>
                                </div>
                            </div>
                        </div>
                        <div className='stepTwo'>
                            <div style={{fontSize: 35, textAlign: 'left', color: 'black', fontWeight: 'bolder', textDecoration: 'underline', marginTop: 30}}>STEP 2: Sales Funnel</div>
                            <div className="stepTwoText">
                                <img src="https://i.pinimg.com/736x/8c/dc/59/8cdc59b4b7e52e4743598a8813f740ea.jpg" style={{width: 200, margin:'auto'}}/>
                                <div style={{textAlign: 'center', fontSize: 25,}}>We will integrate a seamless landing page with a call to action that will entice consumers to take action with your business. A read magnet combined with a one time offer to persuade your buyer to take action!</div>
                            </div>
                        </div>
                        <div className='stepTwo'>
                            <div style={{fontSize: 35, textAlign: 'left', color: 'black', fontWeight: 'bolder', textDecoration: 'underline', marginTop: 30}}>STEP 3: Email Marketing</div>
                            <div className="stepTwoText">
                                <img src="http://www.dennodigital.com/wp-content/uploads/2017/12/17.png" style={{width: 200, margin:'auto'}}/>
                                <div style={{textAlign: 'center', fontSize: 25,}}>It is important to follow up with the potential customers that were initially interested in your business but didn’t act on it. We will create an Email marketing campaign to attract the potential customers that walked away!</div>
                            </div>
                        </div>
                    </div>
                    <div className="ourImpactChecks">                            
                        <div style={{color: 'white', fontSize: 30, fontWeight: 'bold', margin: 'auto', textDecoration: 'underline'}}><span aria-hidden="true" class="fa fa-fas fa-check fa-lg" style={{color: 'rgb(2, 164, 196)',}}></span>We Work Together</div>
                        <div style={{fontSize: 25, textAlign: 'center', marginBottom: 25,color: 'white'}}>Everything is ran by you before we publish anything. We mutually agree on a strategy and you can approve all deliverables. You will be able to work with us in a seamless manner that requires little to no effort from your side.</div>
                        <div style={{color: 'white', fontSize: 30, fontWeight: 'bold', margin: 'auto', textDecoration: 'underline'}}><span aria-hidden="true" class="fa fa-fas fa-check fa-lg" style={{color: 'rgb(2, 164, 196)',}}></span>No Contracts</div>
                        <div style={{fontSize: 25, textAlign: 'center', marginBottom: 25, color: 'white'}}>Cancel anytime with a 21-day electronic or written notice. Our services are backed with high integrity and want to earn your trust by yielding results.</div>
                        <div style={{color: 'white', fontSize: 30, fontWeight: 'bold', margin: 'auto', textDecoration: 'underline'}}><span aria-hidden="true" class="fa fa-fas fa-check fa-lg" style={{color: 'rgb(2, 164, 196)',}}></span>Get More For Your Dollar</div>
                        <div style={{fontSize: 25, textAlign: 'center', margin: 'auto', width: '80%', color: 'white'}}>Let us optimize your campaigns to mitigate ad spend dollars. We charge a retainer to work with you and allocate all ad spend dollars toward your business’ campaigns. </div>
                    </div>
                </div>
                <SecondFooter/>
            </div>
        )
    }
}