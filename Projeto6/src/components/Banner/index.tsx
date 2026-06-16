import { Imagem, Titulo, Preco } from './styles'
import bannerImg from '../../assets/images/banner-homem-aranha.png'
import Tag from '../Tag'
import Button from '../Button'
import { Game } from '../../Pages/Home'
import { useEffect, useState } from 'react'
import { formataPreco } from '../ProductList'

const Banner = () => {
  const [game, setGame] = useState<Game>()
  useEffect(() => {
    fetch('https://api-ebac.vercel.app/api/eplay/destaque')
      .then((res) => res.json())
      .then((res) => setGame(res))
  }, [])

  if (!game) {
    return <h3>Carregando...</h3>
  }

  return (
    <Imagem style={{ backgroundImage: `url(${game.media.cover})` }}>
      <div className="container">
        <Tag size="big">Destaque do dia</Tag>
        <div>
          <Titulo> {game.name} </Titulo>
          <Preco>
            De <span>{formataPreco(game.prices.old)}</span> <br />
            Por apenas {formataPreco(game.prices.current)}
          </Preco>
        </div>
        <Button
          type="link"
          to={`/product/${game.id}`}
          title="Clique aqui para aproveitar"
        >
          Aproveitar
        </Button>
      </div>
    </Imagem>
  )
}

export default Banner
