import Product from '../Products'
import { Section, List } from './styles'
import Restaurantes from '../../models/Restaurantes'

export type Props = {
  restaurantes: Restaurantes[]
}

const ProductList = ({ restaurantes }: Props) => (
  <Section>
    <div className="container">
      <List>
        {restaurantes.map((restaurante) => (
          <Product
            key={restaurante.id}
            title={restaurante.title}
            rating={restaurante.rating}
            stars={restaurante.stars}
            description={restaurante.description}
            image={restaurante.image}
            infos={restaurante.infos}
          />
        ))}
      </List>
    </div>
  </Section>
)

export default ProductList
