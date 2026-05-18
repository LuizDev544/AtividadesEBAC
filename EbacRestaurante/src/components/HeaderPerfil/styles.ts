import styled from 'styled-components'
import fundo from '../../assets/images/Vector.png'

export const HeaderContainer = styled.header`
  background-image: url(${fundo});
  padding: 40px 0;
  display: flex;
  align-items: center;
`

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  a,
  span {
    font-size: 18px;
    font-weight: 900;
    color: #e66767;
    text-decoration: none;
  }
`
