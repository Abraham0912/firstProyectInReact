import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
//ESTILOS
import './global.css';
//COMPONENTES
import App from './components/App'


const container = document.getElementById('app');

ReactDOM.render(<App/>, container);
