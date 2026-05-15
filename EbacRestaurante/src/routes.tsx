import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Categories from './Pages/Perfil'
import App from './App'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<App />} />
    <Route path="/categories" element={<Categories />} />
  </Routes>
)

export default Rotas
