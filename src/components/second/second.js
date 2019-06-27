import React,{Component} from 'react'
import Footer from '../common/footer'
import actions from '../third/actionCreator'
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
                                                 <div className="li_btm">
													<span>{item.ct}</span>
													<span onClick={this.props.add.bind(this,{...item,count:1,flag:false})}>收藏
													<i className="fa fa-star-o"></i>  {/*收藏星星有了填充色！！ */}
													</span>
                                                 
																								 </div>
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
		add(obj){
			// console.log(obj)
			dispatch(actions.addAction(obj));
		},
		getData(){
			dispatch(actionlist.getDataAction())
		}
	}
}

export default connect(mapState,mapDispatch)(Second);