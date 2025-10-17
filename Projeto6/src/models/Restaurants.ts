class Restaurants {
  id: number
  imagem: string
  titulo: string
  descricao: string

  constructor(id: number, descricao: string, imagem: string, titulo: string) {
    this.id = id
    this.descricao = descricao
    this.imagem = imagem
    this.titulo = titulo
  }
}

export default Restaurants
