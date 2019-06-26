export default {
    addAction(obj){
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
    }

}