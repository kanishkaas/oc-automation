import React from 'react'
import Navbar from './components/Navbar'
import './styles/index.css'
import Home from './pages/home'
import CartPage from './components/cartPage'

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"

function App() {
  return (
    <main>
      <Router>
        <Navbar />
        <Routes> 
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </Router>
    </main>
  )
}

export default App
