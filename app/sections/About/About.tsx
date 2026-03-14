"use client";
import { Code2, Palette, Zap, Target } from 'lucide-react';

export function About() {
  const features = [
    {
      icon: Code2,
      title: 'Código Limpo',
      description: 'Desenvolvimento com as melhores práticas e tecnologias modernas',
    },
    {
      icon: Palette,
      title: 'Design Moderno',
      description: 'Interfaces intuitivas e atraentes que convertem visitantes em clientes',
    },
    {
      icon: Zap,
      title: 'Performance',
      description: 'Sites rápidos e otimizados para todos os dispositivos',
    },
    {
      icon: Target,
      title: 'Foco no Resultado',
      description: 'Soluções personalizadas para atingir seus objetivos de negócio',
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl mb-4">
            Sobre <span className="text-[var(--guara-primary)]">Guará Digital</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Desenvolvimento web profissional com foco em resultados. Transformo ideias em 
            experiências digitais de alto impacto.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-6 rounded-xl bg-[var(--guara-gray)] hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-[var(--guara-primary)]"
            >
              <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-[var(--guara-primary)] text-white group-hover:bg-[var(--guara-secondary)] transition-colors">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="inline-block p-8 rounded-2xl bg-gradient-to-br from-[var(--guara-gray)] to-white border border-gray-200">
            <p className="text-xl text-gray-700 max-w-3xl">
              Cada projeto é único e desenvolvido com atenção aos detalhes, 
              garantindo que sua presença digital se destaque no mercado.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
