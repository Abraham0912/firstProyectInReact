import React, { Component } from 'react'
import { Link } from 'react-router-dom';

import './styles/Navbar.css'
import img1 from '../images/arla-logo.png'

class Navbar extends Component {
    render() {
        return (
            <div className="Navbar">
                
                    <Link className="Navbar__brand" to="/">
                        <img className="Navbar__brand-logo" src={img1} alt="alienxD"/>
                        <span className="Navbar__title_1">Swamp</span>
                        <span className="Navbar__title_2">Per</span>
                        
                    </Link>



                <div className="Navbar__brand2">
                    <Link className="nav-link" to="/badges">Badges</Link>
                    <Link className="nav-link" to="/badge/new">BadgesNew</Link>
                    <Link className="nav-link" to="/testing">Pruebas</Link>


                </div>
                
            </div>
        )
    }
}


export default Navbar;