import './Pricing.css'

const plans = [
  {
    name: 'Starter',
    price: '29',
    description: 'Perfecto para comenzar',
    features: [
      'Hasta 3 usuarios',
      '100 automatizaciones/mes',
      'Almacenamiento 5GB',
      'Soporte por email',
      'Integraciones básicas'
    ],
    cta: 'Comenzar'
  },
  {
    name: 'Professional',
    price: '79',
    description: 'Para equipos en crecimiento',
    features: [
      'Hasta 10 usuarios',
      'Automatizaciones ilimitadas',
      'Almacenamiento 100GB',
      'Soporte prioritario',
      'Integraciones avanzadas',
      'API acceso'
    ],
    cta: 'Comenzar',
    popular: true
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'Solución personalizada',
    features: [
      'Usuarios ilimitados',
      'Automatizaciones ilimitadas',
      'Almacenamiento ilimitado',
      'Soporte dedicado 24/7',
      'Integraciones personalizadas',
      'SLA garantizado'
    ],
    cta: 'Contactar ventas'
  }
]

export default function Pricing() {
  return (
    <section className="pricing" id="pricing">
      <div className="container">
        <div className="section-header">
          <h2>Planes y precios</h2>
          <p>
            Elige el plan perfecto para tu equipo. Todos incluyen 30 días de prueba gratuita.
          </p>
        </div>

        <div className="pricing-grid">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`pricing-card ${plan.popular ? 'popular' : ''}`}
            >
              {plan.popular && <div className="popular-badge">Más popular</div>}
              <h3>{plan.name}</h3>
              <p className="plan-description">{plan.description}</p>
              <div className="plan-price">
                <span className="currency">$</span>
                <span className="amount">{plan.price}</span>
                {plan.price !== 'Custom' && <span className="period">/mes</span>}
              </div>
              <button className={`btn btn-${plan.popular ? 'primary' : 'secondary'} w-full`}>
                {plan.cta}
              </button>
              <ul className="features-list">
                {plan.features.map((feature, i) => (
                  <li key={i}>
                    <span className="check">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
