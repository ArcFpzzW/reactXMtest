import React from 'react'
import axios from 'axios'
import Swiper from 'swiper/dist/js/swiper.js'
import 'swiper/dist/css/swiper.min.css'
import "./navfooter.css"
export default class SWiper extends React.Component{
    constructor(){
        super()
        this.state={
            bannerList:[]
        }
      
    }
    componentDidMount(){      
        this.getData()       
    }
    getData(){
        axios({
			method:'get',
			url:"/my/gateway?type=2&cityId=110100",
			params:{
				k:Date.now()
			},
			headers:{
				"X-Client-Info": `{"a":"3000","ch":"1002","v":"5.0.4","e":"15563697463697966842236"}`,
                "X-Host": "mall.cfg.common-banner"
			}
		}).then((res)=>{
            // console.log(res.data.data)
          this.setState({
            bannerList:res.data.data
           
          },()=>{
            new Swiper ('.swiper-container', {
                loop: true,  //循环
                autoplay: {   //滑动后继续播放（不写官方默认暂停）
                    disableOnInteraction: false,
                },
                pagination: {  //分页器
                    el: '.swiper-pagination'
                }
            })
          })
            
		})
    }
    render(){
        return(
            <div className='movie-index'>
             
                <div className="swiper-container">
                    <div className="swiper-wrapper">
                        {
                          this.state.bannerList.map((item,index)=>{
                              return <div key={index} className="swiper-slide">
                                  <img  className="banner-img" src={item.imgUrl} alt=''/>
                              </div>
                          })  
                        }                    
                    </div>               
                    <div className="swiper-pagination"></div>
                    {/* 导航栏 */}
                   
                </div>
               
            </div>
        )
    
    }
}