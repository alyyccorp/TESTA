import './Hero.css'

export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero-container">
        <div className="hero-content">
          <h1>Soluciones inteligentes para tu negocio</h1>
          <p>
            Transforma tu forma de trabajar con Espora. Automatiza tareas,
            colabora en tiempo real y crece sin límites.
          </p>
          <div className="hero-buttons">
            <button className="btn btn-primary btn-large">
              Comenzar prueba gratis
            </button>
            <button className="btn btn-secondary btn-large">
              Ver demostración
            </button>
          </div>
          <p className="hero-subtitle">
            ✓ No requiere tarjeta de crédito
            {' '} ✓ Acceso completo por 30 días
            {' '} ✓ Soporte 24/7
          </p>
        </div>

        <div className="hero-image">
          <div className="image-placeholder">
            <img
              src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Equipo trabajando"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
