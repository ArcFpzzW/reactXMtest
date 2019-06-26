import React from 'react';
import Home from './components/home/home'
import Second from './components/second/second'
import Third from './components/third/third'
import User from './components/user/user'
import Luck from './components/user/Luck'
import './App.css';
import {BrowserRouter as Router,Route,Switch,Link,Redirect } from 'react-router-dom'
function App() {
  return (
    <Router>
      <div className="App">
      
         <Route path="/home" component={Home} />
         <Route path="/second" component={Second} />
         <Route path="/third" component={Third} />
         <Route path="/user" component={User} />
         <Route path="/luck" component={Luck} />
         <Redirect from="/" to="/home" exact />
      </div>
    </Router>
  );
}

export default App;
