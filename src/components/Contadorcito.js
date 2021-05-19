import { useContext } from 'react';
import {PalContador} from '../context/PalContador';
import styled from 'styled-components'

function Contadorcito() {
    const valor = useContext(PalContador)

    const StyledBtn = styled.button `
        padding: 10px;
        border-radius: 15px;
        cursor: pointer;
        outline: none;
        font-size: 15px;
        font-weight: bold;
        background: white;
        border: 2px solid ${props => props.brd === "palevioletred" ? "palevioletred" : "grey"};
        color: ${props => props.letra === "grey" ? "grey" : "palevioletred"};
    `

    const Container = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: #FFF;
    min-height: 100vh;
    `

    const Numerito = styled.h1 `
    margin: 40%;
    font-size: 5rem;
    `

    const MiniContainer = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    `

    return (
        <Container>
            <MiniContainer>
                <StyledBtn brd="palevioletred" letra="grey" onClick={valor.sumarNumerito}>Sumar</StyledBtn>
                <Numerito>{valor.contador.contadorcito}</Numerito>
                <StyledBtn brd="grey" letra="palevioletred" onClick={valor.restarNumerito}>Restar</StyledBtn>
            </MiniContainer>
            {valor.contador.error && <p>{valor.contador.error}</p>}
        </Container>
    )
}

export default Contadorcito
