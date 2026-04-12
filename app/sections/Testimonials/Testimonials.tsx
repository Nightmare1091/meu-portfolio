"use client";
import { Quote } from 'lucide-react';

export function Testimonials() {
  const testimonials = [
    {
      name: "Fabiana Oliveira",
      role: "Empreendedora",
      text: "O João Pedro conseguiu traduzir exatamente o que eu precisava para o meu site clínico. A atenção aos detalhes técnicos e a performance final superaram minhas expectativas.",
    },
    {
      name: "Lucas Stival Ferreira",
      role: "Desenvolvedor de Software / Colega Acadêmico",
      text: "Trabalhei com o João em projetos de engenharia e a sua facilidade com lógicas complexas e automação é impressionante. É um desenvolvedor que entrega código limpo e soluções muito bem estruturadas.",
    },
    {
      name: "Ana Beatriz",
      role: "Estudante de Design / Colaboradora de Projetos",
      text: "O João demonstra um domínio raro em ferramentas de simulação e modelagem procedural. A sua capacidade de integrar o rigor da engenharia com a criatividade do design torna qualquer projeto muito mais robusto.",
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl mb-4">
            Depoimentos
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Recomendações de clientes e colegas sobre a qualidade dos projetos desenvolvidos.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="group bg-[var(--guara-gray)] p-8 rounded-xl hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-[var(--guara-primary)]"
            >
              {/* Icon / Quote */}
              <div className="mb-6 inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-[var(--guara-primary)] to-[var(--guara-secondary)] text-white">
                <Quote className="h-6 w-6" />
              </div>

              {/* Text */}
              <p className="text-gray-600 italic mb-6 leading-relaxed">
                "{t.text}"
              </p>

              {/* Author */}
              <div className="border-t border-gray-200 pt-4">
                <span className="block font-bold text-lg text-gray-900">
                  {t.name}
                </span>
                <span className="text-sm text-[var(--guara-primary)] font-medium">
                  {t.role}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}