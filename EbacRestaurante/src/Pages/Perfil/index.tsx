import CardapioList from '../../components/CardapioList'
import Prato from '../../models/Prato'
import Marguerita from '../../assets/images/foodImage.png'
import HeaderPerfil from '../../components/HeaderPerfil'
import BannerPerfil from '../../components/BannerPerfil'

const cardapio: Prato[] = [
  {
    id: 1,
    title: 'Pizza Margherita',
    description:
      'A clássica Margherita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: Marguerita
  },
  {
    id: 2,
    title: 'Pizza Margherita',
    description:
      'A clássica Margherita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: Marguerita
  },
  {
    id: 3,
    title: 'Pizza Margherita',
    description:
      'A clássica Margherita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: Marguerita
  },
  {
    id: 4,
    title: 'Pizza Margherita',
    description:
      'A clássica Margherita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: Marguerita
  },
  {
    id: 5,
    title: 'Pizza Margherita',
    description:
      'A clássica Margherita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: Marguerita
  },
  {
    id: 6,
    title: 'Pizza Margherita',
    description:
      'A clássica Margherita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: Marguerita
  }
]

const Perfil = () => (
  <>
    <HeaderPerfil />
    <BannerPerfil />
    <CardapioList pratos={cardapio} />
  </>
)

export default Perfil
