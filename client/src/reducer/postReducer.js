const postInitialState=[]
const postReducer = (state = postInitialState, action)=>{
    switch(action.type){
        case 'GET_POST':{
            return [].concat(action.payload)
        }
        default:{
            return[...state]
        }
    }
}


export default postReducer