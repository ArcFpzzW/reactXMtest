import React,{Component} from 'react'
import axios from "axios"
import "./luck.css"
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
            //  console.log(res.data.lucklist)
            this.setState({
                licksList:res.data.lucklist

            })
           
     });
    }
    render(){
        
        let{licksList}= this.state;
        console.log(licksList)
        return <div className="lucks">
            <div >
                黄历运势页面
                <p>今日日期：{this.state.newDate}</p>
                <hr />
                <p>{licksList.t3}</p>
                <hr />
                    {licksList.chongsha}
                <h1>{licksList.gongli}</h1>
                <h1>{licksList.ji}</h1>
                <h1>{ licksList.jieqi24}</h1>
                <h1>{ licksList.jieri}</h1>
                <h1>{ licksList. jrhh}</h1>
                <h1>{ licksList. jsyq}</h1>
                <h1>{ licksList. nayin}</h1>
                <h1>{ licksList. nongli}</h1>
                <h1>{ licksList. pzbj}</h1>

            </div>
            

        </div>
    }
}