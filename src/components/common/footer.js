import React,{Component} from 'react'

import {NavLink } from 'react-router-dom'
import './navfooter.css'
 export default class navFooter extends Component {
		render(){
			   
				return <div className="navFooter">
                             <NavLink to="/home">  <span><i className="iconfont" >&#xe717;</i></span>首页</NavLink>
                <NavLink to="/second"> <span><i className="iconfont" >&#xe61d;</i></span>兴趣</NavLink>
                <NavLink to="/third"> <span><i className="iconfont" >&#xe717;</i></span>收藏</NavLink>
                <NavLink to="/user"> <span><i className="iconfont" >&#xe605;</i></span>我的</NavLink>
					   </div>

		       
		   }
}
