import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'

import userReducer from '../reducer/userReducer'
import postReducer from '../reducer/postReducer'
import mypostReducer from '../reducer/mypostReducer'
import commentReducer from '../reducer/commentReducer'
import allUsersReducer from '../reducer/allUserReducer'

const configureStore = ()=>{
    const store = createStore(combineReducers({
        user: userReducer,
        post: postReducer,
        mypost: mypostReducer,
        comment: commentReducer,
        allUser: allUsersReducer
    }), applyMiddleware(thunk))
    return store
}

export default configureStore