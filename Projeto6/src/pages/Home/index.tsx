import Banner from '../../components/Banner'
import { FoodList } from '../../components/FoodList'
import Restaurant from '../../models/Restaurants'
import PizzaMarGuerita from '../../assets/images/images/pizza.png'

const Pizzas: Restaurant[] = [
  {
    id: 1,
    descricao:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    imagem: PizzaMarGuerita,
    titulo: 'Pizza Marguerita'
  },
  {
    id: 2,
    descricao:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    imagem: PizzaMarGuerita,
    titulo: 'Pizza Marguerita'
  },
  {
    id: 3,
    descricao:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    imagem: PizzaMarGuerita,
    titulo: 'Pizza Marguerita'
  },
  {
    id: 4,
    descricao:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    imagem: PizzaMarGuerita,
    titulo: 'Pizza Marguerita'
  },
  {
    id: 5,
    descricao:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    imagem: PizzaMarGuerita,
    titulo: 'Pizza Marguerita'
  },
  {
    id: 6,
    descricao:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    imagem: PizzaMarGuerita,
    titulo: 'Pizza Marguerita'
  }
]

const Home = () => (
  <>
    <Banner />
    <FoodList games={Pizzas} backgroundColor="gray" />
    <FoodList games={Pizzas} backgroundColor="black" />
  </>
)

export default Home
