import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './styles/BadgeForm.css'

export default class BadgeForm extends Component {
    /* handleChange = (e) =>{
        // console.log(e);
        // console.log({name: e.target.name});
        // console.log({value: e.target.value});
        this.setState({[e.target.name]:e.target.value,});
    } */

    handleClick = (e) =>{
        console.log("Button was click");
        console.log(this.state);
    }

    handleSubmit = (e) =>{
        e.preventDefault();
    }
    render() {
        return (
            <div className="BadgeForm_1">
                <h1>New user</h1>
                <form onSubmit={this.handleSubmit} autoComplete="off">
                    <div>
                        <label>First name</label>
                        <input onChange={this.props.onChange} className="form-control" name="firstName" type="text" value={this.props.firstName}/>
                        <label>Last name</label>
                        <input onChange={this.props.onChange} className="form-control" name="lastName" type="text" value={this.props.lastName}/>
                        <label>Email</label>
                        <input onChange={this.props.onChange} className="form-control" name="email" type="email" value={this.props.email}/>
                        <label>Job title</label>
                        <input onChange={this.props.onChange} className="form-control" name="jobTitle" type="text" value={this.props.jobTitle}/>
                        <label>Twiter</label>
                        <input onChange={this.props.onChange} className="form-control" name="twiter" type="text" value={this.props.twiter}/>
                        <br/>
                        <button onClick={this.handleClick} className="btn btn-primary">Aceptar</button>
                        <Link style={{marginLeft:'20px'}}to="/badges" className="btn btn-primary">Badges</Link>
                    </div>
                </form>
            </div>
        )
    }
}
