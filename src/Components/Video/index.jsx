import styled from "styled-components"

const CardEstilizado = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    text-transform: uppercase;
    border:3px solid;
    border-radius: 15px;
`

const DetalhesEstilizado = styled.span`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 2rem;
    position: 0;

`
const MolduraEstilizada = styled.div`
    border-radius: 15px 15px 0 0;
    width:436px ;
    height:260px ;
    position: absolute;
`

const IconeTextoBox = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: "432" ;
    gap: .5rem;
    font-family: Roboto;
    font-size: 16px;
    color: #fff;
`
const VideoEstilizado = styled.div`
width: "432" ;
height: "260" ;
    iframe{
        border: 2px solid;
        border-Radius: 13px 13px 0 0;
     }
`

const Video = ({cor, linkUrl, titulo}) => {
    return (
        <CardEstilizado style={{borderColor: cor}}>
            <MolduraEstilizada />
            <VideoEstilizado >
                <iframe 
                    style = {{borderColor: cor}}
                    width = "430" 
                    heigh = "258" 
                    src = {linkUrl}
                    title = {titulo} 
                    allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowfullscreen
                >
                </iframe> 

            </VideoEstilizado>

            <DetalhesEstilizado>
            <>
                <IconeTextoBox>
                    <img src="/imagens/Lixo.png"/>
                    <h2>Deletar</h2>
                </IconeTextoBox>

                <IconeTextoBox>
                    <img src="/imagens/Caneta.png"/>
                    <h2>Editar</h2>
                </IconeTextoBox>
                

            </>
            </DetalhesEstilizado>
        </CardEstilizado>

    )
}

export default Video

    