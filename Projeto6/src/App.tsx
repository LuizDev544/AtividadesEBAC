import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { GlobalCss } from './styles'
import Banner from './components/Banner'
import Header from './components/Header'
import Products from './components/Products'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Banner />
        <Products />
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
