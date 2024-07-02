import styled from "styled-components"
import CampoTexto from "./CampoTexto"
import ListaSuspensa from './ListaSuspensa'
import Botao from "../Botao"

import { useState } from "react"

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


const Formulario = ( {aoVideoCadastrado} ) => {
    const categorias = [
        'programaçao',
        'Front-end',
        'Data science',
        'Devops', 
        'Ux e Design', 
        'Mobile',
        'Inovação e Gestão'
    ]

    const [titulo, setTitulo] = useState('')
    const [imagem, setImagem] = useState('')
    const [link, setLink] = useState('')
    const [descricao, setDescricao] = useState('')
    const [categoria, setCategoria] = useState('')

    const aoSalvar = (evento) => {
        evento.preventDefault()
        aoVideoCadastrado({
            titulo, 
            categoria, 
            imagem,
            link,
            descricao
        })
    }
    return (
        <section>
        <FormBox onSubmit = {aoSalvar}> 
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
                valor = {titulo}
                aoAlterado={valor => setTitulo(valor)}
            />
            <ListaSuspensa 
                obrigatorio={true}
                itens = {categorias}
                Label = "Categoria" 
                valor = {categoria}
                aoAlterado = {valor => setCategoria(valor)}
            />
            <CampoTexto
                obrigatorio = {true}
                Label = "Imagem" 
                Placeholder = "Digite o Endereço da imagem de Capa"
                valor = {imagem}
                aoAlterado={valor => setImagem(valor)}
            />
            <CampoTexto
                obrigatorio = {true}
                Label = "Link" 
                Placeholder = "Digite o Endereço do Video"
                valor = {link}
                aoAlterado={valor => setLink(valor)}
            />
            <CampoTexto 
                obrigatorio = {true}
                Label = "Descrição" 
                Placeholder = "Digite a descrição do Video"
                valor = {descricao}
                aoAlterado={valor => setDescricao(valor)}
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