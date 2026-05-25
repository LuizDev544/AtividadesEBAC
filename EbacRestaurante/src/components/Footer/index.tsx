import { FooterContainer, Logo, LinksRedes, TextFooter } from './styles'

import logo from '../../assets/images/logo.png'
import instagram from '../../assets/images/instagram.png'
import facebook from '../../assets/images/facebook.png'
import twitter from '../../assets/images/twitter.png'

const Footer = () => (
  <FooterContainer>
    <Logo src={logo} alt="efood" />

    <LinksRedes>
      <li>
        <a href="#instagram">
          <img src={instagram} alt="Instagram" />
        </a>
      </li>
      <li>
        <a href="#facebook">
          <img src={facebook} alt="Facebook" />
        </a>
      </li>
      <li>
        <a href="#twitter">
          <img src={twitter} alt="Twitter" />
        </a>
      </li>
    </LinksRedes>

    <TextFooter>
      A efood é uma plataforma para divulgação de estabelecimentos, a
      responsabilidade pela entrega, qualidade dos produtos é toda do
      estabelecimento contratado.
    </TextFooter>
  </FooterContainer>
)

export default Footer
