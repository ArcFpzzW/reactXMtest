import React,{Component} from 'react'
import axios from 'axios'
// import {connect} from 'react-redux';
// import actions from './actionCreator'
import Footer from '../common/footer'
import './user.css'


 export default class Car extends Component {
		render(){
			    console.log(this.props)
				return <div>
						user<div className="user_Box">
								<div className="text_Box">
									<h3 className="tit_Wb">[放飞梦想]</h3>
									<p className="tit_Wb">很难说什么事办不到的事情，因为昨天的梦想可以使今天的希望，并且还可以成为明天的现实。</p>
									<div>
										<span className="Hp_Box"><img className="Nl_img" src='http://pic.51yuansu.com/pic3/cover/00/94/68/58dcd704b0803_610.jpg' /></span>
										<div className="login_Box">
											<p><span>账号：</span> <input type="text"  ref={(node)=>this.username=node} /></p>
											<span>密码：</span> <input type="text" ref={(node)=>this.password=node}  />
											<button onClick={this.login}  className="login_Btn">立即登录</button>
										</div>
									</div>
								</div>
								<div className="list_Box">
									<ul className="list_Ul_Box">
										<li className="con_Li"> joker收藏</li>



									</ul>



								</div>
							</div>	
						<Footer />
					   </div>

		       
		   }
}
