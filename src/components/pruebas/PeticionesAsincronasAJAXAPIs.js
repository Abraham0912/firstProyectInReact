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
        pokemons:[],
        contenido: false,
    }

    componentDidMount(){
        //Peticion asincrona
        let url = "https://pokeapi.co/api/v2/pokemon";
        fetch(url)
        .then(res => res.json())
        .then(json =>{
            console.log("Soy el metodo componentDidMouunt()");
            console.log(json);
            json.results.forEach(value=>{
                fetch(value.url)
                .then((res)=>res.json())
                .then((json)=>{
                    console.log(json);
                    let pokemon = {
                        id: json.id,
                        name: json.name,
                        avatar: json.sprites.front_default,
                    };

                    let pokemons = [...this.state.pokemons, pokemon];
                    this.setState({pokemons});
                })
            })
        })
        //Peticion asincrona_ FIN
    }

    verContenido = ()=>{
        this.setState({contenido:true,})
    }
    hideContenido = ()=>{
        this.setState({contenido:false,})
    }

    render() {
        return (
            <div>
                <h1>Componente: PeticionesAsíncronas(AJAX y API's)</h1>
                
                {this.state.contenido ==true ? (
                this.state.pokemons.map(value => <Pokemon key={value.id} name = {value.name} avatar={value.avatar}></Pokemon>)
                 ) :
                 <h1>Sin datos</h1>
                 }
                 <button onClick={this.verContenido}>ver contenido</button>
                 <button onClick={this.hideContenido}>Ofuscar-ocultar contenido</button>
                
            </div>
        )
    }
}
