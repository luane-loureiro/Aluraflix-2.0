import { styled } from "styled-components"

const BotaoEstilizado = styled.a`
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
const Botao = (texto) => {
  return (
    <BotaoEstilizado>
      {texto}
    </BotaoEstilizado>
  )
}
export default Botao