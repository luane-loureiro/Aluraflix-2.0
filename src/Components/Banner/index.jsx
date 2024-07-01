import styled from "styled-components"


const BannerEstilizado = styled.div`
    box-sizing:content-box;
    width: 100vw;
    height: 730px;
    color:#fff;
    border: 3px solid #2271D1;
    flex-grow: 1;
    margin: 0;
    border-radius: 20px;
    max-width: 100%;
    display:flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding:0;

`
const BannerImg = styled.img `
    position: absolute;
    background-image: url('/imagens/player.png');
    background-size: 120%;
    background-position: center;
    border-radius: 20px;
    opacity: 0.4;
    width: 100vw;
    height: 100vh;
    
`
const SectionEstilizada = styled.section `
    position: relative;
    width: 100vw;
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 4rem;
    gap: 1rem;

`

const VideoDescricao = styled.div `
    width: 50%;

`
const BotaoBannerEstilizado = styled.a`
    height: 92px;
    width:296px;
    background-color: #6BD1FF;
    border-radius: 1rem;
    text-transform: uppercase;
    font-family: Roboto;
    color: #fff;
    font-size: 48px;
    font-weight: 800;
    text-align: center;
    padding: 1.3rem 1rem;
    `

const Banner = (props) =>{
 return (
    <BannerEstilizado >
        <BannerImg/>
        <SectionEstilizada>
            <VideoDescricao>
            <BotaoBannerEstilizado>Front-End</BotaoBannerEstilizado>
                <h1>{props.titulo}</h1>
                    <p>{props.texto}</p>
            </VideoDescricao>


            <iframe 
                width="646" 
                height="333" 
                src="https://www.youtube.com/embed/c8mVlakBESE?si=FKiD32SxHrQzqKFF" 
                title="SEO React" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowfullscreen>
            </iframe>
               
        </SectionEstilizada>
    </BannerEstilizado>
 ) 
}

export default Banner