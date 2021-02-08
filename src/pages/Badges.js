import React, { Component } from 'react'
//ESTILOS:
import './styles/Badges.css'
//COMPONENTES:
import Navbar from '../components/Navbar'
import BadgesList from '../components/BadgesList'
//IMAGENES
import confLogo from '../images/badge-header.svg';

export default class Badges extends Component {
    state = {
        data:[
            {
              id: "2de30c42-9deb-40fc-a41f-05e62b5939a7",
              firstName: "Erika",
              lastName: "Grady",
              email: "Leann_Berge@gmail.com",
              jobTitle: "Legacy Brand Director",
              twitter: "FredaGrady22",
              avatarUrl: "https://randomuser.me/api/portraits/women/22.jpg"
            },
            {
              id: "d00d3614-101a-44ca-b6c2-0be075aeed3d",
              firstName: "Yessenia",
              lastName: "Rodriguez",
              email: "Ilene66@hotmail.com",
              jobTitle: "Human Research Architect",
              twitter: "ajorRodriguez",
              avatarUrl: "https://randomuser.me/api/portraits/women/35.jpg"
            },
            {
              id: "63c03386-33a2-4512-9ac1-354ad7bec5e9",
              firstName: "Daphne",
              lastName: "Torphy",
              email: "Ron61@hotmail.com",
              jobTitle: "National Markets Officer",
              twitter: "DaphneyTorphy",
              avatarUrl: "https://randomuser.me/api/portraits/women/20.jpg"
            }
          ]
    }
    render() {
        return (
            <div>
                <Navbar/>
                <div className="Badges">
                    <div className="Badges__hero">
                        <div className="Badges__container">
                            <img src={confLogo} alt=""/>
                        </div>
                    </div>
                </div>
                <div className="Badges__container">
                    <div className="Badges__buttons">
                        <a href="/badges/new" className="btn btn-primary">New badges</a>
                    </div>
                    <div className="Badges__list">
                        <div className="Badges__container">
                            <BadgesList badges={this.state.data}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
