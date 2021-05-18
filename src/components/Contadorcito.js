import { useContext } from 'react';
import {PalContador} from '../context/PalContador';

function Contadorcito() {
    const valor = useContext(PalContador)

    return (
        <div>
            <button onClick={valor.sumarNumerito}>Sumar</button>
            <div>{valor.contador}</div>
            <button onClick={valor.restarNumerito}>Restar</button>
            <p>{valor.mensaje}</p>
        </div>
    )
}

export default Contadorcito
