import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import FiltroCard from '../../components/FiltroCard'
import * as S from './styles'
import { RootReducer } from '../../store'
import { alteraTermo } from '../../store/reducers/filtro'
import * as enums from '../../utils/enums/Tarefa'
import { Botao, Campo } from '../../styles'
import incompletoImg from '../../images/incompleto.png'
import completoImg from '../../images/completo.png'
import amigoImg from '../../images/Amigo.png'
import desconhecidoImg from '../../images/desconhecido.png'
import FamiliaImg from '../../images/familia.png'
import todosImg from '../../images/todos.png'

type Props = {
  mostrarFiltros: boolean
}

const BarraLateral = ({ mostrarFiltros }: Props) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { termo } = useSelector((state: RootReducer) => state.filtro)
  return (
    <S.Aside>
      <div>
        {mostrarFiltros ? (
          <>
            <Campo
              type="text"
              placeholder="Buscar"
              value={termo}
              onChange={(evento) => dispatch(alteraTermo(evento.target.value))}
            />
            <S.Filtros>
              <S.ImagemCentralizada>
                <img src={incompletoImg} alt="Incompleto" width={40} />
              </S.ImagemCentralizada>
              <FiltroCard
                valor={enums.Status.INCOMPLETO}
                criterio="status"
                legenda="Incompleto"
              />
              <S.ImagemCentralizada>
                <img src={completoImg} alt="Incompleto" width={40} />
              </S.ImagemCentralizada>
              <FiltroCard
                valor={enums.Status.COMPLETO}
                criterio="status"
                legenda="Completo"
              />
              <S.ImagemCentralizada>
                <img src={amigoImg} alt="Incompleto" width={40} />
              </S.ImagemCentralizada>
              <FiltroCard
                valor={enums.Prioridade.AMIGO}
                criterio="prioridade"
                legenda="Amigo"
              />
              <S.ImagemCentralizada>
                <img src={desconhecidoImg} alt="Incompleto" width={40} />
              </S.ImagemCentralizada>
              <FiltroCard
                valor={enums.Prioridade.DESCONHECIDO}
                criterio="prioridade"
                legenda="Desconhecido"
              />
              <S.ImagemCentralizada>
                <img src={FamiliaImg} alt="Incompleto" width={40} />
              </S.ImagemCentralizada>
              <FiltroCard
                valor={enums.Prioridade.FAMILIA}
                criterio="prioridade"
                legenda="Familia"
              />
              <S.ImagemCentralizada>
                <img src={todosImg} alt="Incompleto" width={50} />
              </S.ImagemCentralizada>
              <FiltroCard criterio="todas" legenda="Contatos" />
            </S.Filtros>
          </>
        ) : (
          <Botao onClick={() => navigate('/')}>
            Voltar a lista de Contatos
          </Botao>
        )}
      </div>
    </S.Aside>
  )
}

export default BarraLateral
