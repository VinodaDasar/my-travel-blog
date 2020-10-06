import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import './navbar.css'
import Swal from 'sweetalert2'

const Navbar = (props) => {
    const handleLogOut=()=>{
        Swal.fire({
          icon: 'success',
          position:"top",
          title: 'logout sucessfully',
         
        }).then(result=>{
             if(result.value)
             {
              localStorage.removeItem('authToken')  
          window.location.href="/"
             }
        })
    
       }
    return (
        <div>

{
                Object.keys(props.user).length !== 0? (
                    <div>
                        <ul>
                        
                        <li><Link  to="#" onClick={handleLogOut}>Logout</Link></li>  
                       <li><Link  to="/listall">All-Posts</Link></li>  
                       <li><Link  to="/myposts">My-Posts</Link></li>

                        </ul>
                    </div>

                ):(
                    <div>
                        <ul>

                        
                       <li><Link to="/register">Register</Link></li> 
                       <li><Link to="/login">Login</Link></li>
                    </ul>
                  </div>
                )
            }
            
        </div>
    )
}

const mapStateToProps = (state)=>({
    user: state.user
})


export default connect(mapStateToProps)(Navbar)

