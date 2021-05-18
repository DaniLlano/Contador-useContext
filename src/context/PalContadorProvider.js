import React, { useState } from 'react';
import { PalContador } from './PalContador';

function Dealer({children}) {

    const [contador, setContador] = useState(0);
    const [mensaje, setMensaje] = useState("");

    const sumarNumerito = () => {
            setContador(contador + 1)
            setMensaje("")
        }

    const restarNumerito = () => {
        if (contador === 0) {
            setMensaje("El número no puede ser menor a 0")
        return;
        }
        setContador(contador - 1)
    }

    const value = {
        contador,
        mensaje,
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
