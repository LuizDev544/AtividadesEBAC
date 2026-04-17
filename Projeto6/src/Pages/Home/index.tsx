import Banner from '../../components/Banner'
import ProductList from '../../components/ProductList'
import Game from '../../models/Game'
import resident from '../../assets/images/resident.png'
import diablo from '../../assets/images/diablo.png'
import zelda from '../../assets/images/zelda.png'
import starWars from '../../assets/images/star_wars.png'

const promocoes: Game[] = [
  {
    id: 1,
    category: 'Ação',
    description:
      'Resident Evil 4 Remake é um jogo de ação e aventura desenvolvido e publicado pela Capcom. É um remake do jogo original Resident Evil 4, lançado em 2005. O jogo segue a história de Leon S. Kennedy, um agente especial que é enviado para resgatar a filha do presidente dos Estados Unidos, que foi sequestrada por um culto misterioso na Europa.',
    title: 'Resident Evil 4 Remake',
    system: 'Windows',
    infos: ['10%', 'R$ 250,00'],
    image: diablo
  },
  {
    id: 2,
    category: 'Ação',
    description:
      'Resident Evil 4 Remake é um jogo de ação e aventura desenvolvido e publicado pela Capcom. É um remake do jogo original Resident Evil 4, lançado em 2005. O jogo segue a história de Leon S. Kennedy, um agente especial que é enviado para resgatar a filha do presidente dos Estados Unidos, que foi sequestrada por um culto misterioso na Europa.',
    title: 'Resident Evil 4 Remake',
    system: 'Windows',
    infos: ['10%', 'R$ 250,00'],
    image: resident
  },
  {
    id: 3,
    category: 'Ação',
    description:
      'Resident Evil 4 Remake é um jogo de ação e aventura desenvolvido e publicado pela Capcom. É um remake do jogo original Resident Evil 4, lançado em 2005. O jogo segue a história de Leon S. Kennedy, um agente especial que é enviado para resgatar a filha do presidente dos Estados Unidos, que foi sequestrada por um culto misterioso na Europa.',
    title: 'Resident Evil 4 Remake',
    system: 'Windows',
    infos: ['10%', 'R$ 250,00'],
    image: zelda
  },
  {
    id: 4,
    category: 'Ação',
    description:
      'Resident Evil 4 Remake é um jogo de ação e aventura desenvolvido e publicado pela Capcom. É um remake do jogo original Resident Evil 4, lançado em 2005. O jogo segue a história de Leon S. Kennedy, um agente especial que é enviado para resgatar a filha do presidente dos Estados Unidos, que foi sequestrada por um culto misterioso na Europa.',
    title: 'Resident Evil 4 Remake',
    system: 'Windows',
    infos: ['10%', 'R$ 250,00'],
    image: starWars
  }
]

const emBreve: Game[] = [
  {
    id: 5,
    category: 'RPG',
    description:
      'Diablo IV é um jogo de ação e RPG desenvolvido e publicado pela Blizzard Entertainment. É o quarto título principal da série Diablo e serve como uma sequência direta de Diablo III, lançado em 2012. O jogo se passa muitos anos após os eventos de Diablo III, em um mundo devastado por guerras e conflitos entre os reinos dos humanos, anjos e demônios.',
    title: 'Diablo IV',
    system: 'Windows',
    infos: ['17/05'],
    image: diablo
  },
  {
    id: 6,
    category: 'RPG',
    description:
      'Diablo IV é um jogo de ação e RPG desenvolvido e publicado pela Blizzard Entertainment. É o quarto título principal da série Diablo e serve como uma sequência direta de Diablo III, lançado em 2012. O jogo se passa muitos anos após os eventos de Diablo III, em um mundo devastado por guerras e conflitos entre os reinos dos humanos, anjos e demônios.',
    title: 'Diablo IV',
    system: 'Windows',
    infos: ['17/05'],
    image: diablo
  },
  {
    id: 7,
    category: 'RPG',
    description:
      'Diablo IV é um jogo de ação e RPG desenvolvido e publicado pela Blizzard Entertainment. É o quarto título principal da série Diablo e serve como uma sequência direta de Diablo III, lançado em 2012. O jogo se passa muitos anos após os eventos de Diablo III, em um mundo devastado por guerras e conflitos entre os reinos dos humanos, anjos e demônios.',
    title: 'Diablo IV',
    system: 'Windows',
    infos: ['17/05'],
    image: diablo
  },
  {
    id: 8,
    category: 'RPG',
    description:
      'Diablo IV é um jogo de ação e RPG desenvolvido e publicado pela Blizzard Entertainment. É o quarto título principal da série Diablo e serve como uma sequência direta de Diablo III, lançado em 2012. O jogo se passa muitos anos após os eventos de Diablo III, em um mundo devastado por guerras e conflitos entre os reinos dos humanos, anjos e demônios.',
    title: 'Diablo IV',
    system: 'Windows',
    infos: ['17/05'],
    image: diablo
  }
]

const Home = () => (
  <>
    <Banner />
    <ProductList games={promocoes} title="Promoções" background="gray" />
    <ProductList games={emBreve} title="Em Breve" background="black" />
  </>
)

export default Home
