import React, { Component } from 'react';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import AboutUs from './Components/AboutUs/AboutUs';
import {HashRouter, Route} from 'react-router-dom';
import OurTeam from './Components/OurTeam/OurTeam';
import OurImpact from './Components/OurImpact/OurImpact'
class App extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <Route exact path="/" component={Home}/>
          <Route path="/aboutus" component={AboutUs}/>
          <Route path="/ourteam" component={OurTeam}/>
          <Route path="/ourimpact" component={OurImpact}/>
        </div>
    </HashRouter>
    );
  }
}

export default App;
