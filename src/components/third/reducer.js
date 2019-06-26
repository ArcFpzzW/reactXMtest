var initState ={
	joke_list:localStorage.joke_list?JSON.parse(localStorage.joke_list).joke_list:[]
}


const reducer = (state=initState,action)=>{
	let newState ={...state};

   
    if(action.type==="ADD"){
    	if(newState.joke_list.length===0){
    		newState.joke_list.push(action.obj);	
    	}
    	else{
	    	var flag=false;  
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
		console.log(action.id)
		// newState.joke_list.splice(index,1)
		newState.joke_list.filter((item)=>{
			console.log(newState)
    		return item.id!==action.id
    	})
	}

	localStorage.joke_list=JSON.stringify(newState);
	return newState;
}
export default  reducer;
