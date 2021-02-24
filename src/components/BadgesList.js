import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom';
//ESTILOS
import './styles/BadgesList.css'
//IMAGENES
import twiter from '../images/twiter-logo.png'

//Componenetes



export default class BadgesList extends Component {
    render() {
        if(this.props.badges.length===0){
            return(
                <div>
                    <h3>No encontramos ningun badge</h3>
                    <Link to="/badge/new" className="btn btn-primary">New badges</Link>
                </div>
            )
            
        }else{
            return (
            <div className="contenedorP">
                <ul>
                    {this.props.badges.map((badge)=>{
                        return(
                                <li className="listStyleNone" key={badge.id}>
                                <div className="contenedorH">
                                    <div className="contenedorImg">
                                        <img className="avatar" src={badge.image} alt=""/>
                                    </div>
                                    
                                    <div className="contenedorInfo">
                                        <p>{badge.firstName || badge.name}</p>
                                        <div className="twitter">
                                            <img src={twiter} alt=""/>
                                            <p>{badge.twitter || badge.gender}</p>
                                        </div>
                                        <p>{badge.jobTitle || badge.species}</p>
                                    </div>
                                
                                </div>
                                </li>
                        )
                    })}
                    <button onClick={this.props.funcion} className="btn btn-outline-success">Cargar mas xd</button>
                </ul>
            </div>
            
        )
        }
        
    }
}
