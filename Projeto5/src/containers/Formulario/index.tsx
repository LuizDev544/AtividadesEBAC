import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { BotaoSalvar, MainContainer, Titulo } from '../../styles'
import { Campo } from '../../styles'
import { Form, Opcoes, Opcao } from './styles'
import * as enums from '../../utils/enums/Tarefa'
import { cadastrar } from '../../store/reducers/tarefas'

const Formulario = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [titulo, setTitulo] = useState('')
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')
  const [prioridade, setPrioridade] = useState<enums.Prioridade>(
    enums.Prioridade.DESCONHECIDO
  )

  const cadastrarTarefa = (evento: FormEvent) => {
    evento.preventDefault()
    dispatch(
      cadastrar({
        titulo,
        email,
        telefone,
        prioridade,
        status: enums.Status.INCOMPLETO
      })
    )
    navigate('/')
  }

  return (
    <MainContainer>
      <Titulo>Criando Novo Contato</Titulo>
      <Form onSubmit={cadastrarTarefa}>
        <Campo
          value={titulo}
          onChange={(evento) => setTitulo(evento.target.value)}
          type="text"
          placeholder="Nome Completo"
        />
        <Campo
          value={email}
          onChange={({ target }) => setEmail(target.value)}
          type="email"
          placeholder="Email de Contato"
        />
        <Campo
          value={telefone}
          onChange={({ target }) => setTelefone(target.value)}
          type="number"
          placeholder="Telefone de Contato"
        />
        <Opcoes>
          <p>Tipo do seu Contato</p>
          {Object.values(enums.Prioridade).map((valor) => (
            <Opcao key={valor}>
              <input
                value={valor}
                name="prioridade"
                type="radio"
                onChange={(evento) =>
                  setPrioridade(evento.target.value as enums.Prioridade)
                }
                id={valor}
                checked={prioridade === valor}
              />
              <label htmlFor={valor}>{valor}</label>
            </Opcao>
          ))}
        </Opcoes>
        <BotaoSalvar type="submit">Cadastrar Contato</BotaoSalvar>
      </Form>
    </MainContainer>
  )
}

export default Formulario
