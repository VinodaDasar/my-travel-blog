import React from 'react'
import {connect} from 'react-redux'
//import {startGetUser} from '../../action/userAction'
import {startFilePost} from '../../action/mypostAction'

class AddPost extends React.Component{

    constructor(props){
        super(props)
        this.state={
            title: '',
            body:'',
            photo:{}
        }
    }
/*
    componentDidMount(){
        this.props.dipatch(startGetUser())
    }*/

    handleChange=(e)=>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleFileChange=(e)=>{
        this.setState({
            photo: e.target.files[0]
        })
    }

    handleBack=()=>{
        window.location.href='/'
    }

    handleSubmit=(e)=>{
        e.preventDefault()
        const fd = new FormData()
        fd.append('title', this.state.title)
        fd.append('body', this.state.body)
        fd.append('photo', this.state.photo, this.state.photo.name)
        //console.log('formdata', fd)
       const redirect=()=>{
            this.props.history.push('/')
        }
        this.props.dispatch(startFilePost(fd, redirect))
    }

    render(){
        return(
            <div>
                <h2>New Post</h2>
                <div className="container">
                    <div className="row">
                        <div className="col-md-3"></div>
                        <div className="col-md-3">
                            <form action="#" method="post" encType="multipart/form-data" onSubmit={this.handleSubmit}>
                                <div className="form-group">
                                <label>Title: </label>
                                <input type="text" id="title" className="form-control" name="title" onChange={this.handleChange}/>

                                <label>Description: </label>
                                <textarea type="text" id="body" className="form-control" name="body" onChange={this.handleChange}/>

                                <div className="flex">
                                <label htmlFor="photo">File: </label>
                                <input type="file" id="photo" name="photo" accept=".jpg" onChange={this.handleFileChange}/><br/><br/>
                                </div>
                                
                                

                                <input className="btn btn-primary" type="submit" name="Add"/>
                                </div>
                            </form>
                        </div>

                    </div>

                </div>
                <button type="button" className="btn btn-primary" onClick={this.handleBack}>Back</button>
            </div>
        )
    }
}

const mapStateToProps=(state)=>{
    return{
        user: state.user,
    }
}

export default connect(mapStateToProps)(AddPost)