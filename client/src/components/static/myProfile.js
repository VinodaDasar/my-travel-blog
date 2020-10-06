import React from 'react'
import {connect} from 'react-redux'
import {startGetMyPosts, startDeleteMyPost} from '../../action/mypostAction'


class myProfile extends React.Component{
    componentDidMount(){
        this.props.dispatch(startGetMyPosts())
    }

    AddPost=()=>{
        this.props.history.push('/createnew')
    }

    editPost=(id)=>{
        this.props.history.push(`/editpost/${id}`)
    }

    deletePost=(id)=>{
        this.props.dispatch(startDeleteMyPost(id))
    }

    render(){
        return(
            <div>
                <div className="row">
                        <div className="col-md-7">
                            <h2>My Feed</h2>
                        </div>
                        <div className="col-md-5">
                            <button className="btn btn-primary" onClick={this.AddPost}>Add Post</button>
                        </div>
                        </div>

                {
                    this.props.mypost.map(ele => {
                        return(
                            <div className="card w-75">
                                <div className="card-body">
                                <img className="center" src={`http://localhost:3090/${ele.photo}`} class="img-fluid" width="350" height="350" alt="not found"/><br/><br/>
                                    <h5 className="card-title">Title: {ele.title}</h5>
                                    <p className="card-body">{ele.body}</p>
                                    <div className="card-image">
                                    <br/>
                                    </div>
                                    <button className="btn btn-primary" onClick={()=>{this.editPost(ele._id)}}>Edit</button>  <button className="btn btn-primary" onClick={()=>{this.deletePost(ele._id)}}>Delete</button>  
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
    //console.log("my profile", state.mypost)
    return{
        mypost: state.mypost
    }
}

export default connect(mapStateToProps)(myProfile)