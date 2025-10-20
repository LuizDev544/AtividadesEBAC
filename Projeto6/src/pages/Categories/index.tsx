import { RestaurantList } from '../../components/ResturantList'
import restaurants from '../../models/Restaurants'
import Massa from '../../assets/images/images/italiana.png'

const promocoes: Game[] = [
  {
    id: 1,
    category: 'Ação',
    description: 'Jogo de ação emocionante',
    title: 'Resident Evil 4',
    system: 'Windows',
    infos: ['10%', 'R$ 250,00'],
    image: Massa
  }
]

const Categories = () => (
  <>
    <ProductList games={promocoes} title="RPG" backgroundColor="gray" />
  </>
)

export default Categories