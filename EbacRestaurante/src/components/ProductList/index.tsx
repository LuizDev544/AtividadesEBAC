import Product from '../Products'
import { Container, List } from './styles'

const ProductList = () => (
  <Container>
    <div className="container">
      <List>
        <Product
          title="Hioki Sushi "
          description="Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!"
          images="placehold.it/472x217"
          infos={['Destaque de semana', 'Japonesa']}
          avaliable={1}
          stars="../assets/images/estrela.png"
        />
        <Product
          title="La Dolce Vita Trattoria"
          description="A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!"
          images="placehold.it/472x217"
          infos={['Ialiana']}
          avaliable={1}
          stars="../assets/images/estrela.png"
        />
        <Product
          title="La Dolce Vita Trattoria"
          description="A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!"
          images="placehold.it/472x217"
          infos={['Ialiana']}
          avaliable={1}
          stars="../assets/images/estrela.png"
        />
        <Product
          title="La Dolce Vita Trattoria"
          description="A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!"
          images="placehold.it/472x217"
          infos={['Ialiana']}
          avaliable={1}
          stars="../assets/images/estrela.png"
        />
        <Product
          title="La Dolce Vita Trattoria"
          description="A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!"
          images="placehold.it/472x217"
          infos={['Ialiana']}
          avaliable={1}
          stars="../assets/images/estrela.png"
        />
        <Product
          title="La Dolce Vita Trattoria"
          description="A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!"
          images="placehold.it/472x217"
          infos={['Ialiana']}
          avaliable={1}
          stars="../assets/images/estrela.png"
        />
      </List>
    </div>
  </Container>
)

export default ProductList
