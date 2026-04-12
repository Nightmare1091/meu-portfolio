"use client";
import { User, GraduationCap, Code, Rocket } from 'lucide-react';

export function AboutMe() {
  const journey = [
    {
      icon: Code,
      title: 'Trajetória Técnica',
      description: 'Iniciei na programação aos 12 anos. Hoje, domino tecnologias como C#, C++, Java e o ecossistema Full Stack.',
    },
    {
      icon: GraduationCap,
      title: 'Formação Acadêmica',
      description: 'Graduando em Engenharia de Software pelo UniCEUB, unindo teoria acadêmica à prática do mercado.',
    },
    {
      icon: User,
      title: 'Perfil Profissional',
      description: 'Focado em transformar problemas complexos em soluções digitais elegantes e de alta performance.',
    },
    {
      icon: Rocket,
      title: 'Fundador da Guará',
      description: 'Criador da Guará Digital, onde aplico engenharia de software para elevar o nível de presença online de clientes.',
    },
  ];

  return (
    <section id="aboutme" className="py-20 bg-[var(--guara-gray)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho da Seção - Atende ao requisito de Perfil Pessoal */}
        <div className="flex flex-col md:flex-row items-center gap-12 mb-16">
          <div className="w-48 h-48 rounded-2xl bg-[var(--guara-primary)] overflow-hidden shadow-xl">
             {/* Espaço para a Foto Profissional exigida no desafio */}
             <img src="/JPON.png" alt="João Pedro Nascimento" className="w-full h-full object-cover" />
          </div>
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-3xl sm:text-4xl md:text-5xl mb-4">
              João Pedro <span className="text-[var(--guara-primary)]">Nascimento</span>
            </h2>
            <p className="text-xl text-gray-700 mb-6">
              Desenvolvedor de Software & Fundador da Guará Digital
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
               <span className="px-4 py-2 bg-white rounded-full text-sm font-medium border border-gray-200">jjoaopedrodeoliveira1091@gmail.com</span>
               <span className="px-4 py-2 bg-white rounded-full text-sm font-medium border border-gray-200">LinkedIn: /in/joão-pedro-1743163b0/</span>
            </div>
          </div>
        </div>

        {/* Grid de História - Baseado no estilo da Guará */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {journey.map((item, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all"
            >
              <div className="mb-4 text-[var(--guara-primary)]">
                <item.icon className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-bold mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Texto Biográfico - Atende ao critério de biografia breve */}
        <div className="mt-16 bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
          <p className="text-lg text-gray-700 leading-relaxed italic">
            "A curiosidade de entender 'o que havia por trás dos jogos' me levou a escrever as primeiras linhas de código aos 12 anos. Essa jornada, que começou com experiências em Lua e Java, evoluiu para o desenvolvimento de sistemas complexos em C# e aplicações web modernas, sempre guiada pelo autodidatismo e pelo rigor técnico.

Hoje, como graduando em Engenharia de Software no UniCEUB, transformei essa paixão na Guará Digital. A empresa nasce com o propósito de unir a criatividade do game design à precisão da engenharia, entregando sites profissionais e soluções digitais que vão além do convencional. Na Guará, aplico meu background em automação e performance para criar presenças digitais robustas, elegantes e eficientes para nossos clientes."
          </p>
        </div>
      </div>
    </section>
  );
}