import Prato from '../../models/Prato'
import {
  List,
  Card,
  Imagem,
  Title,
  Description,
  ButtonCardapio
} from './styles'

type Props = {
  pratos: Prato[]
}

const CardapioList = ({ pratos }: Props) => (
  <div className="container">
    <List>
      {pratos.map((prato) => (
        <li key={prato.id}>
          <Card>
            <Imagem src={prato.image} alt={prato.title} />
            <Title>{prato.title}</Title>
            <Description>{prato.description}</Description>
            <ButtonCardapio>Adicionar ao carrinho</ButtonCardapio>
          </Card>
        </li>
      ))}
    </List>
  </div>
)

export default CardapioList
