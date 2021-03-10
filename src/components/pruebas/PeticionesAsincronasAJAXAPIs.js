import React, { Component } from 'react'
function Pokemon(props){
    return(
        <figure>
            <img src={props.avatar} alt={props.name}/>
            <figcaption>{props.name}</figcaption>
        </figure>
    )
}
export default class PeticionesAsincronas extends Component {
    state = {
        pokemon:[],
    }

    render() {
        return (
            <div>
                <h1>Componente: PeticionesAsíncronas(AJAX y API's)</h1>
            </div>
        )
    }
}
