import styled from 'styled-components'
import { Cores } from '../../styles'

export const Section = styled.section`
  padding: 32px 0 120px;
  background-color: ${Cores.BegeClaro};
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 80px;
  row-gap: 48px;
  margin-top: 80px;
`
