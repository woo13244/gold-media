import React , {Component} from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
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
                    <div className="emilyContainer">
                        <div className="emilyPic"></div>
                        <div className="emilyText">
                            <div className="emilyName">Emily Cho</div>
                            <div className="emilyPosition">Content Manager</div>
                            <div className="emilyQuote">"Here at Gold Media we are goal-oriented and will assist you with every aspect of your business. I love helping companies make the transition in making an online presence and continuing it's growth within it. We custom tailor every marketing campaign to fit exactly what story they are trying to tell."</div>
                        </div>
                    </div>
                </div>  
                <Footer/> 
            </div>
        )
    }
}