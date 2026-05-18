import styled from 'styled-components'
import { Cores } from '../../styles'

export const BannerContainer = styled.div`
  width: 100%;
  height: 280px;
  display: block;
  position: relative;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  &::after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    content: '';
  }
`

export const Container = styled.div`
  z-index: 1;
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 32px 0;
  color: ${Cores.Branco};
`

export const Categoria = styled.span`
  font-size: 32px;
  font-weight: 100;
`

export const Nome = styled.h2`
  font-size: 32px;
  font-weight: 900;
`
