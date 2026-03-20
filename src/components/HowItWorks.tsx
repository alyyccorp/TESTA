import './HowItWorks.css'

const steps = [
  {
    number: '01',
    title: 'Registra tu cuenta',
    description: 'Crea tu cuenta en menos de 2 minutos con acceso inmediato.'
  },
  {
    number: '02',
    title: 'Configura tu workspace',
    description: 'Personaliza tu espacio de trabajo según tus necesidades.'
  },
  {
    number: '03',
    title: 'Invita a tu equipo',
    description: 'Añade miembros del equipo y define permisos fácilmente.'
  },
  {
    number: '04',
    title: 'Comienza a automatizar',
    description: 'Configura tus primeros flujos de trabajo y ahorra tiempo.'
  }
]

export default function HowItWorks() {
  return (
    <section className="how-it-works" id="how-it-works">
      <div className="container">
        <div className="section-header">
          <h2>Cómo funciona</h2>
          <p>
            Cuatro simples pasos para transformar tu forma de trabajar
          </p>
        </div>

        <div className="steps-container">
          {steps.map((step, index) => (
            <div key={index} className="step">
              <div className="step-number">{step.number}</div>
              <div className="step-content">
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="step-arrow">→</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
