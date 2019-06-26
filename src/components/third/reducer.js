var initState ={
	joke_list:localStorage.joke_list?JSON.parse(localStorage.joke_list).joke_list:[]
}


const reducer = (state=initState,action)=>{
	let newState ={...state};
	// console.log(newState)
   
    if(action.type==="ADD"){
    	if(newState.joke_list.length===0){
    		newState.joke_list.push(action.obj);	
    	}
    	else{
	    	var flag=false;  //表示添加的商品购物车里没有
	    	newState.joke_list.forEach((item)=>{
	    		if(item.id===action.obj.id){
	    			item.count+=0;
	    			flag=true;
	    		}
	    	})
	    	if(!flag) newState.joke_list.push(action.obj);
    	}
    }
   
    else if(action.type==="CHANGE"){
    	 newState.joke_list.forEach((item)=>{
    		if(item.id===action.id){
    			item.flag=!item.flag;
    		}
    	})
	}
	else if(action.type ==="REMOVE"){
		// console.log(id)
		// newState.joke_list.splice(id,1)
	}
	localStorage.joke_list=JSON.stringify(newState);
	return newState;
}
export default  reducer;
