import Tag from '../Tag'
import Button from '../Button'
import {
  Card,
  ProductImage,
  Content,
  HeaderCard,
  Description,
  Infos
} from './styles'

type Props = {
  title: string
  rating: number
  stars: string
  description: string
  image: string
  infos: string[]
}

const Product = ({
  title,
  rating,
  stars,
  description,
  image,
  infos
}: Props) => (
  <Card>
    <ProductImage src={image} alt={title} />
    <Infos>
      {infos.map((info) => (
        <Tag key={info}>{info}</Tag>
      ))}
    </Infos>
    <Content>
      <HeaderCard>
        <h3>{title}</h3>
        <div>
          <span>{rating}</span>
          <img src={stars} alt="estrela" />
        </div>
      </HeaderCard>
      <Description>{description}</Description>
      <Button>Saiba mais</Button>
    </Content>
  </Card>
)

export default Product
