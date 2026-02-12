import styled, { createGlobalStyle } from 'styled-components'

export const Cores = {
  cinza: '#333',
  preta: '#111',
  branca: '#EEEEEE',
  verde: '#10AC84'
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
    background-color: ${Cores.preta};
    color: ${Cores.branca};
    padding-top: 40px;
  }
`
export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
`
