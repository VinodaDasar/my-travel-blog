import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import image from './Image1.jpg'
import {startLoginUser} from '../../action/userAction'

class Login extends React.Component{
    constructor(props){
        super(props)
        this.state={
            email:'',
            password: ''

        }
    }

    handleChange = (e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    handleSubmit = (e)=>{
        e.preventDefault()
        const formData ={
            email: this.state.email,
            password: this.state.password
        }
        const redirect = ()=>{
            return this.props.history.push('/')
        }
        this.props.dispatch(startLoginUser(formData, redirect))
    }


    render(){
        return(
            <div className="row">
                <div className="col-md-6">
                    <img src={image} alt="not found"/>
                </div>
                <div className="col-md-6">
                <h3>Log-In</h3>
                <form className="form-conatianer" onSubmit={this.handleSubmit}>
                    <label>Email: </label>
                    <input type="email" name="email" value={this.state.email} id="email" onChange={this.handleChange}/><br/>

                    <label>Password: </label>
                    <input type="password" name="password" value={this.state.password} id="password" onChange={this.handleChange}/><br/>

                    <input className="btn btn-primary" type="submit" value="login"/><span style={{padding:"30px"}}> <Link to="/forgotpassword">Forgotten password?</Link></span>
                </form>
                </div>
               
            </div>
        )

    }
}

const mapStateToProps =(state)=>{
    return{
        user: state.user
    }
}

export default connect(mapStateToProps)(Login)
