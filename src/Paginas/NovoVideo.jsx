import styled from "styled-components"
import Formulario from "../Components/Formulario"
import { useState } from "react"

const DivPrincipal = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    color: #fff;
    padding: 2rem;
    box-sizing:border-box;
`
const TituloFormulario = styled.span`
    display:flex;
    flex-direction: column;
    align-items: center;
    font-family: Roboto;
    gap: 10px;
    text-transform: uppercase;
    h1{
    	font-size: 60px;
        weight:900;
        margin:0;
    }
    h2{
    	font-size: 20px;
        weight:400;
        margin-bottom:3rem;
    }
`


const NovoVideo = () =>{
    const [videos, setVideos] = useState([])
    
    let aoNovoVideoCadastrado = (video) => {
        console.log (video)
        setVideos([...videos, video])
    }

    return (
        <DivPrincipal>

            <TituloFormulario>
                <h1>Novo Video</h1>
                <h2>Complete o formulário para criar um novo card de vídeo.</h2>
            </TituloFormulario>
            <Formulario aoVideoCadastrado={video => aoNovoVideoCadastrado(video)}/>

        </DivPrincipal>
    )

}
export default NovoVideo