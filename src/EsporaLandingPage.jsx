import React from 'react';

const navLinks = [
  { label: 'Clubs', href: '#clubs' },
  { label: 'Kits', href: '#kits' },
  { label: 'Comunidad', href: '#comunidad' },
  { label: 'FAQ', href: '#faq' },
];

const clubs = [
  {
    name: 'Espora Robotics',
    description: 'Construir, automatizar y experimentar',
    icon: '◌',
  },
  {
    name: 'Espora Space',
    description: 'Explorar el universo, la ciencia y la imaginación',
    icon: '✦',
  },
  {
    name: 'Espora Creativa',
    description: 'Diseñar, imaginar y expresar ideas',
    icon: '◍',
  },
  {
    name: 'Espora Math',
    description: 'Pensar, resolver y modelar el mundo',
    icon: '◇',
  },
];

const steps = [
  'Elige tu club',
  'Aprende en sesiones online',
  'Construye proyectos y retos',
  'Comparte en showcases y comunidad',
];

const benefits = [
  'Aprendizaje basado en proyectos',
  'Comunidad y pertenencia',
  'Flexibilidad online',
  'Skills reales para el futuro',
  'Experiencia premium',
  'Creatividad + tecnología',
];

const faqs = [
  {
    q: '¿Espora es una escuela?',
    a: 'No. Espora es un ecosistema de clubs online enfocado en skills, proyectos y comunidad.',
  },
  {
    q: '¿Es solo para homeschoolers?',
    a: 'No. También está diseñado para familias after-school que buscan extracurriculars con propósito.',
  },
  {
    q: '¿Necesito comprar kit?',
    a: 'Es opcional. Puedes iniciar con experiencias online y sumar kits cuando quieras potenciar el aprendizaje hands-on.',
  },
  {
    q: '¿Qué edades pueden participar?',
    a: 'Hay rutas para niños y teens, con clubes organizados por etapa y nivel de reto.',
  },
  {
    q: '¿Las sesiones son en vivo?',
    a: 'Sí, combinamos sesiones en vivo con retos prácticos y comunidad digital activa.',
  },
  {
    q: '¿Habrá más clubs en el futuro?',
    a: 'Sí. Espora crece por temporadas con nuevos clubs y expansiones temáticas.',
  },
];

function SectionTitle({ eyebrow, title, subtitle }) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-espora-indigo">{eyebrow}</p>
      <h2 className="font-heading text-3xl font-bold leading-tight text-espora-black md:text-4xl">
        {title}
      </h2>
      {subtitle ? <p className="mt-4 text-base text-espora-gray md:text-lg">{subtitle}</p> : null}
    </div>
  );
}

function EsporaLandingPage() {
  return (
    <div className="bg-espora-bg font-body text-espora-black">
      <header className="sticky top-0 z-40 border-b border-black/5 bg-espora-bg/90 backdrop-blur">
        <nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
          <a href="#inicio" className="font-heading text-xl font-bold tracking-wide text-espora-black">
            ESPORA
          </a>
          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-semibold text-espora-indigo transition hover:text-espora-turquoise"
              >
                {link.label}
              </a>
            ))}
          </div>
          <a
            href="#waitlist"
            className="rounded-full bg-espora-black px-5 py-2.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-espora-indigo"
          >
            Quiero información
          </a>
        </nav>
      </header>

      <main id="inicio">
        <section className="relative overflow-hidden px-6 pb-20 pt-16 lg:px-10 lg:pt-24">
          <div className="pointer-events-none absolute -right-20 -top-24 h-80 w-80 rounded-full bg-espora-turquoise/25 blur-3xl" />
          <div className="pointer-events-none absolute bottom-4 left-0 h-64 w-64 rounded-full bg-espora-pink/10 blur-3xl" />
          <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
            <div>
              <p className="mb-4 inline-flex items-center rounded-full border border-espora-turquoise/30 bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-espora-indigo">
                Ecosistema de clubs online
              </p>
              <h1 className="font-heading text-4xl font-bold leading-tight text-espora-black md:text-6xl">
                Skills que germinan para el futuro.
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-zinc-600">
                Espora es un ecosistema de clubs online para mentes curiosas: proyectos, comunidad y kits
                creativos para desarrollar skills reales.
              </p>
              <p className="mt-4 text-sm font-medium text-espora-gray">
                Online skills clubs para homeschoolers y familias after-school en México.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#clubs"
                  className="rounded-full bg-espora-turquoise px-6 py-3 text-sm font-bold text-espora-black transition hover:-translate-y-0.5 hover:bg-espora-aqua"
                >
                  Explorar clubs
                </a>
                <a
                  href="#waitlist"
                  className="rounded-full border border-espora-indigo/30 bg-white px-6 py-3 text-sm font-bold text-espora-indigo transition hover:-translate-y-0.5 hover:border-espora-indigo"
                >
                  Unirme a la lista
                </a>
              </div>
            </div>
            <div className="relative h-[420px] rounded-[2rem] border border-white/70 bg-gradient-to-br from-espora-black via-espora-indigo to-espora-turquoise p-8 shadow-2xl shadow-black/20">
              <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-transparent via-espora-yellow/10 to-transparent" />
              <div className="relative grid h-full place-items-center">
                <div className="relative h-64 w-64">
                  <span className="absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white shadow-lg" />
                  {Array.from({ length: 14 }).map((_, i) => (
                    <span
                      key={i}
                      className="absolute left-1/2 top-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-espora-aqua"
                      style={{
                        transform: `translate(-50%, -50%) rotate(${i * 25.7}deg) translateY(-120px)`,
                        opacity: 0.35 + (i % 4) * 0.15,
                      }}
                    />
                  ))}
                  <div className="absolute inset-10 rounded-full border border-white/25" />
                  <div className="absolute inset-0 rounded-full border border-white/20" />
                </div>
                <p className="text-center font-heading text-lg font-semibold text-white/90">
                  Clubes online de skills y kits creativos para mentes curiosas.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 py-16 lg:px-10">
          <div className="mx-auto max-w-7xl rounded-3xl border border-black/5 bg-white p-8 shadow-sm md:p-12">
            <SectionTitle
              eyebrow="¿Qué es Espora?"
              title="Una experiencia de aprendizaje viva, flexible y orientada al futuro"
              subtitle="No somos escuela tradicional ni tutoría. Somos clubs online de skills con proyectos reales, comunidad digital y rutas creativas para construir pensamiento, criterio y autonomía."
            />
            <div className="grid gap-4 text-sm md:grid-cols-2">
              {['No escuela tradicional', 'No tutoría rígida', 'Sí skills reales', 'Sí aprendizaje por proyectos', 'Sí comunidad online', 'Sí creatividad + tecnología'].map(
                (item) => (
                  <div key={item} className="rounded-2xl bg-espora-bg p-4 font-medium text-espora-indigo">
                    {item}
                  </div>
                ),
              )}
            </div>
          </div>
        </section>

        <section id="clubs" className="px-6 py-16 lg:px-10">
          <div className="mx-auto max-w-7xl">
            <SectionTitle
              eyebrow="Clubs destacados"
              title="Rutas para explorar, construir y pensar en grande"
              subtitle="Cuatro clubs de lanzamiento para niñas, niños y teens curiosos."
            />
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {clubs.map((club) => (
                <article
                  key={club.name}
                  className="group rounded-3xl border border-black/5 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1.5 hover:shadow-lg"
                >
                  <div className="mb-5 inline-flex h-10 w-10 items-center justify-center rounded-full bg-espora-turquoise/15 font-heading text-xl text-espora-indigo transition group-hover:scale-110 group-hover:bg-espora-pink/15">
                    {club.icon}
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-espora-black">{club.name}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-espora-gray">{club.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-16 lg:px-10">
          <div className="mx-auto max-w-7xl rounded-3xl bg-espora-black p-8 text-white md:p-12">
            <SectionTitle
              eyebrow="Cómo funciona"
              title="Una secuencia clara para aprender haciendo"
              subtitle="Diseñado para mantener motivación, progreso y sentido de pertenencia."
            />
            <ol className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {steps.map((step, index) => (
                <li key={step} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-espora-aqua">Paso 0{index + 1}</p>
                  <p className="mt-3 font-semibold text-white">{step}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="kits" className="px-6 py-16 lg:px-10">
          <div className="mx-auto grid max-w-7xl gap-8 rounded-3xl border border-black/5 bg-white p-8 shadow-sm md:grid-cols-2 md:p-12">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-espora-indigo">Kits Espora</p>
              <h2 className="mt-3 font-heading text-3xl font-bold text-espora-black md:text-4xl">
                Kits creativos para aprender construyendo desde casa.
              </h2>
              <p className="mt-5 text-espora-gray">
                Basados en Arduino + foamboard, con un kit base y expansiones temáticas para Robotics,
                Space, STEM, Math y Biotech.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {['Kit base', 'Módulo Robotics', 'Módulo Space', 'Módulo Biotech'].map((item, i) => (
                <div
                  key={item}
                  className="rounded-2xl border border-espora-turquoise/20 bg-espora-bg p-4 transition hover:border-espora-turquoise"
                >
                  <span className="text-xs font-semibold uppercase tracking-[0.16em] text-espora-gray">0{i + 1}</span>
                  <p className="mt-2 font-semibold text-espora-indigo">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="comunidad" className="px-6 py-16 lg:px-10">
          <div className="mx-auto max-w-7xl">
            <SectionTitle
              eyebrow="Comunidad"
              title="Energía colectiva para crear, compartir y crecer"
              subtitle="Una comunidad digital activa entre contenido, retos, lives y showcases para celebrar cada avance."
            />
            <div className="grid gap-4 md:grid-cols-3">
              {['YouTube', 'TikTok', 'Instagram', 'Lives', 'Retos', 'Showcases + comunidad digital'].map((item, i) => (
                <div
                  key={item}
                  className="rounded-2xl border border-black/5 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-espora-gray">Canal 0{i + 1}</p>
                  <p className="mt-2 font-heading text-xl font-semibold text-espora-indigo">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-16 lg:px-10">
          <div className="mx-auto max-w-7xl">
            <SectionTitle
              eyebrow="Por qué Espora"
              title="Un ecosistema premium para familias que buscan más"
            />
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {benefits.map((item) => (
                <article key={item} className="rounded-2xl border border-black/5 bg-white p-5 shadow-sm">
                  <p className="font-semibold text-espora-indigo">{item}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="waitlist" className="px-6 py-16 lg:px-10">
          <div className="mx-auto max-w-4xl rounded-3xl border border-black/5 bg-white p-8 shadow-sm md:p-12">
            <SectionTitle
              eyebrow="Lista de espera"
              title="Recibe información de apertura y nuevos clubs"
            />
            <form className="grid gap-4 md:grid-cols-2">
              <label className="text-sm font-medium text-espora-indigo">
                Nombre
                <input
                  type="text"
                  className="mt-2 w-full rounded-xl border border-black/10 bg-espora-bg px-4 py-3 text-sm outline-none transition focus:border-espora-turquoise"
                  placeholder="Tu nombre"
                />
              </label>
              <label className="text-sm font-medium text-espora-indigo">
                Email
                <input
                  type="email"
                  className="mt-2 w-full rounded-xl border border-black/10 bg-espora-bg px-4 py-3 text-sm outline-none transition focus:border-espora-turquoise"
                  placeholder="tucorreo@ejemplo.com"
                />
              </label>
              <label className="text-sm font-medium text-espora-indigo">
                Edad de tu hijo/a
                <input
                  type="text"
                  className="mt-2 w-full rounded-xl border border-black/10 bg-espora-bg px-4 py-3 text-sm outline-none transition focus:border-espora-turquoise"
                  placeholder="Ej. 8, 12 o 15"
                />
              </label>
              <label className="text-sm font-medium text-espora-indigo">
                Intereses
                <input
                  type="text"
                  className="mt-2 w-full rounded-xl border border-black/10 bg-espora-bg px-4 py-3 text-sm outline-none transition focus:border-espora-turquoise"
                  placeholder="Robotics, Space, Creatividad..."
                />
              </label>
              <button
                type="submit"
                className="mt-2 rounded-full bg-espora-turquoise px-6 py-3 text-sm font-bold text-espora-black transition hover:-translate-y-0.5 hover:bg-espora-aqua md:col-span-2"
              >
                Unirme a la lista
              </button>
            </form>
          </div>
        </section>

        <section id="faq" className="px-6 py-16 lg:px-10">
          <div className="mx-auto max-w-5xl">
            <SectionTitle eyebrow="FAQ" title="Preguntas frecuentes" />
            <div className="space-y-4">
              {faqs.map((item) => (
                <details key={item.q} className="group rounded-2xl border border-black/5 bg-white p-5 shadow-sm">
                  <summary className="cursor-pointer list-none font-semibold text-espora-indigo">
                    {item.q}
                    <span className="float-right text-espora-turquoise transition group-open:rotate-45">＋</span>
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-espora-gray">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 pb-20 pt-16 lg:px-10">
          <div className="mx-auto max-w-7xl rounded-3xl bg-espora-black p-10 text-white md:p-14">
            <h2 className="font-heading text-3xl font-bold md:text-5xl">Cultivar inteligencia viva</h2>
            <p className="mt-4 max-w-2xl text-white/75">
              Únete a una nueva generación de aprendizaje online: clubs, proyectos, comunidad y creación con propósito.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#waitlist"
                className="rounded-full bg-espora-turquoise px-6 py-3 text-sm font-bold text-espora-black transition hover:-translate-y-0.5 hover:bg-espora-aqua"
              >
                Recibir información
              </a>
              <a
                href="#clubs"
                className="rounded-full border border-white/20 px-6 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:border-espora-yellow hover:text-espora-yellow"
              >
                Ver clubs
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-black/5 bg-white px-6 py-10 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-4">
          <div className="md:col-span-2">
            <p className="font-heading text-2xl font-bold text-espora-black">ESPORA</p>
            <p className="mt-3 max-w-md text-sm text-espora-gray">
              Ecosistema de clubs online y kits creativos para familias curiosas que quieren aprender haciendo.
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-espora-indigo">Navegación</p>
            <ul className="mt-3 space-y-2 text-sm text-espora-gray">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="transition hover:text-espora-turquoise">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-espora-indigo">Contacto</p>
            <ul className="mt-3 space-y-2 text-sm text-espora-gray">
              <li>Instagram (placeholder)</li>
              <li>YouTube (placeholder)</li>
              <li>TikTok (placeholder)</li>
              <li>hola@espora.mx</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default EsporaLandingPage;
