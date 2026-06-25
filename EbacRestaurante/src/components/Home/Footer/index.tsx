import logo from '../../../assets/logo.png'
import instagram from '../../../assets/instagram.png'
import facebook from '../../../assets/facebook.png'
import twitter from '../../../assets/twitter.png'
import { FooterContainer, FooterInfo, FooterUl } from './styles'

export function Footer() {
  return (
    <FooterContainer>
      <img src={logo} alt="efood" />
      <FooterUl>
        <li>
          <img src={instagram} alt="Instagram" />
        </li>
        <li>
          <img src={facebook} alt="Facebook" />
        </li>
        <li>
          <img src={twitter} alt="Twitter" />
        </li>
      </FooterUl>
      <FooterInfo>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade dos produtos é toda do
        estabelecimento contratado.
      </FooterInfo>
    </FooterContainer>
  )
}
