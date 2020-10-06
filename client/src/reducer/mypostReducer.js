const mypostInitialState=[]
const mypostReducer=(state= mypostInitialState, action)=>{
    switch(action.type){
        case 'SET_POST':{
            return [].concat(action.payload)
        }
        case 'DELETE_POST':{
            return state.filter(ele => ele._id!== action.payload)
        }
        case 'EDIT_POST':{
            return state.map(ele=>{
                if(ele._id===action.payload._id){
                    return [...action.payload]
                    //Object.assign({},ele,action.payload)
                }else{
                    return [...ele]
                    //Object.assign({},ele)
                }
            })
        }
        default:{
            return [...state]
        }
    }
}

export default mypostReducer