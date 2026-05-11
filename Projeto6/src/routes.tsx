import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Categories from './Pages/Categories'
import App from './App'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/categories" element={<Categories />} />
  </Routes>
)

export default Rotas
