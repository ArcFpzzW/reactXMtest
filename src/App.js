import React from 'react';
import Home from './components/home/home'
import Second from './components/second/second'
import Third from './components/third/third'
import User from './components/user/user'

import './App.css';
import {BrowserRouter as Router,Route,Redirect } from 'react-router-dom'
function App() {
  return (
    <Router>
      <div className="App">
      {/* <Redirect from="/" to="/home" exact /> */}
         <Route path="/home" component={Home} />
         <Route path="/second" component={Second} />
         <Route path="/third" component={Third} />
         <Route path="/user" component={User} />
          
      </div>
    </Router>
  );
}

export default App;
