import { Game } from '../../Pages/Home'
import Button from '../Button'
import Tag from '../Tag'
import { Banner, Infos } from './styles'
import { formataPreco } from '../ProductList'

type Props = {
  game: Game
}

const Hero = ({ game }: Props) => (
  <Banner style={{ backgroundImage: `url(${game.media.cover})` }}>
    <div className="container">
      <div>
        <Tag size="small">{game.details.category}</Tag>
        <Tag size="small">{game.details.system}</Tag>
      </div>
      <Infos>
        <h2>{game.name}</h2>
        <p>
          {game.prices.discount && (
            <span>De R$ {formataPreco(game.prices.old)}</span>
          )}
          {game.prices.current && <>Por {formataPreco(game.prices.current)}</>}
        </p>
        {game.prices.current && (
          <Button
            title="CLique aqui para adicionar esse jogo ao carrinho"
            type="button"
            variant="primary"
          >
            adicionar ao Carrinho
          </Button>
        )}
      </Infos>
    </div>
  </Banner>
)

export default Hero
