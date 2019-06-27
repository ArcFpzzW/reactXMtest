import React,{Component} from 'react'
import Footer from '../common/footer'
import {connect} from 'react-redux';
import actions from './actionCreator'
import './third.css'
class Car extends Component {
	constructor(props){
		super(props);
		this.state={
			coleFlag:true
			
		}
       this.getCollection = this.getCollection.bind(this)
	}
	componentDidMount(){
		this.getCollection()
		
	}
	getCollection(){
		// console.log(this.state.coleFlag)
		if(sessionStorage.getItem("user")){
			this.setState({
				coleFlag:!this.state.coleFlag
			})
			console.log(this.state.coleFlag)
		}
	}
	render(){
			// console.log(this.props)
		
			return <div>
				<div className="third_title">您的收藏列表></div>

				<ul style={{display:this.state.coleFlag?'none':'block'}}>					  
						{
							this.props.list.map((item,index)=>{
								return <li key={index} >
									
									<div className="second_li_box">
									{/* <input type="checkbox" defaultChecked={item.flag} onChange={this.props.change.bind(this,item.id)} /> */}
										<h1>{item.title}</h1>
										<p>{item.text}</p>
										<span>{item.ct}</span>
										<span onClick={this.props.remove.bind(this,item.id)} className="third_x"> 取消收藏 
										<i className="fa fa-trash-o" aria-hidden="true"></i>
										</span>
										
									</div>

								</li>
							})
						}
					  
				   </ul>
					<div className="empty_Box"  style={{display:this.state.coleFlag?'block':'none'}}>
						<div className="third_Tet">
							<span>尊贵的用户您好！</span>
							<p>您现在的登录模式属于游客！</p>

						</div>
						<h2 className="third_Ts">您的收藏列表空空如也！</h2>
						<div className="img_Fj">
							{/* <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1561631144507&di=085940329fc6f29fcf62e60718432b2b&imgtype=0&src=http%3A%2F%2Fimg0.pcgames.com.cn%2Fpcgames%2F1406%2F24%2F4007462_2.gif" /> */}
						</div>
					</div>
					   <Footer />
				   </div>

		   
	   }
}

var mapState=(state)=>{
	return {
		list:state.third.joke_list,
		count(){
			var s=0;
			state.car.car.forEach((item)=>{
				if(item.flag){
					s+=item.count;	
				}
				
			})
			return s;
		},
	}
}
var mapDispatch=(dispatch)=>{
return {
	change(id){
		dispatch(actions.changeAction(id));
	},
	remove(id){
		dispatch(actions.removeAction(id));
	}

}
}
export default connect(mapState,mapDispatch)(Car);
