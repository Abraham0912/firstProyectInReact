import React, { Component, Fragment} from 'react'
//IMPORTANDO IMAGENES
import logo from '../images/badge-header.svg'
//IMPORTANDO ESTILOS
import './styles/BadgeNew.css'
//IMPORTANDO COMPONENTES
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
            <Fragment>
               
                <div className="container">
                    <div className="Badge">
                    <Badge 
                    firstName={this.state.form.firstName || 'FirstName'}
                    lastName={this.state.form.lastName|| 'LastName'}
                    profession={this.state.form.jobTitle|| 'JobTitle'}
                    socialNetwork={this.state.form.twiter|| 'Twitter'}
                    email={this.state.form.email|| 'Email'}
                    avatar={'https://www.gravatar.com/avatar/82d4628e093cad1bdcfb24e5eecd815d?d=identicon'}/>
                    </div>

                    <div className="BadgeForm">
                    <BadgeForm onChange = {this.handleChange} formValues={this.state.form}/>
                    </div>

                </div>
                
            </Fragment>
        )
    }
}

export default BadgeNew;