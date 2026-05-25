import styled from 'styled-components'
import { Cores } from '../../styles'

export const FooterContainer = styled.footer`
  background-color: ${Cores.Bege};
  padding: 40px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`

export const Logo = styled.img`
  margin-bottom: 32px;
`

export const LinksRedes = styled.ul`
  display: flex;
  gap: 8px;
  margin-bottom: 80px;
  list-style: none;
  padding: 0;

  li {
    display: inline;
  }

  img {
    width: 24px;
    height: 24px;
    cursor: pointer;
  }
`

export const TextFooter = styled.p`
  font-size: 10px;
  line-height: 12px;
  color: ${Cores.Salmao};
  text-align: center;
  max-width: 480px;
  width: 100%;
`
