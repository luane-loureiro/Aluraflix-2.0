import styled from "styled-components";
const LabelEstilizada = styled.label`
        font-family: SourceSansPro;
        font-size: 20px;
        font-weight: 600;   
`
const SelectEstilizada = styled.select`
    display: flex;
    border: 3px solid #262626;
    border-radius: 10px;
    background-color: #191919;
    width: 100%;
    padding: .5rem;
    margin-top: .5rem;
    color: #a5a5a5;
    gap: .5rem;
    width: 40vw;
    padding: 1rem;

    option{
        display: block;
        border: 3px solid #262626;
        border-radius: 0 10px 10px 0;
        background-color: #191919;
        color: #a5a5a5;
        font-family: SourceSansPro;
        font-size: 20px;
        font-weight: 600;  
    }
    &:focus {
            color: #2271D1;
            outline: none;
            background-image:none;
            -webkit-box-shadow: none;
            -moz-box-shadow: none;
            box-shadow: none;
            border: 3px solid #2271D1;
        }
`

const ListaSuspensa = ({ Label, itens, obrigatorio, valor, aoAlterado }) => {
    return (
    <div>
        <LabelEstilizada>{Label}</LabelEstilizada>
        <SelectEstilizada 
            required = {obrigatorio}
            value = {valor}
            onChange ={evento => aoAlterado(evento.target.value)}
            > 

            {itens.map(item => {
                return(
                    <option key = {item}>
                        {item}
                    </option> 
                )
            })}
        </SelectEstilizada>
    </div>)
}

export default ListaSuspensa