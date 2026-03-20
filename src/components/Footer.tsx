import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-section">
            <h4>Espora</h4>
            <p>
              Soluciones inteligentes para transformar tu negocio y acelerar el crecimiento.
            </p>
          </div>

          <div className="footer-section">
            <h4>Producto</h4>
            <ul>
              <li><a href="#features">Características</a></li>
              <li><a href="#pricing">Precios</a></li>
              <li><a href="#how-it-works">Cómo funciona</a></li>
              <li><a href="#">Integraciones</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Empresa</h4>
            <ul>
              <li><a href="#">Acerca de</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Carreras</a></li>
              <li><a href="#">Prensa</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Legal</h4>
            <ul>
              <li><a href="#">Privacidad</a></li>
              <li><a href="#">Términos</a></li>
              <li><a href="#">Seguridad</a></li>
              <li><a href="#">Contacto</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2024 Espora. Todos los derechos reservados.</p>
          <div className="social-links">
            <a href="#">Twitter</a>
            <a href="#">LinkedIn</a>
            <a href="#">GitHub</a>
            <a href="#">Facebook</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
