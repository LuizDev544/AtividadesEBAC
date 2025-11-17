import Projetos from './containers/Projetos'
import SideBar from './containers/SideBar'
import Sobre from './containers/Sobre'
import EstiloGlobal, { Container } from './styles'
import { ThemeProvider } from 'styled-components'
import temalight from './themes/light'
import temadark from './themes/dark'
import { useState } from 'react'

function App() {
  const [estaUsandoTemaDark, setEstaUsandoTemaDark] = useState(false)

  function trocaTema() {
    setEstaUsandoTemaDark(!estaUsandoTemaDark)
  }

  return (
    <ThemeProvider theme={estaUsandoTemaDark ? temadark : temalight}>
      <EstiloGlobal />
      <Container>
        <SideBar trocaTema={trocaTema} />
        <main>
          <Sobre />
          <Projetos />
        </main>
      </Container>
    </ThemeProvider>
  )
}

export default App
