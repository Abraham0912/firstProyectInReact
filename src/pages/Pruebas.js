import React, { Fragment , Component } from 'react'
import CDV from '../components/pruebas/CicloDeVida.js'
import PeticionesAsincronas from '../components/pruebas/PeticionesAsincronasAJAXAPIs.js'

export default class Pruebas extends Component {

    state = {
          title: "Componente Pruebas.js",
          contador: 0,
        };
    
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

    saludar = (e)=>{
        alert(`Hola buen día`);
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
                <button onClick={this.saludar}>Saludar</button>
                <CDV></CDV>
                <PeticionesAsincronas></PeticionesAsincronas>
            </div>
            </Fragment>
        )
    }
}
