import React, { Component } from 'react'
import { Link } from 'react-router-dom';

import './styles/Navbar.css'
import img1 from '../images/logo.svg'

class Navbar extends Component {
    render() {
        return (
            <div className="Navbar">
                <div>
                    <Link className="Navbar__brand" to="/">
                        <img className="Navbar__brand-logo" src={img1} alt="alienxD"/>
                        <span className="Navbar__title_1">Platzi</span>
                        <span className="Navbar__title_2">Conf</span>
                    </Link>
                </div>
                
            </div>
        )
    }
}


export default Navbar;