import { createGlobalStyle } from 'styled-components'

export const Cores = {
  Salmao: '#E66767',
  Branco: '#FFFFFF',
  BrancoClaro: '#FFEBD9'
}

export const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    list-style: none;
  }

  body {
    background-color: ${Cores.BrancoClaro};
    color: ${Cores.Salmao};
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
  }
`
