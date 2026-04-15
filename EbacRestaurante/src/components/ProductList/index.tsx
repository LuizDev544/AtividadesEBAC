import Product from '../Products'
import { Section, List } from './styles'
import estrela from '../../assets/images/estrela.png'

const ProductList = () => (
  <Section>
    <div className="container">
      <List>
        <Product
          title="Hioki Sushi"
          description="Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida."
          image="https://via.placeholder.com/472x217"
          infos={['Destaque da semana', 'Japonesa']}
          rating={4.9}
          stars={estrela}
        />
        <Product
          title="La Dolce Vita Trattoria"
          description="A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida e sabor inesquecível."
          image="https://via.placeholder.com/472x217"
          infos={['Italiana']}
          rating={4.6}
          stars={estrela}
        />
      </List>
    </div>
  </Section>
)

export default ProductList
