import React,{Component} from 'react'
import Footer from '../common/footer'
import {connect} from 'react-redux';
import actionlist from './actionCreator'
import './second.css'
 class Second extends Component {
	componentDidMount(){
		this.props.getData();
	  }
		render(){
			    console.log(this.props.list)
				return <div>
				       <div className="second_x_box">
				            <ul>
                                {
                                	this.props.list.map((item,index)=>{
                                		return <li key={index} >
                                		     <div className="second_li_box">
                                                 <h1>{item.title}</h1>
                                                 <p>{item.text}</p>
                                                 <span>{item.ct}</span>
                                                 <b>收藏</b>
                                                 <i className="fa fa-star-o"></i>
                                		     </div>

                                		</li>
                                	})
                                }
				            </ul>
				       </div>
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