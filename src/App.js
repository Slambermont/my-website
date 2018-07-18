import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './css/index.css'
import Home from './pages/home.jsx'
import Info from './pages/info.jsx'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path='/' component={Home}/>
          <Route path='/about' component={Info}/>
        </div>
      </Router>
    );
  }
}

export default App;
