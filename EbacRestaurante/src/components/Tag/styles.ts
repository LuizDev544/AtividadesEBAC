import styled from 'styled-components'
import { Props } from '.'
import { Cores } from '../../styles'

export const TagContainer = styled.div<Props>`
  background-color: ${Cores.Salmao};
  color: ${Cores.BrancoClaro};
  font-weight: Bold;
  font-size: ${'14px'};
  padding: ${'4px'} ${'6px'};
  display: inline-block;
`
