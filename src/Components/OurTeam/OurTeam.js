import React , {Component} from 'react';
import Header from '../Header/Header';
import SecondFooter from '../SecondFooter/SecondFooter';
import './OurTeam.css'


export default class OurTeam extends Component{
    render(){
        return(
            <div className="OurTeam">
                <Header/>
                <div className="ourTeamContainer">
                    <div className="kevinContainer">
                        <div className="kevinPic"></div>
                        <div className="kevinText">
                            <div className="kevinName">Kevin Kim</div>
                            <div className="kevinPosition">Founder</div>
                        </div>
                    </div>
                    <div className="frankContainer">
                        <div className="frankPic"></div>
                        <div className="frankText">
                            <div className="frankName">Frank Pellino</div>
                            <div className="frankPosition">Public Relations Mananger</div>
                            <div className="frankQuote">"Here at Gold Media we are goal-oriented and will assist you with every aspect of your business. I love helping companies make the transition in making an online presence and continuing it's growth within it. We custom tailor every marketing campaign to fit exactly what story they are trying to tell."</div>
                        </div>
                    </div>
                    <div className="gavinContainer">
                        <div className="gavinPic"></div>
                        <div className="gavinText">
                            <div className="gavinName">Gavin Salazar</div>
                            <div className="gavinPosition">Account Mananger</div>
                            <div className="gavinQuote">"Here at Gold Media we are goal-oriented and will assist you with every aspect of your business. I love helping companies make the transition in making an online presence and continuing it's growth within it. We custom tailor every marketing campaign to fit exactly what story they are trying to tell."</div>
                        </div>
                    </div>
                    <div className="wooContainer">
                        <div className="wooPic"></div>
                        <div className="wooText">
                            <div className="wooName">Woosung Lee</div>
                            <div className="wooPosition">Lead Developer</div>
                            <div className="wooQuote">"Here at Gold Media we are goal-oriented and will assist you with every aspect of your business. I love helping companies make the transition in making an online presence and continuing it's growth within it. We custom tailor every marketing campaign to fit exactly what story they are trying to tell."</div>
                        </div>
                    </div>
                    <div className="anthonyContainer">
                        <div className="anthonyPic"></div>
                        <div className="anthonyText">
                            <div className="anthonyName">Anthony Bartole</div>
                            <div className="anthonyPosition">Logistics & Amazon Specialist</div>
                            <div className="anthonyQuote">"Here at Gold Media we are goal-oriented and will assist you with every aspect of your business. I love helping companies make the transition in making an online presence and continuing it's growth within it. We custom tailor every marketing campaign to fit exactly what story they are trying to tell."</div>
                        </div>
                    </div>
                </div>  
                <SecondFooter/> 
            </div>
        )
    }
}