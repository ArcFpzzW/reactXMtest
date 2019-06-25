var initState = {
    banner_list:[] 
}
var reducer = (state = initState,action)=>{
    var newState = {...state};
        if(action.type==="DATA"){
            newState.banner_list = action.data
        }
        return newState 
 }
  
export default reducer;