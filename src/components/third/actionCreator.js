export default {
    addAction(obj){
        console.log(obj)
        return {
            type:"ADD",
            obj
        }
    },
    changeAction(id){
        return {
            type:"CHANGE",
            id
        }
    },
    removeAction(id){
        console.log(id)
        return{
            type:"REMOVE",
            id
        }
    }

}