import { fireEvent, render, screen } from '@testing-library/react'
import App from './App'

describe('Teste para o componente principal', () => {
  test('Deve renderizar corretamente', () => {
    render(<App />)
    expect(screen.getByText('Cadastrar')).toBeInTheDocument()
  })

  test('Deve adiconar "estudar react" na lista de tarefas', () => {
    render(<App />)
    fireEvent.change(screen.getByText('campo-tarefa'), {
      target: {
        value: 'estudar react'
      }
    })
    fireEvent.click(screen.getByText('btn-cadastrar'))
    expect(screen.getByText('estudar react')).toBeInTheDocument()
  })
})
