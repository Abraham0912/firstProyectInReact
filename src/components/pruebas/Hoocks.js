import React, {useState} from 'react'

export default function Hoocks(props) {
    const [contador, setContador] = useState(0);

    const sumar  = ()=>{setContador(contador+1);}

    const restar  = ()=>{setContador(contador-1);}

    const saludar  = ()=>{alert("hola buen dia, desde hocks");}

    return (
        <div>
            <h1>Hoocks - useState</h1>
            <h2>Subtitulo:{props.titulo}</h2>
            <p>{contador}</p>
            <nav>
                <button onClick={restar}>Restar</button>
                <button onClick={sumar}>Sumar</button>
                <button onClick={saludar}>Saludar</button>
            </nav>
        </div>
    )
}

Hoocks.defaultProps ={titulo:'SOY defaultProps',}
