import styled from "styled-components"
import CampoTexto from "./CampoTexto"
import ListaSuspensa from './ListaSuspensa'
import Categoria from "../Categoria"
import Botao from "../Botao"

const FormBox = styled.form`
    display: flex;
    flex-direction: column;
    padding-top: 3rem;
    gap: 60px;
`   
const FormColunas = styled.div`
    display:flex; 
    align-items: center; 
    flex-wrap: wrap;
    gap:60px;
`

const SubTitulo = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-content: center;
hr{
    background-color: #262626;
    width:90vw;
    margin: 0;
    padding:0;
    height: 3px;
    border: 0px;
}

h3{
    display: flex;
    align-items: center;
    width: 322px;
    height: 75px;
    font-family: SourceSansPro;
    font-size: 36px;
    font-weight: 600;
    margin:0;
    padding:0;
}
`


const Formulario = ( ) => {
    const categorias = [
        'programaçao',
        'Front-end',
        'Data science',
        'Devops', 
        'Ux e Design', 
        'Mobile',
        'Inovação e Gestão'
    ]

    return (
        <section>
        <FormBox > 
            <SubTitulo>
                <hr/>
                <h3>
                    Criar Card
                </h3>
                <hr/>
            </SubTitulo>

        <FormColunas>
            <CampoTexto
                obrigatorio = {true}
                Label = "Titulo" 
                Placeholder = "Digite o Título do Vídeo" 
            />
            <ListaSuspensa 
                itens = {categorias}
                Label = "Categoria" 
                Placeholder = "Selecione uma Categoria" 
            />
            <CampoTexto
                obrigatorio = {true}
                Label = "Imagem" 
                Placeholder = "Digite o Endereço da imagem de Capa"
            />
            <CampoTexto
                obrigatorio = {true}
                Label = "Link" 
                Placeholder = "Digite o Endereço do Video"
            />
            <CampoTexto 
                obrigatorio = {true}
                Label = "Descrição" 
                Placeholder = "Digite a descrição do Video"
            />            
        </FormColunas>
        <FormColunas>
            <Botao>Limpar</Botao>
            <Botao>Enviar</Botao>
        </FormColunas>
        </FormBox>
        </section>

    )
}

export default Formulario