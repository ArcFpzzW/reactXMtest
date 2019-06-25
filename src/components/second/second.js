import React,{Component} from 'react'
import Footer from '../common/footer'
import {connect} from 'react-redux';
import actionlist from './actionCreator'
 class Second extends Component {
	componentDidMount(){
		this.props.getData();
	  }
		render(){
			    console.log(this.props.list)
				return <div>
						second
						<Footer/>
					   </div>

		       
		   }
}
var mapState=(state)=>{
	return {
		list:state.second.joke_list
	}
}
var mapDispatch=(dispatch)=>{
	return {
	
		getData(){
			dispatch(actionlist.getDataAction())
		}
	}
}

export default connect(mapState,mapDispatch)(Second);