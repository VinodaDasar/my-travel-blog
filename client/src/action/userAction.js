import Swal from 'sweetalert2'
import axios from '../config/axios'

export const setUser = (user)=>{
    return {type: 'SET_USER', payload: user}
}

export const startGetUser = ()=>{
    return(dispatch)=>{
        axios.get('/account',{
            headers:{
                'x-auth': localStorage.getItem('authToken')
            }
        })
        .then((response)=>{
            const user = response.data
            dispatch(setUser(user))
        })
        .catch((err)=>{
            alert(err.message)
        })
    }
}


export const startLoginUser = (formData, redirect)=>{
    return(dispatch)=>{
        axios.post('/login', formData)
             .then((response)=>{
                 if(response.data.hasOwnProperty('error')){
                     alert(response.data.message)
                 }else{
                     alert('You have successfully logged in')
                     localStorage.setItem('authToken', response.data.token)
                     axios.get('/account',{
                         headers:{
                             'x-auth': localStorage.getItem('authToken')
                         }
                     })
                     .then((response)=>{
                          const user = response.data
                          dispatch(setUser(user))
                          redirect()
                     })
                     .catch((err)=>{
                         alert(err.message)
                     })
                 }
             })
    }
}



export const startRegisterUser = (formData, redirect)=>{
    return(dispatch)=>{
        //console.log('action generator', formData)
        axios.post('/register', formData)
             .then((response)=>{
                 if(response.data.hasOwnProperty('error')){
                     alert(response.data.message)
                 }else{
                     alert('You have successfully registered')
                     const data = response.data
                     dispatch(setAllUser(data))
                     redirect()
                 }
             })
             .catch((err)=>{
                 console.log(err)
             })
    }
}

//to get all the users logged in
export const getAllUser=(data)=>{
    return{type: 'GET_ALL_USER', payload: data}
}

export const startGetAllUser=()=>{
    return(dispatch)=>{
        axios.get('/allusers')
            .then((response)=>{
                const data = response.data
                dispatch(getAllUser(data))
            })
    }
}

//to set the users logged in data 
export const setAllUser=(data)=>{
    return{type: 'SET_ALL_USER', payload: data}
}

export const startForgetPassword=(formdata, redirect)=>{
    return(dispatch)=>{
        axios.post('/forgetpassword', formdata)
             .then((response)=>{
                 if(response.data.hasOwnProperty('errors'))
                 {
                     Swal.fire(response.data.errors)
                 }
                 else
                 {
                    const Toast = Swal.mixin({
                        toast: true,
                        position: 'top-center',
                        showConfirmButton: false,
                        timer: 3000,
                        timerProgressBar: true,
                        onOpen: (toast) => {
                          toast.addEventListener('mouseenter', Swal.stopTimer)
                          toast.addEventListener('mouseleave', Swal.resumeTimer)
                        }
                      })
                      
                      Toast.fire({
                        icon: 'success',
                        title: response.data
                      })
                 }
             })
    }

}






