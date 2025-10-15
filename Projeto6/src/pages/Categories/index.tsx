import { ProductList } from '../../components/ProductList'
import Game from '../../models/Game'
import resident from '../../assets/images/images/resident.png'
import starwars from '../../assets/images/images/star_wars.png'
import zelda from '../../assets/images/images/zelda.png'
import diablo from '../../assets/images/images/diablo.png'

const promocoes: Game[] = [
  {
    id: 1,
    category: 'Ação',
    description: 'Jogo de ação emocionante',
    title: 'Resident Evil 4',
    system: 'Windows',
    infos: ['10%', 'R$ 250,00'],
    image: resident
  },
  {
    id: 2,
    category: 'Ação',
    description: 'Jogo de ação emocionante',
    title: 'Resident Evil 4',
    system: 'Windows',
    infos: ['10%', 'R$ 250,00'],
    image: diablo
  },
  {
    id: 3,
    category: 'Ação',
    description: 'Jogo de ação emocionante',
    title: 'Resident Evil 4',
    system: 'Windows',
    infos: ['10%', 'R$ 250,00'],
    image: zelda
  },
  {
    id: 4,
    category: 'Ação',
    description: 'Jogo de ação emocionante',
    title: 'Resident Evil 4',
    system: 'Windows',
    infos: ['10%', 'R$ 250,00'],
    image: starwars
  }
]

const emBreve: Game[] = [
  {
    id: 5,
    category: 'Rpg',
    description: 'Jogo de ação emocionante',
    title: 'Resident Evil 4',
    system: 'Windows',
    infos: ['10%', 'R$ 250,00'],
    image: resident
  },
  {
    id: 6,
    category: 'Rpg',
    description: 'Jogo de ação emocionante',
    title: 'Resident Evil 4',
    system: 'Windows',
    infos: ['10%', 'R$ 250,00'],
    image: resident
  },
  {
    id: 7,
    category: 'Rpg',
    description: 'Jogo de ação emocionante',
    title: 'Resident Evil 4',
    system: 'Windows',
    infos: ['10%', 'R$ 250,00'],
    image: resident
  },
  {
    id: 8,
    category: 'Rpg',
    description: 'Jogo de ação emocionante',
    title: 'Resident Evil 4',
    system: 'Windows',
    infos: ['10%', 'R$ 250,00'],
    image: resident
  }
]

const Categories = () => (
  <>
    <ProductList games={promocoes} title="RPG" backgroundColor="gray" />
    <ProductList games={emBreve} title="Ação" backgroundColor="black" />
    <ProductList games={promocoes} title="Aventura" backgroundColor="gray" />
    <ProductList games={emBreve} title="FPS" backgroundColor="black" />
  </>
)

export default Categories
