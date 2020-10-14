import React from 'react'
import {connect} from 'react-redux'
import {startGetAllPosts} from '../../action/postAction'
import {Accordion, Card, Button} from 'react-bootstrap'
import moment from 'moment'




class allPosts extends React.Component{
      

    componentDidMount(){
        this.props.dispatch(startGetAllPosts())
    }


    AddComment=(id)=>{
        this.props.history.push(`/comment/${id}`)
    }


    render(){
        //console.log('my post', this.props.post)
        //console.log('my user', this.props.user)
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
                            <div>
                <Accordion defaultActiveKey="1">
                    <Card>
                        <Card.Header>
                            <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                Comment 
                            </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body >
                                {
                                ele.comments.map(element=> 
                                    <div class="card">
                                        <div class="card-body">
                                            <div>{element.body}</div>
                                        <small><p class="card-text">{moment(element.createdAt).startOf('hour').fromNow()}</p></small>{" "}{" "}<div>{ele.username}</div>
                                        </div>
                                    </div>   
                                )}
                                
                                <button className="btn btn-primary" onClick={()=>{this.AddComment(ele._id)}}>Add Comment</button>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
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
