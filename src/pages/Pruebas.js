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
        alert("Estoy sumando xD");
    }

    render() {
        return (
            <Fragment>
            <div>
                <h1>{this.state.title}</h1>
                <p>{this.state.contador}</p>
                <button onClick={this.sumar}>Sumar</button>
                <button>Restar</button>
            </div>
            </Fragment>
        )
    }
}
