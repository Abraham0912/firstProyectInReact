import React, { Component } from 'react'

import './styles/Navbar.css'
import img1 from '../images/logo.svg'

class Navbar extends Component {
    render() {
        return (
            <div className="Navbar">
                <div>
                    <a className="Navbar__brand" href="../www.google.com">
                        <img className="Navbar__brand-logo" src={img1} alt="alienxD"/>
                        <span className="Navbar__title_1">Platzi</span>
                        <span className="Navbar__title_2">Conf</span>
                    </a>
                </div>
                
            </div>
        )
    }
}


export default Navbar;