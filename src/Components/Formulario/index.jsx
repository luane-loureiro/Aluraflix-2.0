import styled from "styled-components"
import CampoTexto from "./CampoTexto"
import ListaSuspensa from './ListaSuspensa'

const FormBox = styled.form`
    display: flex;
    flex-direction: row;
    padding-top: 3rem;
    gap: 60px;
`   
const FormColunas = styled.div`
    display:flex;  
    flex-direction: column; 
    gap:60px;
    `
const SubTitulo = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-content: center;
hr{
    background-color: #262626;
    width:100%;
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


const Formulario = ({ categoria, categorias, aoSubmeter, valor, titulo, imagem, link  }) => {

    return (
        <section>
        <FormBox onSubmit={aoSubmeter}> 
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
                aoAlterado = {valor => setTitulo(valor)}
            />
            <ListaSuspensa 
                    obrigatorio = {true}
                    Label = "Categoria" 
                    itens = {categorias} 
                    valor = {categoria}
                    aoAlterado = {valor => setCategoria(valor)}
                />
            <CampoTexto 
                Label = "Descrição" 
                Placeholder = "Digite a Descrção do Vídeo"
                valor = {descricao}
                aoAlterado = {valor => setDescricao(valor)}
            />
        </FormColunas>
        <FormColunas>
            <CampoTexto 
                obrigatorio={true}
                Label = "Imagem do Video" 
                Placeholder = "Digite o Link da Imagem do Vídeo" 
                valor={imagem}
                aoAlterado={valor => setImagem(valor)}
            />
            <CampoTexto 
                obrigatorio={true}
                Label = "Link do Video" 
                Placeholder = "Digite o Link para o Vídeo"
                valor={link}
                aoAlterado={valor => setLink(valor)}

            />
            <button>Limpar</button>
            <button>Enviar</button>
        </FormColunas>
        </FormBox>
        </section>

    )
}

export default Formulario