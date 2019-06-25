import React,{Component} from 'react'

import {BrowserRouter as Router,Route,Switch,NavLink } from 'react-router-dom'
import './navfooter.css'
 export default class navFooter extends Component {
		render(){
			   
				return <div className="navFooter">
                             <NavLink to="/home">  <span><i className="iconfont" >&#xe717;</i></span>电影</NavLink>
                <NavLink to="/second"> <span><i className="iconfont" >&#xe61d;</i></span>影院</NavLink>
                <NavLink to="/third"> <span><i className="iconfont" >&#xe717;</i></span>优惠</NavLink>
                <NavLink to="/user"> <span><i className="iconfont" >&#xe605;</i></span>我的</NavLink>
					   </div>

		       
		   }
}
