import ProductList from '../../components/ProductList'
import {
  useGetActionGamesQuery,
  useGetFightingGamesQuery,
  useGetSimulationGamesQuery,
  useGetRPGGamesQuery,
  useGetSportsGamesQuery
} from '../../Services/api'
import { Game } from '../Home'
import { useEffect, useState } from 'react'

const Categories = () => {
  const { data: gamesAcao } = useGetActionGamesQuery()
  const { data: gamesEsportes } = useGetSportsGamesQuery()
  const { data: gamesSimulacao } = useGetSimulationGamesQuery()
  const { data: gamesLuta } = useGetFightingGamesQuery()
  const { data: gamesRpg } = useGetRPGGamesQuery()

  if (gamesAcao && gamesEsportes && gamesSimulacao && gamesLuta && gamesRpg) {
    return (
      <>
        <ProductList
          games={gamesSimulacao}
          title="Simulação"
          background="black"
        />
        <ProductList games={gamesRpg} title="RPG" background="gray" />
        <ProductList games={gamesAcao} title="Ação" background="black" />
        <ProductList games={gamesLuta} title="Luta" background="gray" />
        <ProductList
          games={gamesEsportes}
          title="Esportes"
          background="black"
        />
      </>
    )
  }

  return <h3>Carregando...</h3>
}

export default Categories
