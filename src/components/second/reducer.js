var initState = {
   joke_list:[] 
}
var reducer = (state = initState,action)=>{
    var newState = {...state};
        if(action.type==="DATA"){
            newState.joke_list = action.data
        }
        return newState 
 }
  
export default reducer;