import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import Header from '..'
import { configuraStore } from '../../../store'

describe('testes para o componente', () => {
  test('Deve renderizar corretamente', () => {
    render(
      <Provider store={configuraStore()}>
        <Header />
      </Provider>
    )
    expect(screen.getByText('EBAC Games')).toBeInTheDocument()
  })

  test('Deve renderizar com o carrinho', () => {
    const store = configuraStore({
      carrinho: {
        itens: [
          {
            id: 1,
            categoria: 'RPG',
            imagem: '',
            plataformas: ['Windows'],
            preco: 150.9,
            precoAntigo: 199.9,
            titulo: 'Elden Ring'
          },
          {
            id: 2,
            categoria: 'RPG',
            imagem: '',
            plataformas: ['Windows', 'MacOS', 'Linux'],
            preco: 250.9,
            precoAntigo: 399.9,
            titulo: 'Hogwarts Legacy'
          }
        ]
      }
    })

    render(
      <Provider store={store}>
        <Header />
      </Provider>
    )
    expect(screen.getByTestId('qtd-carrinho')).toHaveTextContent('2 itens')
  })
})
