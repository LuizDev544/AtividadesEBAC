import { Imagem } from './styles'
import bannerImg from '../../assets/images/banner-homem-aranha.png'

const Banner = () => {
  return <Imagem style={{ backgroundImage: `url(${bannerImg})` }} />
}

export default Banner
