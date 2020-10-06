const commentInitialState=[]
const commentReducer=(state=commentInitialState, action)=>{
    switch(action.type){
        case 'SET_COMMENT':{
            return [].concat(action.payload)
        }
        case 'GET_COMMENT':{
            return [action.payload]
        }
        default:{
            return [...state]
        }
    }
}

export default commentReducer