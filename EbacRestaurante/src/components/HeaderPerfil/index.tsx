import { Link } from 'react-router-dom'
import { HeaderContainer, Content } from './styles'
import logo from '../../assets/images/logo.png'

const HeaderPerfil = () => (
  <HeaderContainer>
    <div className="container">
      <Content>
        <Link to="/">Restaurantes</Link>
        <img src={logo} alt="efood" />
        <span>0 produto(s) no carrinho</span>
      </Content>
    </div>
  </HeaderContainer>
)

export default HeaderPerfil
