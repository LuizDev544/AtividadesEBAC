import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Perfil from './Pages/Perfil'
import Footer from './components/Footer' // Importe o Footer aqui

const Rotas = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/perfil/:id" element={<Perfil />} />
    </Routes>
    <Footer />
  </BrowserRouter>
)

export default Rotas
