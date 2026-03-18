import Product from '../Products'
import { Container, List } from './styles'

export type Props = {
  title: string
  background: 'gray' | 'black'
}

const ProductList = ({ background, title }: Props) => (
  <Container background={background}>
    <div className="container">
      <h2>{title}</h2>
      <List>
        <Product
          category="Ação"
          description="Teste"
          images="//placehold.it/222x250"
          infos={['-10%', 'R$ 150']}
          system="Windows"
          title="Jogo"
        />
        <Product
          category="Ação"
          description="Teste"
          images="//placehold.it/222x250"
          infos={['-10%', 'R$ 150']}
          system="Windows"
          title="Jogo"
        />
        <Product
          category="Ação"
          description="Teste"
          images="//placehold.it/222x250"
          infos={['-10%', 'R$ 150']}
          system="Windows"
          title="Jogo"
        />
        <Product
          category="Ação"
          description="Teste"
          images="//placehold.it/222x250"
          infos={['-10%', 'R$ 150']}
          system="Windows"
          title="Jogo"
        />
      </List>
    </div>
  </Container>
)

export default ProductList
