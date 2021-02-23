import React from 'react'
import { Link } from 'react-router-dom'
import image from '../images/404Error-rafiki.svg'

function NotFound(props) {
    return (
        <div>
            <h1>El error es {props.error}</h1>
            <img style={{maxHeight:'500px'}} src={image} alt=""/>
            <a href="https://storyset.com/web">Illustration by Freepik Storyset</a><br/>
            <Link to="/badges" className="btn btn-primary">Badges</Link>
        </div>
    )
}


export default NotFound

