import React,{Component} from 'react'
import {connect} from 'react-redux';
import Footer from '../common/footer'
import actionlist from './actionCreator'
  class Home extends Component {
	  componentDidMount(){
		this.props.getData();
	  }
		render(){
			    console.log(this.props)
				return <div>
						home


						<Footer />
					   </div>

		       
		   }
}
var mapState=(state)=>{
	return {
		list:state.home.banner_list
	}
}
var mapDispatch=(dispatch)=>{
	return {
	
		getData(){
			dispatch(actionlist.getDataAction())
		}
	}
}

export default connect(mapState,mapDispatch)(Home);