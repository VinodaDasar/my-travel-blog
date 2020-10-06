import React from 'react'
import image from './Image1.jpg'
//import './home.css'

function Home(props){
    return(
        <div>
            <img src={image} class="img-fluid" alt="not found" />
        </div>  
    )
}


export default Home