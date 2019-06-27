import React from 'react';
import Home from './components/home/home'
import Second from './components/second/second'
import Third from './components/third/third'
import User from './components/user/user'
import Luck from './components/user/Luck'
import Homedetal from './components/home/homedetal'
import './App.css';
import {BrowserRouter as Router,Route,Redirect,Switch } from 'react-router-dom'
function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
         <Route path="/home" component={Home} />
         <Route path="/second" component={Second}  />
         <Route path="/third" component={Third} />
         <Route path="/user" component={User}  />
         <Route path="/luck" component={Luck} />
         <Route path="/homedetal" component={Homedetal} />
         <Route path="/" component={Home}  exact/>
         </Switch>
      </div>
    </Router>
  );
}

export default App;
