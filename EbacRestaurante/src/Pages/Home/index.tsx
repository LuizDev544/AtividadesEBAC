import Header from '../../components/Header'
import ProductList from '../../components/ProductList'
import Restaurantes from '../../models/Restaurantes'
import estrela from '../../assets/images/estrela.png'
import sushi from '../../assets/images/sushi.png'
import massa from '../../assets/images/massas.png'

const restaurantes: Restaurantes[] = [
  {
    id: 1,
    title: 'Hoki Sushi',
    rating: 4.9,
    stars: estrela,
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
    image: sushi,
    infos: ['Destaque da Semana', 'japonesa']
  },
  {
    id: 2,
    title: 'La Dolce Vita Trattorita',
    rating: 4.6,
    stars: estrela,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: massa,
    infos: ['Destaque da Semana', 'italiana']
  },
  {
    id: 3,
    title: 'La Dolce Vita Trattorita',
    rating: 4.6,
    stars: estrela,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: massa,
    infos: ['Destaque da Semana', 'italiana']
  },
  {
    id: 4,
    title: 'La Dolce Vita Trattorita',
    rating: 4.6,
    stars: estrela,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: massa,
    infos: ['Destaque da Semana', 'italiana']
  },
  {
    id: 5,
    title: 'La Dolce Vita Trattorita',
    rating: 4.6,
    stars: estrela,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: massa,
    infos: ['Destaque da Semana', 'italiana']
  },
  {
    id: 6,
    title: 'La Dolce Vita Trattorita',
    rating: 4.6,
    stars: estrela,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: massa,
    infos: ['Destaque da Semana', 'italiana']
  }
]

const Home = () => (
  <>
    <Header />
    <ProductList restaurantes={restaurantes} />
  </>
)

export default Home
