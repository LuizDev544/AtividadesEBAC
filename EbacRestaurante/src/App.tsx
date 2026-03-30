import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Header } from './components/Header'
import ProductList from './components/ProductList'
import { GlobalCss } from './styles'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <ProductList />
      </>
    )
  }
])

function App() {
  return (
    <>
      <GlobalCss />
      <div className="container">
        <Header />
      </div>
      <RouterProvider router={rotas} />
    </>
  )
}

export default App
