import { useState } from 'react'
import './Navigation.css'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="navbar">
      <div className="container nav-container">
        <div className="logo">
          <span className="logo-icon">🌿</span>
          <span className="logo-text">Espora</span>
        </div>

        <button
          className="menu-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <a href="#features" onClick={() => setIsMenuOpen(false)}>
            Características
          </a>
          <a href="#how-it-works" onClick={() => setIsMenuOpen(false)}>
            Cómo funciona
          </a>
          <a href="#pricing" onClick={() => setIsMenuOpen(false)}>
            Precios
          </a>
          <a href="#testimonials" onClick={() => setIsMenuOpen(false)}>
            Testimonios
          </a>
        </div>

        <div className="nav-buttons">
          <button className="btn btn-secondary">Iniciar sesión</button>
          <button className="btn btn-primary">Comenzar gratis</button>
        </div>
      </div>
    </nav>
  )
}
