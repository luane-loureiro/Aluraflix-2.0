import styled from "styled-components"

const RodapeEstilizado = styled.footer`
    display:flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 125px;
    border-top: 4px solid #2271D1;
    background-color: #000; 
    img {
        max-height: 40px;
    }
`

const RodaPe = () => {
    return (
        <RodapeEstilizado>
            <img src ="/imagens/logo.png"/>
        </RodapeEstilizado>
    )
}

export default RodaPe