import React, { Component } from 'react';
import './App.css';
import Nav from '../Nav/Nav';
import {HashRouter as Router, Route} from 'react-router-dom';
import Photos from '../Photos/Photos';

class App extends Component {
  render() {
    return (
      <div className="App">
       <Nav />
       <Router>
         <Route path="/photos" component={Photos} />
       </Router>

      </div>
    );
  }
}

export default App;
