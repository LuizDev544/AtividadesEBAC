import Tag from '../Tag'
import { Imagem, Descricao, Titulo, BotaoFood, ContainerFood } from './styles'

export type Props = {
  title: string
  category: string
  system: string
  description: string
  infos: string[]
  image: string
}

export const Product = ({ title, description, image }: Props) => (
  <ContainerFood>
    <Imagem src={image} />
    <Titulo>{title}</Titulo>
    <Descricao>{description}</Descricao>
    <BotaoFood>Comprar</BotaoFood>
  </ContainerFood>
)

export default Product
