import React,{Component} from 'react'
import axios from "axios"
export default class Starts extends Component{

    constructor(props){
        super(props);
        this.state={
            newDate:'',
            starlist:[]
        }
    }
    componentDidMount(){
        this.getStarsData();
        this.getNowFormatDate();
    }
     getNowFormatDate() {
        var date = new Date();
        var seperator1 = "-";
        var year = date.getFullYear();
        var month = date.getMonth() + 1;
        var strDate = date.getDate();
        if (month >= 1 && month <= 9) {
            month = "0" + month;
        }
        if (strDate >= 0 && strDate <= 9) {
            strDate = "0" + strDate;
        }
        var currentdate = year + seperator1 + month + seperator1 + strDate;
        console.log("当前时间戳")
        this.setState({
            newDate:currentdate

        })
    }
    getStarsData(){
        axios.get("http://154.8.228.237:3000/star").then((res)=>{
            //  console.log(res)
            this.setState({
                starlist:res.data.starlist

            })
             console.log(this.state.starlist.day)
     });
    }

    render(){
        return <div>
            星座运势页面
            <p>今日日期：{this.state.newDate}</p>

        </div>
    }
}