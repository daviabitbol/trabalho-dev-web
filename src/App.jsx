import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { NotFound } from './pages/NotFound'
import { Home } from './pages/Home'
import { Layout } from './components/Layout'
import { About } from './pages/About'
import { Favorites } from './pages/Favorites'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
          <Route path="favorites" element={<Favorites />}/>
        </Route>
    </Routes>
  </BrowserRouter>
  )
}

export default App
