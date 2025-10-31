import styled from 'styled-components'

type BotaoProps = {
  principal: boolean
  fontsize?: string
}

const Botao = styled.button<BotaoProps>`
  background-color: ${(props) => (props.principal ? 'blue' : 'gray')};
  font-size: ${(props) => props.fontsize || '16px'};
`

const BotaoPerigo = styled(Botao)`
  background-color: red;
  color: #fff;

  span {
    text-decoration: line-through;
  }
`

function Teste() {
  return (
    <>
      <Botao principal> Enviar </Botao>
      <Botao fontsize="14px" principal={false}>
        Cancelar
      </Botao>
      <BotaoPerigo as="a" principal>
        <span>Agora</span>
      </BotaoPerigo>
    </>
  )
}

export default Teste
