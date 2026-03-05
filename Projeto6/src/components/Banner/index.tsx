import { Imagem, Titulo, Preco } from './styles'
import bannerImg from '../../assets/images/banner-homem-aranha.png'
import Tag from '../Tag'

const Banner = () => {
  return (
    <Imagem style={{ backgroundImage: `url(${bannerImg})` }}>
      <div className="container">
        <Titulo> Marvel&apos;s Spider-Man: Miles Morales PS4 & PS5</Titulo>
        <Tag size="big">Destaque do dia</Tag>
        <Preco>
          De <span>R$ 250,00</span> <br />
          Por apenas R$ 99,00
        </Preco>
      </div>
    </Imagem>
  )
}

export default Banner
