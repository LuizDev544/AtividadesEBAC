import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Perfil from './Pages/Perfil'

const Rotas = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/perfil/:id" element={<Perfil />} />
    </Routes>
  </BrowserRouter>
)

export default Rotas
