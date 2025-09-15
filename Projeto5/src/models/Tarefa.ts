import * as enums from '../utils/enums/Tarefa'

class Tarefa {
  titulo: string
  prioridade: enums.Prioridade
  status: enums.Status
  descricao?: string
  email?: string
  telefone?: string
  id: number

  constructor(
    titulo: string,
    prioridade: enums.Prioridade,
    status: enums.Status,
    id: number,
    descricao?: string,
    email?: string,
    telefone?: string
  ) {
    this.titulo = titulo
    this.prioridade = prioridade
    this.status = status
    this.descricao = descricao
    this.email = email
    this.telefone = telefone
    this.id = id
  }
}

export default Tarefa
