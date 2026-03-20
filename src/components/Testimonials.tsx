import './Testimonials.css'

const testimonials = [
  {
    text: 'Espora ha revolucionado cómo trabajamos. Hemos automatizado el 60% de nuestras tareas repetitivas.',
    author: 'María García',
    role: 'CEO, TechStartup',
    image: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    text: 'La mejor inversión que hicimos este año. El ROI fue evidente en el primer mes.',
    author: 'Juan López',
    role: 'Director de Operaciones, GrowthCo',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    text: 'El soporte es increíble y la plataforma es muy intuitiva. Nuestro equipo lo adoptó en un día.',
    author: 'Ana Martínez',
    role: 'Gerente de Proyecto, InnovateTech',
    image: 'https://images.pexels.com/photos/2181690/pexels-photo-2181690.jpeg?auto=compress&cs=tinysrgb&w=400'
  }
]

export default function Testimonials() {
  return (
    <section className="testimonials" id="testimonials">
      <div className="container">
        <div className="section-header">
          <h2>Lo que dicen nuestros clientes</h2>
          <p>
            Más de 5,000 equipos confían en Espora para transformar su productividad
          </p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="stars">★★★★★</div>
              <p className="testimonial-text">"{testimonial.text}"</p>
              <div className="testimonial-author">
                <img
                  src={testimonial.image}
                  alt={testimonial.author}
                  className="author-image"
                />
                <div>
                  <p className="author-name">{testimonial.author}</p>
                  <p className="author-role">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
