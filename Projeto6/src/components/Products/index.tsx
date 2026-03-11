import Tag from '../Tag'
import { Card, Descricao, Title } from './styles'

const Product = () => (
  <Card>
    <img src="//placehold.it/222x250" alt="" />
    <Title>Nome do jogo</Title>
    <Tag size="small">Categoria</Tag>
    <Tag size="small">Windows</Tag>
    <Descricao>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem
      autem explicabo illo. Iste quo, quae enim sequi perferendis, commodi
      ducimus, quas cupiditate assumenda eligendi soluta ipsum in minima id
      quibusdam.
    </Descricao>
  </Card>
)

export default Product
