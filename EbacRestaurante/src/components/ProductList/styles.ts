import styled from 'styled-components'
import { Cores } from '../../styles'

export const Container = styled.section`
  padding: 32px 0;
  background-color: ${Cores.BrancoClaro};
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 20px;
  marging-top: 440px;
`
