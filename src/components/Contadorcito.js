import { useContext } from 'react';
import {PalContador} from '../context/PalContador';
import './Contadorcito.css'

function Contadorcito() {
    const valor = useContext(PalContador)

    return (
        <div className="container">
            <div className="containerChikito">
                <button onClick={valor.sumarNumerito}>Sumar</button>
                <h1 className="numerito">{valor.contador.contadorcito}</h1>
                <button onClick={valor.restarNumerito}>Restar</button>
            </div>
            <p>{valor.contador.error}</p>
        </div>
    )
}

export default Contadorcito
