import React, { Fragment , Component } from 'react'

export default class componentName extends Component {

    constructor() {
        super();
    
        this.state = {
          title: "Componente Pruebas.js",
          contador: 0,
        };
    }
    
    sumar = ()=>{
        this.setState({
            contador: this.state.contador+1,
        })
    }


    restar = ()=>{
        this.setState({
            contador: this.state.contador-1,
        })
    }

    render() {
        return (
            <Fragment>
            <div>
                <h1>{this.state.title}</h1>
                <h2>Eventos:</h2>
                <p>{this.state.contador}</p>
                <button onClick={this.sumar}>Sumar</button>
                <button onClick={this.restar}>Restar</button>
            </div>
            </Fragment>
        )
    }
}
