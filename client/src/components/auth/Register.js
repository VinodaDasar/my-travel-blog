import React from 'react'
import {connect} from 'react-redux'
import image from './Image1.jpg'

import {startRegisterUser} from '../../action/userAction'


class Register extends React.Component{
    constructor(props){
        super(props)
        this.state={
            username: '',
            email: '',
            password: ''
        }
    }

    handleChange = (e)=>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e)=>{
        e.preventDefault()
        const formData ={
            username: this.state.username,
            email: this.state.email,
            password: this.state.password
        }
        const redirect = ()=>{
            return this.props.history.push('/login')
        }
        this.props.dispatch(startRegisterUser(formData, redirect))
        //console.log(formData)
        //this.props.dispatch(startRegisterUser(formData, this.props))
    }



    render(){
        return(
            <div className="row">
               <div className="col-md-6">
                <img src={image} alt="not found"/>
               </div>
               <div className="col-md-6">
               <h3>Register with us</h3>
                <form className="form-conatianer" onSubmit={this.handleSubmit}>
                    <label htmlFor="username">Username: </label>
                    <input type="text" value={this.state.username} id="username" name="username" onChange={this.handleChange}/><br/>

                    <label htmlFor="email">Email: </label>
                    <input type="text" value={this.state.email} id="email" name="email" onChange={this.handleChange}/><br/>

                    <label htmlFor="password">Password: </label>
                    <input type="password" value={this.state.password} id="password" name="password" onChange={this.handleChange}/><br/>

                    <input className="btn btn-primary" type="submit" value="Register"/>
                </form>
               </div>
            </div>
        )
    }
}

export default connect()(Register)
