import React from 'react'
import { BrowserRouter, Route, Link, Switch} from 'react-router-dom'
import {connect} from 'react-redux'


import Home from './components/static/Home'
import Register from './components/auth/Register'
import Login from './components/auth/Login'
import allPosts from './components/static/allPost'
import myProfile from './components/static/myProfile'
import editForm from './components/static/editForm'
import AddPost from './components/static/addPosts'
import AddComments from './components/static/addComments'
import ShowComment from './components/static/showComment'
import Layout from './components/Layout/layout'
import Navbar from './components/Layout/navbar'

function App(props){

    //console.log("user", props.user)

    return(
        <Layout>
        <BrowserRouter>
            <Navbar />
        <div className="container">
            
            
         {/*   <Link to="/">Home</Link> 
            
            
            {
                Object.keys(props.user).length !== 0? (
                    <div>
                        
                        <Link  to="#" onClick={handleLogout}>Logout</Link>  | 
                        <Link  to="/listall">All-Posts</Link>  |
                        <Link  to="/myposts">My-Posts</Link>
                    </div>

                ):(
                    <div>
                    <Link to="/register">Register</Link> |
                    <Link to="/login">Login</Link>
                  </div>
                )
            }*/}
        
            <Switch>
                <Route path="/" component={Home} exact={true}/>
                <Route path="/register" component={Register} />
                <Route path="/login" component={Login} />
                <Route path="/listall" component={allPosts}/>
                <Route path="/myposts" component={myProfile}/>
                <Route path="/editpost/:id" component={editForm}/>
                <Route path="/createnew" component={AddPost}/>
                <Route path="/comment/:id" component={AddComments}/>
                <Route path="/showcomment/:id" component={ShowComment}/>
                <Route path="/comment/:id" component={AddComments}/>
            </Switch>
        </div>
        </BrowserRouter>
        </Layout>
    )
}

const mapStateToProps = (state)=>({
        user: state.user
})

export default connect(mapStateToProps)(App)