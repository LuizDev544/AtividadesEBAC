import Section from '../Section'
import zelda from '../../assets/images/zelda.png'
import howarts from '../../assets/images/fundo_hogwarts.png'
import fechar from '../../assets/images/fechar.png'
import play from '../../assets/images/play.png'
import zoom from '../../assets/images/zoom.png'
import { Items, Item, Action, Modal, ModalContent } from './styles'
import { useState } from 'react'
import { GalleryItem } from '../../Pages/Home'

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

type Props = {
  defaultCover: string
  name: string
}

interface ModalState extends GalleryItem {
  isVisible: boolean
}

const Gallery = ({ defaultCover, name }: Props) => {
  const [modalState, setModalState] = useState<ModalState>({
    type: 'image',
    url: '',
    isVisible: false
  })
  const getMediaCover = (Item: GalleryItem) => {
    if (Item.type === 'image') return Item.url
    return defaultCover
  }

  const getMediaIcon = (Item: GalleryItem) => {
    if (Item.type === 'image') return zoom
    return play
  }

  const closeModal = () => {
    setModalState({
      isVisible: false,
      type: 'image',
      url: ''
    })
  }

  return (
    <>
      <Section title="Galeria" background="black">
        <Items>
          {mock.map((media, index) => (
            <Item
              key={media.url}
              onClick={() => {
                setModalState({
                  isVisible: true,
                  type: media.type,
                  url: media.url
                })
              }}
            >
              <img
                src={getMediaCover(media)}
                alt={`Mídia ${index + 1} de ${name}`}
              />
              <Action>
                <img
                  src={getMediaIcon(media)}
                  alt="CLique para maximizar a mídia"
                />
              </Action>
            </Item>
          ))}
        </Items>
      </Section>
      <Modal className={modalState.isVisible ? 'visivel' : ''}>
        <ModalContent className="container">
          <header>
            <h4>{name}</h4>
            <img
              src={fechar}
              alt="Fechar"
              onClick={() => {
                closeModal()
              }}
            />
          </header>
          {modalState.type === 'image' ? (
            <img src={modalState.url} alt="Mídia" />
          ) : (
            <iframe frameBorder={0} src={modalState.url} />
          )}
        </ModalContent>
        <div
          className="overlay"
          onClick={() => {
            closeModal()
          }}
        ></div>
      </Modal>
    </>
  )
}

export default Gallery
