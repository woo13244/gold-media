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
                    <div className="ourImpactContent">
                        <div className="howTitle">How we Work</div>
                        <div className="wpx1"><p>BUILD YOUR BRAND</p><br/>Now more than ever, companies can tell their story about a product/service to their target market. Good story telling combined with exceptional content will help brands grow beyond measures. We evaluate a brand’s current presence and recommend enhancements, or set it up from scratch with the publisher networks that will create a new revenue stream for their business—all while optimizing along the way for growth.</div>
                        <div className="wpx1"><p>CONTENT</p><br/>Our team builds and executes holistically-informed strategies where influencers produce and share branded assets, passing equity from their passionate, opt-in audiences to our clients. We deliver a blueprint on how to build awareness and equity around your passions, stories, and skills in a way that elevates the demand and size of future business opportunities.</div>
                        <div className="wpx1"><p>CONSULTING</p><br/>We are a strategy and operations consultancy. If you’re good, we can help you get great. If you’re just starting a new initiative, we will show you the way. Our team is a full-service digital agency that lets you imagine, build, test and launch new business and digital marketing models that will succeed.</div>
                    </div>
                </div>
                <SecondFooter/>
            </div>
        )
    }
}