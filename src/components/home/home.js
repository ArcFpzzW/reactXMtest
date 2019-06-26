import React,{Component} from 'react'
import {connect} from 'react-redux';
import Footer from '../common/footer'
import actionlist from './actionCreator'
import Swiper from '../common/swiper'
import './home.css'
  class Home extends Component {
	  componentDidMount(){
		this.props.getData();
	  }
		render(){
			    console.log(this.props.list)
				return <div>
					<Swiper />
						<div >
							 <ul className="home_list_ul">
								 {
									 this.props.list.map((item,index)=>{
										 return <li key={index} className="home_list_ul_li">
											 	<div className="home_list_ul_li_left">
													 <img  src={item.thumbnail_pic_s}  alt="" />
												 </div>
												 <div  className="home_list_ul_li_middle">
                                    <h2>{item.author_name}</h2>
                                    <h3> {item.category} </h3>
                                    <h4>{item.title}&nbsp;
                                       
                                     </h4>
                                    <h5>
                                     {item.date}
                                    </h5>
                                </div>
                                <div  className="home_list_ul_li_right">
																		<a href={item.url}>详情</a>
                                </div>
										 </li>
									 })
								 }
							 </ul>
						</div>

								<div className="home_kong"></div>
						<Footer />
						{/* <Redirect from="/" to="/home" exact /> */}
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