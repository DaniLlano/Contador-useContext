import React, { useReducer } from 'react';
import { PalContador } from './PalContador';

function Dealer({children}) {

    // const [contador, setContador] = useState(0);
    // const [mensaje, setMensaje] = useState("");

    // const sumarNumerito = () => {
    //         setContador(contador + 1)
    //         setMensaje("")
    //     }

    // const restarNumerito = () => {
    //     if (contador === 0) {
    //         setMensaje("El número no puede ser menor a 0")
    //     return;
    //     }
    //     setContador(contador - 1)
    // }

    const reducer = (estado, action) => {
        switch (action) {
            case "SUMAR":
                return {
                    ...estado,
                    error: null,
                    contadorcito: estado.contadorcito + 1
                };
            case "RESTAR":
                return {
                    ...estado,
                    error: estado.contadorcito === 0 ? "No se puede mas, rey" : null,
                    contadorcito: estado.contadorcito < 1 ? 0 : estado.contadorcito - 1
                };
        
            default:
                break;
        }
    }

    const estadoInicial = {
        contadorcito: 0,
        error: null
    }

    const [contador, dispatch] = useReducer(reducer, estadoInicial);

    const sumarNumerito = () => {
        dispatch("SUMAR")
    }

    const restarNumerito = () => {
        dispatch("RESTAR")
    }



    const value = {
        contador,
        sumarNumerito,
        restarNumerito,
    }

    return (
        <PalContador.Provider value={value}>
        {children}
        </PalContador.Provider>
    )

}

export default Dealer;
