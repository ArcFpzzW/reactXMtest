import React,{Component} from 'react'

import {Route,Redirect} from "react-router-dom"
import Starts from './fortune/startS'
import Lucks from './fortune/luckS'

export default class Luck extends Component{
    goStarts(){
        this.props.history.push("/luck/starts")
    }
    goLucks(){
        this.props.history.push("/luck/lucks")
    }
    goUser(){
        this.props.history.push("/user")
    }
    render(){
        return <div>
           
            <div>
            <button onClick={this.goUser.bind(this)}>返回</button>
            </div>
            <div className="luck_Box">
                <div className="star_Box" onClick={this.goStarts.bind(this)}>
                    <span >今日份星座运势</span>
                
                </div>
                <div className="alma_Box"  onClick={this.goLucks.bind(this)}>
                    <span >今日份黄历运势</span>
                </div>
              
            </div>
                <Route path="/luck/starts" component={Starts} />
                <Route path="/luck/lucks" component={Lucks} />
                <Redirect from="/luck" to="/luck/starts" exact />
        </div>
    }
}