class Restaurante {
  title: string
  rating: number
  stars: string
  description: string
  image: string
  infos: string[]
  id: number

  constructor(
    id: number,
    title: string,
    rating: number,
    stars: string,
    description: string,
    image: string,
    infos: string[]
  ) {
    this.id = id
    this.title = title
    this.rating = rating
    this.stars = stars
    this.description = description
    this.image = image
    this.infos = infos
  }
}

export default Restaurante
