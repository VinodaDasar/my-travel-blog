const alluserInitialState=[]

const allUsersReducer=(state=alluserInitialState, action)=>{
    switch(action.type){
        case 'SET_ALL_USER':{
            console.log("action.payload", action.payload)
            return state.concat(action.payload)

        }
        case 'GET_ALL_USER':{
            return [].concat(action.payload)
        }
        default:{
            return [...state]
        }
        
    }
}

export default allUsersReducer