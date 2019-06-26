import React,{Component} from 'react'
// import {connect} from 'react-redux';
// import actions from './actionCreator'
import Footer from '../common/footer'
import './user.css'


 export default class Car extends Component {
		render(){
			    console.log(this.props)
				return <div>
						<div className="user_Box">
								<div className="text_Box">
									<h3 className="tit_Wb">[放飞梦想]</h3>
									<p className="tit_Wb">很难说什么事办不到的事情，因为昨天的梦想可以使今天的希望，并且还可以成为明天的现实。</p>
									<div>
										<span className="Hp_Box"><img className="Nl_img" src='http://pic.51yuansu.com/pic3/cover/00/94/68/58dcd704b0803_610.jpg' alt="" /></span>
										<div className="login_Box">
											<p><span>账号：</span> <input type="text"  ref={(node)=>this.username=node} /></p>
											<span>密码：</span> <input type="text" ref={(node)=>this.password=node}  />
											<button onClick={this.login}  className="login_Btn">立即登录</button>
										</div>
									</div>
								</div>
								<div className="list_Box">
									<div className="luck_Box">
										<div className="star_Box">
											<span>今日份星座运势</span>
										</div>
										<div className="alma_Box">
											<span>今日份黄历运势</span>
										</div>

									</div>
									<ul className="list_Ul_Box">
										<li className="con_Li">
											<img src='https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1561522659121&di=d52545a9181f065e90cf2b031e830f23&imgtype=0&src=http%3A%2F%2Fimages.669pic.com%2Felement_pic%2F95%2F66%2F62%2F97%2Fd8f0c8a2eb94d6402b0121e37607f081.jpg' alt="" />
											 <span>joker收藏</span>
											 <i> </i>
										</li>
										<li>
											
											<img src='https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1561524328444&di=b3e5b1475a52eafef8fe5815830fce45&imgtype=0&src=http%3A%2F%2Fpic37.nipic.com%2F20140116%2F2531170_115618181000_2.jpg' alt="" />
											 <span>纸飞机专用勋章墙</span>
											 <i> </i>

										</li>
										<li>
										
											<img src='https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1561524748880&di=4ef8c9c451e538c9e8039777801fa3b8&imgtype=0&src=http%3A%2F%2Fpic.51yuansu.com%2Fpic3%2Fcover%2F02%2F30%2F89%2F59c0788305336_610.jpg' alt="" />
											 <span>组合红包</span>
											 <i> </i>

										</li>
										<li>
				
											<img src='https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1561524886431&di=e2c2dd0f72df98be089534c6d8cbb7c3&imgtype=0&src=http%3A%2F%2Fpic.51yuansu.com%2Fpic3%2Fcover%2F00%2F76%2F26%2F58b8886e01297_610.jpg'  alt=""/>
											 <span>纸飞机神秘客服</span>
											 <i> </i>

										</li>
										<li>
				
											<img src='https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1561525210694&di=04129cad542fbcd14cb2bdcb22239fbb&imgtype=0&src=http%3A%2F%2Fku.90sjimg.com%2Felement_origin_min_pic%2F18%2F08%2F07%2F17b99157dc4cff1fd7b9327235fde4ad.jpg%2521%2Ffwfh%2F804x804%2Fquality%2F90%2Funsharp%2Ftrue%2Fcompress%2Ftrue' alt="" />
											 <span>纸飞机个人设置</span>
											 <i> </i>

										</li>
									</ul>



								</div>
							</div>	
						<Footer />
					   </div>

		       
		   }
}
