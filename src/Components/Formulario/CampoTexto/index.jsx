import styled from "styled-components"

const DivEstilizada = styled.div`
    display: flex;
    flex-direction: Column;
    gap: .5rem;
    color: #fff;
    width: 40vw;
    padding: 1rem;
    label{
        font-family: SourceSansPro;
        font-size: 20px;
        font-weight: 600;   
    }
    input{
        display: block;
        border: 3px solid #262626;
        border-radius: 10px;
        background-color: #191919;
        width: 100%;
        padding: 1em;
        margin-top: .5em;
        color: #a5a5a5;

        &:focus {
            color: #2271D1;
            outline: none;
            background-image:none;
            background-color:transparent;
            -webkit-box-shadow: none;
            -moz-box-shadow: none;
            box-shadow: none;
            border: 3px solid #2271D1;
        }
    }
`
  

const CampoTexto = ({label, placeholder}) => {
    return(
        <DivEstilizada>
            <label>
                {label}
            </label>
            <input placeholder={placeholder}/>
        </DivEstilizada>

    )

}

export default CampoTexto