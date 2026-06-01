import Section from '../Section'
import zelda from '../../assets/images/zelda.png'
import howarts from '../../assets/images/fundo_hogwarts.png'
import play from '../../assets/images/play.png'
import zoom from '../../assets/images/zoom.png'
import { Items, Item, Action } from './styles'

type GalleryItem = {
  type: 'image' | 'video'
  url: string
}

const mock: GalleryItem[] = [
  {
    type: 'image',
    url: zelda
  },
  {
    type: 'image',
    url: howarts
  },
  {
    type: 'video',
    url: 'https://www.youtube.com/embed/BQR-3OFb_Cc?si=-K0MOHMzPCbffmQK'
  }
]

const Gallery = () => (
  <Section title="Galeria" background="black">
    <Items>
      {mock.map((media, index) => (
        <Item key={media.url}>
          <img src={media.url} alt={`Mídia ${index + 1} de Nome do Jogo`} />
          <Action>
            <img src={zoom} alt="CLique para maximizar a imagem" />
          </Action>
        </Item>
      ))}
    </Items>
  </Section>
)

export default Gallery
