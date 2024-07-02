import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Inicio from './Paginas/Inicio'
import NovoVideo from './Paginas/NovoVideo'
import Header from './Components/Header'
import EstilosGlobais from './Components/EstilosGlobais'
import styled from 'styled-components'
import RodaPe from './Components/Rodape'


const Fundo = styled.div`
  background: #191919;
  width: 100vw;
  min-height: 100vh;
  box-sizing: content-box;
`
const Content = styled.div`
  max-width: 100vw;
  min-height: 100vh;
  box-sizing: border-box;
`

function App() {

  return (
    <BrowserRouter>
      <EstilosGlobais/>
      <Fundo>
        <Header/>
        <Content>
          <Routes>
            <Route path="/" element={<Inicio/>} />
            <Route path="/NovoVideo" element={<NovoVideo/>}/>
            <Route path="*" element={<div>Pagina Não Encontrada</div>}/>
          </Routes>
        </Content>
      <RodaPe/>
      </Fundo>
    </BrowserRouter>
  )
}

export default App
