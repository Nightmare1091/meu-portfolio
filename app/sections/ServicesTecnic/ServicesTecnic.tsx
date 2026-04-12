"use client";
import { Globe, Cpu, Gamepad2, Boxes, Code2, PenTool } from 'lucide-react';

export function ServicesTecnic() {
  const services = [
    {
      icon: Code2,
      title: 'Desenvolvimento de Sistemas',
      description: 'Criação de programas robustos e escaláveis utilizando C# e C++ para diversas finalidades.',
      features: ['Arquitetura Limpa', 'Lógica de Programação Avançada', 'Otimização de Performance'],
    },
    {
      icon: Boxes,
      title: 'Simulação e Automação',
      description: 'Desenvolvimento de sistemas complexos de automação industrial e árvores tecnológicas para jogos.',
      features: ['Logística de Processos', 'Equilíbrio de Sistemas', 'Estruturas de Dados'],
    },
    {
      icon: Gamepad2,
      title: 'Game Development (Unity)',
      description: 'Experiência sólida na criação de mecânicas de jogo e prototipagem rápida em Unity.',
      features: ['Scripts em C#', 'Sistemas de Inventário/Lore', 'Integração de Assets'],
    },
    {
      icon: PenTool,
      title: 'Modelagem Procedural',
      description: 'Criação de ambientes e estradas procedurais utilizando Blender Geometry Nodes.',
      features: ['Sistemas de Estradas', 'Padrões ABNT (Rodovias)', 'Otimização de Malhas'],
    },
    {
      icon: Globe,
      title: 'Web Engineering',
      description: 'Desenvolvimento Full Stack com foco em performance e SEO para soluções profissionais.',
      features: ['React & Next.js', 'Integração de APIs', 'Design Responsivo'],
    },
    {
      icon: Cpu,
      title: 'Lógicas de Baixo Nível',
      description: 'Conhecimento em linguagens de alto desempenho e lógica de hardware.',
      features: ['Manipulação de Memória', 'C++ Orientado a Objetos', 'Scripts em Lua (Roblox)'],
    },
  ];

  return (
    <section id="services" className="py-20 bg-[var(--guara-gray)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl mb-4">
            Competências e Habilidades
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Da engenharia de software à modelagem procedural: um conjunto de habilidades focado em solucionar problemas complexos.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white p-8 rounded-xl hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-[var(--guara-primary)]"
            >
              {/* Icon */}
              <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-[var(--guara-primary)] to-[var(--guara-secondary)] text-white">
                <service.icon className="h-8 w-8" />
              </div>

              {/* Title & Description */}
              <h3 className="text-2xl mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>

              {/* Features */}
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-700">
                    <span className="mr-2 w-1.5 h-1.5 rounded-full bg-[var(--guara-primary)]"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}