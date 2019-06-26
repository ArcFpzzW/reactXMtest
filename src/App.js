import React from 'react';
import Home from './components/home/home'
import Second from './components/second/second'
import Third from './components/third/third'
import User from './components/user/user'
import Luck from './components/user/Luck'
import './App.css';
import {BrowserRouter as Router,Route,Redirect,Switch } from 'react-router-dom'
function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
         <Route path="/home" component={Home}  exact/>
         <Route path="/second" component={Second} exact />
         <Route path="/third" component={Third}  exact/>
         <Route path="/user" component={User}  exact/>
         <Route path="/luck" component={Luck}  exact/>
         <Route path="/" component={Home}  exact/>
         </Switch>
      </div>
    </Router>
  );
}

export default App;
