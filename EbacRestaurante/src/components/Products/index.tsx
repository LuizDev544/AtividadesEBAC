type props = {
  title: string
  avaliable: number
  stars: string
  description: string
  images: string
  infos: string[]
}

const Product = ({
  title,
  avaliable,
  stars,
  description,
  images,
  infos
}: props) => (
  <Card>
    <img src={images} alt={title} />
    <Infos>
      {infos.map(info) => (
        <Tag size="small" key={info}>
            {info}
        </Tag>
      )}
    </Infos>
    <Title>{title}</Title>
    <Avaliable>{avaliable} disponíveis</Avaliable>
    <Stars>{stars}</Stars>
    <Description>{description}</Description>
  </Card>
)
