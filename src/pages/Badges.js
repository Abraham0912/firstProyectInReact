import React, { Component, Fragment} from 'react'
import { Link } from 'react-router-dom'
//ESTILOS:
import './styles/Badges.css'
//COMPONENTES:
import BadgesList from '../components/BadgesList'
import api from '../api';
//IMAGENES
import confLogo from '../images/badge-header.svg';

export default class Badges extends Component {
    

    
    constructor(props){
        super(props);
        console.log("1.-Soy el metodo: constructor() del ciclo de vida de un componenete => Inicio el valor del state");

        this.state = {
            loading: true,
            error: null,
            data:[]
        }
    }

    componentDidMount(){
        console.log("3.-Soy el metodo: componentDidMount() del ciclo de vida de un componenete =>Indico que estoy listo o que soy visible");

        
        this.timeoutId=setTimeout(()=>{this.fetchData()},3000)

        this.timeoutId2=setTimeout(()=>{this.fetchData2()},6000)
    }




    fetchData = async()=>{
        this.setState({loading:true,error:null});
        try {
            const data= await api.badges.list();
            this.setState({loading:false,data: data})
        } catch (error) {
            this.setState({loading:false,error: error})
        }
    }


    fetchData2 = async()=>{
        const response = await fetch('https://rickandmortyapi.com/api/character');
        const data = await response.json();
        this.setState({loading:false,data: data.results})
    }




    componentDidUpdate(prevProps, prevState){
        console.log('5.-Soy el metodo; componentDidUpdate() del ciclo de vida de un componenete => Indico que el component ha sido actualizado');
        console.log({prevProps:prevProps,prevState:prevState});
        console.log({props:this.props,state:this.state});
    }

    componentWillUnmount(){
        console.log("6.-Soy el metodo componentWillUnmount del ciclo de vida de un componenete => Indico que ha finalizado el ciclo de vida del componenete");
        clearInterval(this.timeoutId);
        clearInterval(this.timeoutId2);
    }

    render() {
        if(this.state.loading === true){
            return 'Loading...'
        }

        if(this.state.error){
            return `el Error: es ${this.state.error.message}`
        }
        console.log("2/4.- Soy el metodo render() del ciclo de vida de un componenete => Pinto los elementos del componente");
        return (
            <Fragment>
                <div className="Badges">
                    <div className="Badges__hero">
                        <div className="Badges__container">
                            <img src={confLogo} alt=""/>
                        </div>
                    </div>
                </div>
                <div className="Badges__container">
                    <div className="Badges__buttons">
                        <Link to="/badge/new" className="btn btn-primary">New badges</Link>
                    </div>
                    <div className="Badges__list">
                        <div className="Badges__container">
                            <BadgesList badges={this.state.data}/>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}
