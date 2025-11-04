import { Titulo as TituloStyle } from './styles'

export type Props = {
  children: string
  fontSize?: number
}

const Titulo = (props: Props) => (
  <TituloStyle fontSize={props.fontSize}>{props.children}</TituloStyle>
)

export default Titulo
