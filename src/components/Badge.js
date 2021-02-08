import React, { Component } from 'react'

import logo from '../images/logo.svg'

/*IMPORTANDO ESTILOS*/
import "./styles/Badge.css"

class Badge extends Component {
  render() {
    return (
      <div className="Contenedor">

        <div className="Contenedor__header">
          <img src={logo} alt="imagenxD"/>
        </div>


        <div>
          <div className="Contenedor__header__name">
            <img className="Contenedor__avatar"src={this.props.avatar} alt="avatarxD"/>
            <h2>{this.props.firstName} <br/> {this.props.lastName}</h2>
          </div>
          <div className="Contenedor__header__info" > 
            <p className="titleProfession">
              {this.props.profession}
            </p>
            <p className="Contenedor__header__socialNet">
              @{this.props.socialNetwork}
            </p>
            <p>dignissimos consequuntssssssssur provident ipsa iste qui tenetvident ipsa iste qur accusantium! Blanditiis.</p>
            {/*<Prueba/>*/}
          </div>
        </div>


        <div className="Contenedor__footer">
          <p>I AM FOOTER firstPageInReact </p> 
        </div>

      </div>
    )
  }
}
export default Badge;