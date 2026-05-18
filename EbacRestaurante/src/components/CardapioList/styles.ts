import styled from 'styled-components'
import { Cores } from '../../styles'

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 32px;
  row-gap: 32px;
  margin-top: 56px;
  margin-bottom: 120px;
`

export const Card = styled.div`
  background-color: ${Cores.Salmao};
  color: ${Cores.Branco};
  padding: 8px;
  border: 1px solid ${Cores.Salmao};
`

export const Imagem = styled.img`
  width: 100%;
  height: 211px;
  object-fit: cover;
  display: block;
  margin-bottom: 8px;
`

export const Title = styled.h3`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 8px;
`

export const Description = styled.p`
  font-size: 14px;
  line-height: 22px;
  margin-bottom: 8px;
`

export const ButtonCardapio = styled.button`
  background-color: ${Cores.Bege};
  color: ${Cores.Salmao};
  border: none;
  padding: 4px 0;
  font-size: 14px;
  font-weight: bold;
  width: 100%;
  display: block;
  text-align: center;
  cursor: pointer;
  margin-top: 8px;
`
