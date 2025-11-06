import Titulo from '../../components/Titulo'
import Paragrafo from '../../components/Paragrafo'
import { GithubSecao } from './styles'

const Sobre = () => (
  <>
    <section>
      <Titulo fontSize={16}>Sobre</Titulo>
      <Paragrafo tipo="secundario">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit
        natus in molestias officiis totam amet ullam provident, accusamus
        architecto saepe voluptatem eius numquam? Cum debitis distinctio quidem
        aliquam deserunt beatae.
      </Paragrafo>
    </section>
    <GithubSecao>
      <img src="https://github-readme-stats.vercel.app/api?username=LuizDev544&show_icons=true&count_private=true&hide_border=true&title_color=ffffff&icon_color=00bfbf&text_color=ffffff&bg_color=0d1117" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=LuizDev544&layout=compact&hide_border=true&title_color=ffffff&text_color=ffffff&bg_color=0d1117" />
    </GithubSecao>
  </>
)

export default Sobre
