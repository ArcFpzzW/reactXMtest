import React,{Component} from 'react'
import axios from "axios"
export default class Lucks extends Component{
    constructor(props){
        super(props);
        this.state={
            newDate:'',
            licksList:[]
        }
    }
    componentDidMount(){
        this.getLucksData();
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
        
        this.setState({
            newDate:currentdate

        })
    }
    getLucksData(){
        axios.get("http://154.8.228.237:3000/luck").then((res)=>{
            //  console.log(res)
            this.setState({
                licksList:res.data.lucklist

            })
             console.log(this.state.licksList)
     });
    }
    render(){
        return <div>
            <div >
                黄历运势页面
                <p>今日日期：{this.state.newDate}</p>

            </div>

        </div>
    }
}