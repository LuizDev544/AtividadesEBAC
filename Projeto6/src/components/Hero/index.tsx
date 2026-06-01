import bannerImg from '../../assets/images/fundo_hogwarts.png'
import Button from '../Button'
import Tag from '../Tag'
import { Banner, Infos } from './styles'

const Hero = () => (
  <Banner style={{ backgroundImage: `url(${bannerImg})` }}>
    <div className="container">
      <div>
        <Tag size="small">RPG</Tag>
        <Tag size="small">PS5</Tag>
      </div>
      <Infos>
        <h2>Hogwarts legacy</h2>
        <span>De R$ 250,00 </span>
        <p>Por R$ 190,00</p>
        <Button
          title="CLique aqui para adicionar esse jogo ao carrinho"
          type="button"
          variant="primary"
        >
          adicionar ao Carrinho
        </Button>
      </Infos>
    </div>
  </Banner>
)

export default Hero
