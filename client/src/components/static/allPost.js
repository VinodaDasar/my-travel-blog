import React from 'react'
import {connect} from 'react-redux'
import {startGetAllPosts} from '../../action/postAction'
//import {BiComment} from "react-icons/bs"

class allPosts extends React.Component{
    componentDidMount(){
        this.props.dispatch(startGetAllPosts())
    }

    handleClick=(id)=>{
        this.props.history.push(`/showcomment/${id}`)
    }

    AddComment=(id)=>{
        this.props.history.push(`/comment/${id}`)
    }


    render(){
        console.log('my post', this.props.post)
        return(
            <div>
                <h2>All Feed</h2>
                {
                    this.props.post.map(ele=>{
                        return(
                            <div  className="card w-75">
                        <div className="card-body">
                        <img src={`http://localhost:3090/${ele.photo}`} className="img-fluid" width="350" height="350" alt="not found"/><br/><br/>
                            <h5 className="card-title">Title: {ele.title}</h5>
                            <p className="card-body">{ele.body}</p>

                            <div class="accordion" id="accordionExample">
                            <div class="card">
                            <div class="card-header" id="headingOne">
                            <h2 class="mb-0">
                            <button className="btn btn-primary" 
                                    type="button"
                                    data-toggle="collapse" 
                                    data-target="#collapseOne" 
                                    aria-expanded="true" 
                                    aria-controls="collapseOne"
                                    
                                    onClick={()=>{this.handleClick(ele._id)}}>Comment
                            </button> <button className="btn btn-primary" onClick={()=>{this.AddComment(ele._id)}}>Add comment</button></h2>
                            </div> 
                            </div>
                            </div>
                            
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
    //console.log('state', state.post)
    //console.log('user', state.user)
    return{
        post: state.post,
        user: state.user
}
}

export default connect(mapStateToProps)(allPosts)
