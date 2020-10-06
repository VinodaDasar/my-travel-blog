import React from 'react'
import {connect} from 'react-redux'
import {startAddComment} from '../../action/commentAction'

class AddComments extends React.Component{
    constructor(props){
        super(props)
        this.state={
            body:''
        }
    }


    handleChange=(e)=>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleBack=()=>{
        window.location.href='/'
    }

    handleSubmit=(e)=>{
        e.preventDefault()
        const formData={
            body: this.state.body
        }
        const redirect=()=>{
            this.props.history.push("/")
        }
        console.log("comment formdata", formData)
        const id= this.props.match.params.id
        this.props.dispatch(startAddComment(id, formData, redirect))

    }


    render(){
        return(
            <div>
                <h3>Comments</h3>
                <div className="container">
                    <div className="row">
                        <div className="col-cd-4"></div>
                        <div className="col-cd-4">
                            <form onSubmit={this.handleSubmit}>
                                <div className="form-group">
                                <label> Add Comments</label>
                                <textarea type="text" id="body" name="body" className="form-control" onChange={this.handleChange}/><br/>

                                <input type="submit" className="btn btn-primary" name="Add"/>
                                </div>
                            </form>
                        </div>
                    </div>
                    <button type="button" className="btn btn-primary" onClick={this.handleBack}>Back</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps=(state, props)=>{
    const id = props.match.params.id
    //console.log(id)
    return{
        post: state.post.find(ele=>ele._id == id)
    }
}

export default connect(mapStateToProps)(AddComments)