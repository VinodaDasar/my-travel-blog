import axios from '../config/axios'

export const setAllPosts = (post)=>{
    return{type: 'GET_POST', payload: post}
}

export const startGetAllPosts = ()=>{
    return(dispatch)=>{
        axios.get('/listall',{
            headers:{
                'x-auth': localStorage.getItem('authToken')
            }
        })
             .then((response)=>{
                 const post = response.data
                 console.log('all post',post)
                 dispatch(setAllPosts(post))
             })
             .catch((err)=>{
                 alert(err.message)
             })
    }

}

