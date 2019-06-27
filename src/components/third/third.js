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
					<div   style={{display:this.state.coleFlag?'block':'none'}}>
						<h2>您的收藏列表空空如也！</h2>

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
