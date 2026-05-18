import { BannerContainer, Container, Categoria, Nome } from './styles'
import bannerImg from '../../assets/images/capaItaliana.png'

const BannerPerfil = () => (
  <BannerContainer style={{ backgroundImage: `url(${bannerImg})` }}>
    <div className="container" style={{ height: '100%' }}>
      <Container>
        <Categoria>Italiana</Categoria>
        <Nome>La Dolce Vita Trattoria</Nome>
      </Container>
    </div>
  </BannerContainer>
)

export default BannerPerfil
