import React from 'react'
import {connect} from 'react-redux'
import {startEditMyPost} from '../../action/mypostAction'

class editForm extends React.Component{
    constructor(props){
        super(props)
            this.state={
                title:this.props.post?.title,
                body:this.props.post?.body
            }
    }

    handleChange=(e)=>{
        this.setState({[e.target.name]: e.target.value})
    }

    handleSubmit=(e)=>{
        e.preventDefault()
        const formData={
            title: this.state.title,
            body:this.state.body
        }
        const redirect=()=>{
           return this.props.history.push('/myposts')
        }
        const id=this.props.post._id
        this.props.dispatch(startEditMyPost(id, formData, redirect))
    }

    handleBack=()=>{
        this.props.history.push("/myposts")
    }


    render(){
        console.log('edit form',this.props.post)
        return(
            <div>
                <div className="row">
                    <div className="col-md-4"></div>
                    <div className="col-md-4">
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <label>Title</label>
                                <input type="text" name="title" value={this.state.title} className="form-control" onChange={this.handleChange}/>
                            </div>
                            <div>
                                <label>Body</label>
                                <textarea name="body" value={this.state.body} className="form-control" onChange={this.handleChange}/>
                            </div>
                            <input type="submit" value="submit" className="btn btn-primary"/>
                        </form>
                    </div>
                </div><br/>
                <br/>
                <button type="button" class="btn btn-primary" onClick={this.handleBack}>Back</button>
            </div>
        )
    }
}

const mapStateToProps=(state,props)=>{
    return{
        post: state.mypost.find(ele=>ele._id===props.match.params.id)
    }
}

export default connect(mapStateToProps)(editForm)