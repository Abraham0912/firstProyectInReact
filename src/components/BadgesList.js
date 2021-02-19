import React, { Component } from 'react'
//ESTILOS
import './styles/BadgesList.css'
//IMAGENES
import twiter from '../images/twiter-logo.png'



export default class BadgesList extends Component {
    render() {
        return (
            <div className="contenedorP">
                <ul>
                    {this.props.badges.map((badge)=>{
                        return(
                                <li className="listStyleNone" key={badge.id}>
                                <div className="contenedorH">
                                <div className="contenedorImg">
                                    <img className="avatar" src={badge.avatarUrl} alt=""/>
                                </div>
                                
                                <div className="contenedorInfo">
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
