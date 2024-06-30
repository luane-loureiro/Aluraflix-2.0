import styled from "styled-components";
import Video from "../Video";


const SectionEstilizada = styled.section `
    display: flex;
    flex-direction: Column;
    padding: 2rem;

`

const BoxVideo = styled.div `
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap:1rem;
    justify-content: space-between;
    margin: 2rem 0;

`

const BotaoCategoriaEstilizado = styled.button`
        height: 70px;
        width:430px;
        border-radius: 1rem;
        text-transform: uppercase;
        font-family: Roboto;
        color: #F5F5F5;
        font-size: 32px;
        font-weight: 800;
        text-align: center;

`



const Categoria = ({ nome, cor, videosDate }) => {
    return (
        (videosDate.length > 0) && <SectionEstilizada>

            <BotaoCategoriaEstilizado style={{ backgroundColor: cor }}>
                {nome}
            </BotaoCategoriaEstilizado>
            <BoxVideo style={{ borderColor: cor }}>
                {videosDate.map(video =>
                        <Video
                            key = {video.id}
                            titulo = {video.titulo}
                            linkUrl = {video.link}
                            categoria = {video.categoria}
                            cor = {cor}             
                        />
                )}
            </BoxVideo>
         
            
        </SectionEstilizada>

    )

}

export default Categoria