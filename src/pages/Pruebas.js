import React, { Fragment , Component } from 'react'

export default class componentName extends Component {

    sumar = ()=>{
        alert("Estoy sumando xD");
    }

    render() {
        return (
            <Fragment>
            <div>
                <h1>Componente Pruebas.js</h1>
                <button onClick={this.sumar}>Sumar</button>
                <button>Restar</button>
            </div>
            </Fragment>
        )
    }
}
