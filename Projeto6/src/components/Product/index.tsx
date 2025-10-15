import Tag from '../Tag'
import { Card, Descricao, Titulo, Infos } from './styles'

export type Pros = {
  title: string
  category: string
  system: string
  description: string
  infos: string[]
  image: string
}

export const Product = ({
  title,
  category,
  system,
  description,
  infos,
  image
}: Pros) => (
  <Card>
    <img src={image} alt={title} />
    <Infos>
      {infos.map((info) => (
        <Tag key={info} size="small">
          {info}
        </Tag>
      ))}
    </Infos>
    <Titulo>{title}</Titulo>
    <Tag size="small">{category}</Tag>
    <Tag size="small">{system}</Tag>
    <Descricao>{description}</Descricao>
  </Card>
)

export default Product
