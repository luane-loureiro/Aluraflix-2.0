
import styled from "styled-components"
import Botao from "../Botao"

const NavEstilizado = styled.nav`
    display:flex;
    flex-direction: row;
    gap: 24px;
`


const HeaderEstilizado = styled.header`
    padding: 40px ;
    margin:0;
    display: flex;
    justify-content: space-between;
    max-height: 125px;
    background-color: #191919;   
    img {
        max-height: 40px;
    }
`
const LinksEstilizados = styled.a`
    width: 180px;
    height: 2rem;
    gap: 0px;
    border-radius: 10px;
    border: 2px solid #F5F5F5;
    margin-left: 12px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 1rem 2rem;
    background-color: transparent;
    color: #F5F5F5;
    font-size: 20px;
    font-Weight: 900;
    cursor: pointer;

    &:hover {
      border-color: #2271D1;
      box-shadow: 0px 0px 12px 4px #2271D1 inset;
      color: #2271D1;
    }
`

const Header = () =>{
    return (
    <HeaderEstilizado>
        <img src="/imagens/logo.png" alt="logo do Aluraflix" />
        <NavEstilizado>
            <LinksEstilizados href="\">Inicio</LinksEstilizados>
            <LinksEstilizados href="\NovoVideo">Novo Video</LinksEstilizados>
        </NavEstilizado>

    </HeaderEstilizado>
    )
}

export default Header