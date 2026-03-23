import styled from 'styled-components'
import { Cores } from '../../styles'
import { Props } from '.'

export const TagContainer = styled.div<Props>`
  background-color: ${Cores.Salmao};
  color: ${Cores.BrancoClaro};
  font-size: ${'14px'};
  font-weight: bold;
  border-radius: 1px;
`
