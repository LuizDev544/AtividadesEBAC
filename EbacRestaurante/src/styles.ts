import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'

export const Cores = {
  Salmao: '#E66767',
  Branco: '#FFFFFF',
  BrancoClaro: '#FFF8F2'
}

export const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${Cores.BrancoClaro};
    color: ${Cores.Salmao};
  }
`
export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
`
