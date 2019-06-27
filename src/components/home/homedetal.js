import React,{Component} from 'react'
import './homedetal.css'
import pubsub from 'pubsub-js'
export default class Homedetal extends Component{
    constructor(props){
        super(props);
        this.state={
            T_Url:''
        }
        // console.log(111)
        pubsub.subscribe("detali",(detali,data)=>{
            // console.log(data.delUrl)
            
            this.setState({
                T_Url:data.delUrl
             
            })
               return;
        })
    }
    render(){
        // console.log(this.state.T_Url)
        return <div>
               
                <div className="top_Go_Nav">
                    <span className="goBack_Btn"  onClick={this.props.history.go.bind(this,-1)}>
                        <i></i>
                    </span>

                </div>
                <div    className="content_Detal-Box" >
                   
                    <iframe src={this.state.T_Url} width="99%" height="100%"  scrolling = 'auto' vertical-align='top' display='block' scrolling="yes">


                    </iframe>

                </div>
        
        </div>
    }
}