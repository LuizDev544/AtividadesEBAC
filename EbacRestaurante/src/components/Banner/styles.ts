import styled from 'styled-components'
import Fundo from '../../assets/images/Vector.png'
import Logo from '../../assets/images/logo.png'
import { Cores } from '../../styles'

export const HeaderContainer = styled.header`
  width: 100%;
  height: 384px;
  background-image: url(${Fundo});
  background-size: cover;
  background-repeat: no-repeat;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 40px 0 40px;
`

export const HeaderImage = styled.img.attrs({
  src: Logo
})`
  width: 125px;
  height: 57.5px;
`

export const Titulo = styled.h1`
  font-weight: 900;
  font-size: 36px;
  line-height: 42px;
  color: ${Cores.Salmao};
  text-align: center;
  max-width: 539px;
  margin-bottom: 40px;
`
