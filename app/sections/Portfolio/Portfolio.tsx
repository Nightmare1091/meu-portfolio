"use client";
import { ExternalLink } from 'lucide-react';
import { ImageWithFallback } from '../../components/figma/ImageWithFallback';

export function Portfolio() {
  const projects = [
    {
      title: 'Site Corporativo',
      category: 'Institucional',
      description: 'Website moderno e responsivo para Centro Integrado de Urologia - CIU',
      image: '/clinicaurologia.png',
      tags: ['Next.js', 'Tailwind', 'SEO'],
      link: 'https://ciu-centro-integrado-de-urologia-di.vercel.app/',
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
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block overflow-hidden rounded-xl bg-[var(--guara-gray)] hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-[var(--guara-primary)]"
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
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--guara-primary)] to-transparent opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none"></div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}