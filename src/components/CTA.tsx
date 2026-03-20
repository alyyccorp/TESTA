import './CTA.css'

export default function CTA() {
  return (
    <section className="cta">
      <div className="container cta-container">
        <div className="cta-content">
          <h2>¿Listo para transformar tu negocio?</h2>
          <p>
            Únete a miles de equipos que ya están mejorando su productividad con Espora.
            Empieza tu prueba gratuita hoy, sin necesidad de tarjeta de crédito.
          </p>
          <div className="cta-buttons">
            <button className="btn btn-primary btn-large">
              Comenzar prueba gratis de 30 días
            </button>
            <button className="btn btn-secondary btn-large">
              Agendar demostración
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
