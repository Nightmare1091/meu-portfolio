"use client";
import { ExternalLink } from 'lucide-react';
import { ImageWithFallback } from '../../components/figma/ImageWithFallback';

export function Portfolio() {
  const projects = [
    {
      title: 'Site Corporativo',
      category: 'Institucional',
      description: 'Website moderno e responsivo para empresa de tecnologia',
      image: 'https://images.unsplash.com/photo-1706700392626-5279fb90ae73?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWJzaXRlJTIwZGVzaWduJTIwbGFwdG9wfGVufDF8fHx8MTc3MzE3OTUxNnww&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['React', 'Tailwind', 'SEO'],
    },
    {
      title: 'Loja Virtual',
      category: 'E-commerce',
      description: 'Plataforma completa de e-commerce com gestão de produtos',
      image: 'https://images.unsplash.com/photo-1763872011479-aa293bf083a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlLWNvbW1lcmNlJTIwb25saW5lJTIwc2hvcHBpbmd8ZW58MXx8fHwxNzczMTY4NzQxfDA&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['Next.js', 'Stripe', 'Database'],
    },
    {
      title: 'App Mobile-First',
      category: 'Web App',
      description: 'Aplicação web otimizada para dispositivos móveis',
      image: 'https://images.unsplash.com/photo-1605108222700-0d605d9ebafe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzczMTA1MjkzfDA&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['PWA', 'Responsive', 'API'],
    },
    {
      title: 'Dashboard Analítico',
      category: 'Web App',
      description: 'Painel de controle com visualização de dados em tempo real',
      image: 'https://images.unsplash.com/photo-1608222351212-18fe0ec7b13b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGRhc2hib2FyZCUyMGFuYWx5dGljc3xlbnwxfHx8fDE3NzMxNjU4NTJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['Charts', 'Real-time', 'Admin'],
    },
    {
      title: 'Menu Digital',
      category: 'Landing Page',
      description: 'Menu interativo para restaurante com pedidos online',
      image: 'https://images.unsplash.com/photo-1759552337652-95ee2815c9c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwbWVudSUyMGRpZ2l0YWx8ZW58MXx8fHwxNzczMTg5OTA2fDA&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['QR Code', 'Mobile', 'WhatsApp'],
    },
    {
      title: 'Portfólio Criativo',
      category: 'Institucional',
      description: 'Site portfólio para profissional criativo com galeria',
      image: 'https://images.unsplash.com/photo-1760071744047-5542cbfda184?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0Zm9saW8lMjBjcmVhdGl2ZSUyMGRlc2lnbnxlbnwxfHx8fDE3NzMxODk5MDd8MA&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['Gallery', 'Animation', 'Minimalist'],
    },
  ];

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl mb-4">
            Portfólio
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Alguns dos projetos desenvolvidos com excelência e dedicação
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl bg-[var(--guara-gray)] hover:shadow-2xl transition-all duration-300"
            >
              {/* Image */}
              <div className="aspect-video overflow-hidden bg-gray-200">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs tracking-wide text-[var(--guara-secondary)] uppercase">
                    {project.category}
                  </span>
                  <ExternalLink className="h-4 w-4 text-gray-400 group-hover:text-[var(--guara-primary)] transition-colors" />
                </div>
                
                <h3 className="text-xl mb-2">{project.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{project.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-xs bg-white rounded-full text-gray-700 border border-gray-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--guara-primary)] to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
