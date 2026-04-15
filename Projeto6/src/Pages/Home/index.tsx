import Banner from '../../components/Banner'
import ProductList from '../../components/ProductList'

const Home = () => (
  <>
    <Banner />
    <ProductList title="Promoções" background="gray" />
    <ProductList title="Novidades" background="black" />
  </>
)

export default Home
