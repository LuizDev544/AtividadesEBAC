import styled from 'styled-components'
import Fundo from '../../assets/images/Vector.png'
import Logo from '../../assets/images/logo.png'
import { Cores } from '../../styles'

export const HeaderContainer = styled.header`
  width: 100%;
  height: 384px;
  position: relative;
  background-image: url(${Fundo});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`

export const HeaderImage = styled.img.attrs({
  src: Logo
})`
  position: absolute;
  width: 125px;
  height: 57.5px;
  top: 40px;
  left: 50%;
  transform: translateX(-50%);
  opacity: 1;
`

export const Titulo = styled.h1`
  position: absolute;
  width: 519px;
  height: 84px;
  top: 236px;
  left: 500px;
  color: ${Cores.Salmao};
  text-align: center;
`
