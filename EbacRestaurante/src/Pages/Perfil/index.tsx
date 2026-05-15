import ProductList from '../../components/ProductList'
import Restaurantes from '../../models/Restaurantes'

const restaurantes: Restaurantes[] = [
  {
    id: 1,
    title: 'Pizza Margherita',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
    image: '',
    rating: 4.8,
    stars: 5,
    infos: 'Entrega rápida e sabor garantido',
  },
]

const Perfil = () => (
  <>
    <ProductList restaurantes={restaurantes} />
  </>
)

export default Perfil
