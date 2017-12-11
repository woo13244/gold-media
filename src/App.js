import React, { Component } from 'react';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home'
import {HashRouter, Route} from 'react-router-dom'
class App extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <Route exact path="/" component={Home}/>
        </div>
    </HashRouter>
    );
  }
}

export default App;
