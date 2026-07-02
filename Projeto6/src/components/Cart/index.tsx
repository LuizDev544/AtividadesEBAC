import Button from '../Button'

export const Cart = () => (
  <div>
    <div></div>
    <aside>
      <ul>
        <li>
          <h3>Nome do Jogo</h3>
        </li>
      </ul>
      <p> quantidades </p>
      <p>
        {' '}
        Preço do bagui aqui <span> com desconto aqui </span>
      </p>
      <Button title="Clique aqui para realizar a compra" type="button">
        Continuar com a Compra
      </Button>
    </aside>
  </div>
)

export default Cart
