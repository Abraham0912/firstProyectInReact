import React, { Component, Fragment} from 'react'
import { Link } from 'react-router-dom'

import './styles/PageError.css'

import img from '../images/Feeling sorry-bro.png'


function PageError(props) {
    return (
        <Fragment>
             <div className="PageError">
                <h2>OPPS !,  {props.error.message}</h2>
                <img className="img" src={img} alt=""/>
            </div>
            <div className="boton">
                <Link to="/" className="btn btn-outline-success">Home</Link>
            </div>
        </Fragment>
    )
}

export default PageError

