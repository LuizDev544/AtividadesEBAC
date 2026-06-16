import ProductList from '../../components/ProductList'
import resident from '../../assets/images/resident.png'
import diablo from '../../assets/images/diablo.png'
import zelda from '../../assets/images/zelda.png'
import starWars from '../../assets/images/star_wars.png'
import { Game } from '../Home'
import { useEffect, useState } from 'react'

const Categories = () => {
  const [gamesAcao, setGamesAcao] = useState<Game[]>([])
  const [gamesEsportes, setGamesEsportes] = useState<Game[]>([])
  const [gamesSimulacao, setGamesSimulacao] = useState<Game[]>([])
  const [gamesLuta, setGamesLuta] = useState<Game[]>([])
  const [gameRPG, setGamesRpg] = useState<Game[]>([])

  useEffect(() => {
    fetch('https://api-ebac.vercel.app/api/eplay/acao')
      .then((res) => res.json())
      .then((res) => setGamesAcao(res))
    fetch('https://api-ebac.vercel.app/api/eplay/esportes')
      .then((res) => res.json())
      .then((res) => setGamesEsportes(res))
    fetch('https://api-ebac.vercel.app/api/eplay/simulacao')
      .then((res) => res.json())
      .then((res) => setGamesSimulacao(res))
    fetch('https://api-ebac.vercel.app/api/eplay/luta')
      .then((res) => res.json())
      .then((res) => setGamesLuta(res))
    fetch('https://api-ebac.vercel.app/api/eplay/rpg')
      .then((res) => res.json())
      .then((res) => setGamesRpg(res))
  }, [])

  return (
    <>
      <ProductList
        games={gamesSimulacao}
        title="Simulação"
        background="black"
      />
      <ProductList games={gameRPG} title="RPG" background="gray" />
      <ProductList games={gamesAcao} title="Ação" background="black" />
      <ProductList games={gamesLuta} title="Luta" background="gray" />
      <ProductList games={gamesEsportes} title="Esportes" background="black" />
    </>
  )
}

export default Categories
