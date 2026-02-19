import styled from 'styled-components'
import Fundo from '../../assets/images/Vector.png'
import Logo from '../../assets/images/logo.png'

export const HeaderContainer = styled.header`
  width: 100%;
  height: 384px;
  margin-top: -24px;
  background-image: url(${Fundo});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`
export const HeaderImage = styled.img`
  width: 125px;
  height: 57.5px;
  margin-top: 40px;
  margin-left: 621px;s
  background-image: url(${Logo});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`
