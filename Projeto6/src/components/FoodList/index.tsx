import Restaurants from '../../models/Restaurants'
import Product from '../Food'
import { Container, List } from './styles'

export type Props = {
  title: string
  food: Restaurants[]
}

export const ProductList = ({ title, food }: Props) => (
  <Container>
    <div className="container">
      <h2>{title}</h2>
      <List>
        {food.map((item) => (
          <Product
            key={item.id}
            image={item.imagem}
            title={item.titulo}
            description={item.descricao}
          />
        ))}
      </List>
    </div>
  </Container>
)
