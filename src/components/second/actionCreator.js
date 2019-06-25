import axios from 'axios';

export default {

	getDataAction(){
		return (dispatch)=>{
			 axios.get("http://154.8.228.237:3000/joke").then((res)=>{
                //    console.log(res.data.jokelist.contentlist)
			 		 dispatch({
			 		 	type:"DATA",
			 		 	 data:res.data.jokelist.contentlist
			 		 })
			 });
		}
	}
}