import React, { Component } from 'react'
import './styles/CicloDeVida.css'

export default class componentName extends Component {

    constructor(props){
        super(props);
        this.state = ({texto: 'Hola buen día'});
        console.log("Ciclo:Montaje/Paso: 1=Constructor");
    }

    //METODOS DE CICLO DE VIDA
    componentDidMount(){
        console.log("Ciclo:Montaje/Paso: 3: componentDidMount() =>Indico que estoy listo o que soy visible");
    }

    componentDidUpdate(){
        console.log("Ciclo:Actualización/Paso: 2.2: componentDidUpdate() =>Indico que he sido actualizado");
    }


    cambiTexto = ()=>{
        this.setState({texto: 'Oprimiste el botón'})
    }
    //METODOS DE CICLO DE VIDA_FIN

    render() {
        console.log("Ciclo:Montaje/Paso: 2=Render");
        return (
            <div className="bordes">
                <h1>Soy ciclo de vida</h1>
                <p>El ciclo de vida de un componente consiste en en 3 faces</p>
                <ul>
                    <li><b>Montaje</b> que contiene 3 fases</li>
                    <li><b>Actualizacion</b> que contiene 2 faces</li>
                    <li><b>Desmontaje</b> que contiene 1 face</li>
                </ul>
                <h2>{this.state.texto}</h2>
                <button onClick={this.cambiTexto}>boton</button>

                <p>Revisa la consola donde se imprime cada ciclo de vida seguida de su face respectivamente</p>
            </div>
        )
    }
}
