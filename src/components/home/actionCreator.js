import axios from 'axios';

export default {

	getDataAction(){
		return (dispatch)=>{
			 axios.get("http://154.8.228.237:3000/keji").then((res)=>{
                    // console.log(res)
			 		 dispatch({
			 		 	type:"DATA",
			 		 	data:res.data.kejilist
			 		 })
			 });
		}
	}
}