import React, { Component, Fragment} from 'react'
import { Link } from 'react-router-dom'
//ESTILOS:
import './styles/Badges.css'
//COMPONENTES:
import BadgesList from '../components/BadgesList'
//IMAGENES
import confLogo from '../images/badge-header.svg';

export default class Badges extends Component {
    

    
    constructor(props){
        super(props);
        console.log("1.-Soy el metodo: constructor() del ciclo de vida de un componenete => Inicio el valor del state");

        this.state = {
            data:[]
        }
    }

    componentDidMount(){
        console.log("3.-Soy el metodo: componentDidMount() del ciclo de vida de un componenete =>Indico que estoy listo o que soy visible");
        this.timeoutId=setTimeout(()=>{
            this.setState({
                data:[
                    {
                      id: "2de30c42-9deb-40fc-a41f-05e62b5939a7",
                      firstName: "Erika",
                      lastName: "Grady",
                      email: "Leann_Berge@gmail.com",
                      jobTitle: "Legacy Brand Director",
                      twitter: "FredaGrady22",
                      avatarUrl: "https://randomuser.me/api/portraits/women/22.jpg"
                    },
                    {
                      id: "d00d3614-101a-44ca-b6c2-0be075aeed3d",
                      firstName: "Yessenia",
                      lastName: "Rodriguez",
                      email: "Ilene66@hotmail.com",
                      jobTitle: "Human Research Architect",
                      twitter: "ajorRodriguez",
                      avatarUrl: "https://randomuser.me/api/portraits/women/35.jpg"
                    },
                    {
                      id: "63c03386-33a2-4512-9ac1-354ad7bec5e9",
                      firstName: "Daphne",
                      lastName: "Torphy",
                      email: "Ron61@hotmail.com",
                      jobTitle: "National Markets Officer",
                      twitter: "DaphneyTorphy",
                      avatarUrl: "https://randomuser.me/api/portraits/women/20.jpg"
                    }
                  ]
            })
        }, 3000);
    }


    componentDidUpdate(prevProps, prevState){
        console.log('5.-Soy em metodo; componentDidUpdate() del ciclo de vida de un componenete => Indico que el component ha sido actualizado');
        console.log({prevProps:prevProps,prevState:prevState});
        console.log({props:this.props,state:this.state});
    }

    componentWillUnmount(){
        console.log("6.-Soy el metodo componentWillUnmount del ciclo de vida de un componenete => Indico que ha finalizado el ciclo de vida del componenete");
        clearInterval(this.timeoutId);
    }

    render() {
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
