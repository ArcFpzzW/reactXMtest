import React,{Component} from 'react'
import Footer from '../common/footer'
import {connect} from 'react-redux';
import actions from './actionCreator'
class Car extends Component {
	render(){
			console.log(this.props)
			return <div><ul>
					  {

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
	inc(id){
		
		dispatch(actions.incAction(id));
	},
	dec(id){
		dispatch(actions.decAction(id));
	},
	change(id){
		dispatch(actions.changeAction(id));
	}
}
}
export default connect(mapState,mapDispatch)(Car);
