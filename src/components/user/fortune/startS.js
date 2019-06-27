import React,{Component} from 'react'
import axios from "axios"
import "./luck.css"
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
        // console.log("当前时间戳")
        this.setState({
            newDate:currentdate

        })
    }
    getStarsData(){
        axios.get("http://154.8.228.237:3000/star").then((res)=>{
            //  console.log(res)
            this.setState({
                starlist:res.data.starlist.day

            })
            //  console.log(this.state.starlist.day)
     });
    }

    render(){
        // console.log(this.state.starlist)
        let {starlist} = this.state
        return <div className="starlist">
            星座运势页面
            <p className="starlist_p">今日日期：{this.state.newDate}</p>
            <hr />
            <p className="starlist_p">{starlist.grxz}</p>
            <p className="starlist_p">{starlist.lucky_color}</p>
            <p className="starlist_p">{starlist.day_notice}</p>
            <p className="starlist_p">{starlist.love_txt}</p>
            <p className="starlist_p">{starlist.work_txt}</p>
           
            <p className="starlist_p">{starlist.general_txt}</p>
            <p className="starlist_p">{starlist.money_txt}</p>
        </div>
    }
}