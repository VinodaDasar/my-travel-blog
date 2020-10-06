import axios from "../config/axios"


export const setComment=(comment)=>{
return{type: 'SET_COMMENT', payload: comment}
}


export const startAddComment=(id , formData, redirect)=>{
    return(dispatch)=>{
        axios.post(`/comment/${id}`, formData, {
            headers:{
                'x-auth': localStorage.getItem('authToken')
            }
        })
        .then((response)=>{
            const comment = response.data
            console.log(comment)
            dispatch(setComment(comment))
            redirect()
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}

export const getComment=(data)=>{
    return{type: 'GET_COMMENT', payload: data}
}

export const startGetComment=()=>{
    return(dispatch)=>{
        axios.get('/listallcomments')
            .then((res)=>{
                const data = res.data
                dispatch(getComment(data))
            })
            .catch((err)=>{
                console.log(err)
            })
    }
}