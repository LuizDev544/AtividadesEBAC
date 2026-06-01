import { useParams } from 'react-router-dom'
import Hero from '../../components/Hero'
import Section from '../../components/Section'
import Gallery from '../../components/Gallery'

const Product = () => {
  const { id } = useParams()

  return (
    <>
      <Hero />
      <Section title="Sobre o Jogo" background="black">
        <p>
          Howarts Legacy é um jogo de RPG desenvolvido pela Avalanche Software e
          publicado pela Warner Bros. Games. O jogo é ambientado no universo de
          Harry Harry Harry Harry Potter. O jogador assume o papel de um
          estudante da de Magia e Bruxaria de Hogwarts, onde pode explorar o
          castelo, aprender feitiços, criar poções e interagir com outros
          personagens. O jogo se passa no século XIX, antes dos eventos dos
          livros e filmes de Harry Potter, e apresenta uma história original que
          se desenrola à medida que o jogador avança no jogo.
        </p>
      </Section>
      <Section title="Mais Detalhes" background="gray">
        <p>
          <b>Plataforma:</b> PlayStation 5 <br />
          <b>Desenvolvedora:</b> Avalanche Software <br />
          <b>Editora:</b> Warner Bros. Games <br />
          <b>Idioma:</b> Português, Inglês, Espanhol, Francês, Alemão, Italiano
        </p>
      </Section>
      <Gallery />
    </>
  )
}

export default Product
