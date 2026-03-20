import './Features.css'

const features = [
  {
    icon: '⚡',
    title: 'Automatización inteligente',
    description: 'Automatiza flujos de trabajo repetitivos y ahorra horas cada semana.'
  },
  {
    icon: '🤝',
    title: 'Colaboración en tiempo real',
    description: 'Trabaja con tu equipo de manera sincronizada sin barreras.'
  },
  {
    icon: '📊',
    title: 'Análisis y reportes',
    description: 'Obtén insights profundos con dashboards personalizables.'
  },
  {
    icon: '🔒',
    title: 'Seguridad empresarial',
    description: 'Cumple con estándares de seguridad y privacidad internacionales.'
  },
  {
    icon: '🌍',
    title: 'Escalable globalmente',
    description: 'Crece sin preocuparte por limitaciones de infraestructura.'
  },
  {
    icon: '💡',
    title: 'IA integrada',
    description: 'Potencia tu trabajo con inteligencia artificial de última generación.'
  }
]

export default function Features() {
  return (
    <section className="features" id="features">
      <div className="container">
        <div className="section-header">
          <h2>Características poderosas</h2>
          <p>
            Todo lo que necesitas para transformar tu negocio en una plataforma moderna
          </p>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
