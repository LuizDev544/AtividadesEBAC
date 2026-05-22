import { Container, FooterSection, Link, Links, SectionTitle } from './styles'

const currentYear = new Date().getFullYear()

const Footer = () => (
  <Container>
    <div className="container">
      <FooterSection>
        <SectionTitle>Categorias</SectionTitle>
        <Links>
          <li>
            <Link href="#">RPG</Link>
          </li>
          <li>
            <Link href="#">Ação</Link>
          </li>
          <li>
            <Link href="#">Aventura</Link>
          </li>
          <li>
            <Link href="#">Esportes</Link>
          </li>
          <li>
            <Link href="#">Simulação</Link>
          </li>
          <li>
            <Link href="#">Estratégia</Link>
          </li>
          <li>
            <Link href="#">FPS</Link>
          </li>
        </Links>
      </FooterSection>
      <FooterSection>
        <SectionTitle>Acesso rápido</SectionTitle>
        <Links>
          <li>
            <Link href="#">Novidades </Link>
          </li>
          <li>
            <Link href="#">Promoções</Link>
          </li>
          <li>
            <Link href="#">Em Breve</Link>
          </li>
        </Links>
      </FooterSection>
      <p>{currentYear} - &copy; Todos os direitos reservados</p>
    </div>
  </Container>
)

export default Footer
