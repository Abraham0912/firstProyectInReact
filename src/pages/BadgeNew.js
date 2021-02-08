import React, { Component } from 'react'
//IMPORTANDO IMAGENES
import logo from '../images/badge-header.svg'
import avatar from '../images/img3.jpeg'
//IMPORTANDO ESTILOS
import './styles/BadgeNew.css'
//IMPORTANDO COMPONENTES
import Navbar from '../components/Navbar'
import Badge from '../components/Badge'
import BadgeForm from '../components/BadgeForm'

class BadgeNew extends Component {
    state = {form: {
        firstName:'',
        lastName:'',
        email:'',
        jobTitle:'',
        twiter:'',
    }};

    handleChange = (e)=>{
        this.setState({
            form:{
            ...this.state.form,
            [e.target.name]: e.target.value,
            },
        })
    }
    render() {
        return (
            <div>
                <Navbar/>
                <div className="BadgeNew__stars">
                    <img className="img-fluid" src={logo} alt="logo"/>
                </div>
                <div className="container">
                    <div className="Badge">
                    <Badge 
                    firstName={this.state.form.firstName}
                    lastName={this.state.form.lastName}
                    profession={this.state.form.jobTitle}
                    socialNetwork={this.state.form.twiter}
                    email={this.state.form.email}
                    avatar={avatar}/></div>

                    <div className="BadgeForm">
                    <BadgeForm onChange = {this.handleChange} formValues={this.state.form}/>
                    </div>

                </div>
                
            </div>
        )
    }
}

export default BadgeNew;