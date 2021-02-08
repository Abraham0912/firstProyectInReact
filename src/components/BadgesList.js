import React, { Component } from 'react'
//ESTILOS
import './styles/BadgesList.css'
//IMAGENES
import avatar from '../images/img2.jpeg'
import twiter from '../images/twiter-logo.png'



export default class BadgesList extends Component {
    render() {
        return (
            <div className="contenedorP">
                <ul>
                    {this.props.badges.map((badge)=>{
                        return(
                                <li className="listStyleNone" key={badge.id}>
                                <div class="contenedorH">
                                <div class="contenedorImg">
                                    <img className="avatar" src={badge.avatarUrl} alt=""/>
                                </div>
                                
                                <div class="contenedorInfo">
                                    <p>{badge.firstName}</p>
                                    <div className="twitter">
                                        <img src={twiter} alt=""/>
                                        <p>{badge.twitter}</p>
                                    </div>
                                    <p>{badge.jobTitle}</p>
                                </div>
                                
                                </div>
                                </li>
                                
                            
                        )
                    })}
                </ul>
            </div>
        )
    }
}
