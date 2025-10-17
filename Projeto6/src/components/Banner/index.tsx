import bannerImg from '../../assets/images/images/fundoperfil.png'
import { Imagem , Título , Texto } from './styles'

const Banner = () => (
  <Imagem style={{ backgroundImage: `url(${bannerImg})` }}>
    <div className="container">
      <Título>Restaurantes</Título>
      <Texto>La Dolce Vita Trattoria</Texto>
    </div>
  </Imagem>
)

export default Banner
