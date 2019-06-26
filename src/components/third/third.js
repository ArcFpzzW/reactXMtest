import React,{Component} from 'react'
import Footer from '../common/footer'
import {connect} from 'react-redux';
import actions from './actionCreator'
class Car extends Component {
	render(){
			console.log(this.props)
			return <div><ul>
					  
						{
							this.props.list.map((item,index)=>{
								return <li key={index} >
									
									<div className="second_li_box">
									<input type="checkbox" defaultChecked={item.flag} onChange={this.props.change.bind(this,item.id)} />
										<h1>{item.title}</h1>
										<p>{item.text}</p>
										<span>{item.ct}</span>

										<i className="fa fa-star-o"></i>
										<button> 取消收藏</button>
									</div>

								</li>
							})
						}
					  
				   </ul>
					
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
	}

}
}
export default connect(mapState,mapDispatch)(Car);
