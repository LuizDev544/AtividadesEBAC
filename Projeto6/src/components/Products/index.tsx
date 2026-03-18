import Tag from '../Tag'
import { Card, Descricao, Title, Infos } from './styles'

type props = {
  title: string
  category: string
  system: string
  description: string
  infos: string[]
  images: string
}

const Product = ({
  title,
  category,
  system,
  description,
  infos,
  images
}: props) => (
  <Card>
    <img src={images} alt={title} />
    <Infos>
      {infos.map((info) => (
        <Tag size="small" key={info}>
          {info}
        </Tag>
      ))}
    </Infos>
    <Title>{title}</Title>
    <Tag size="small">{category}</Tag>
    <Tag size="small">{system}</Tag>
    <Descricao>{description}</Descricao>
  </Card>
)

export default Product
