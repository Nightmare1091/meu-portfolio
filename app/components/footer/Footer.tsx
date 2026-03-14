"use client";

import { Github, Linkedin, Instagram, Mail } from 'lucide-react';

const logo = "/logo.png";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, label: 'GitHub', url: '#' },
    { icon: Linkedin, label: 'LinkedIn', url: '#' },
    { icon: Instagram, label: 'Instagram', url: '#' },
    { icon: Mail, label: 'Email', url: 'mailto:contato@guaradigital.com' },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[var(--guara-black)] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">

          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="Guará Digital" className="h-16 w-auto" />
              <span className="text-xs text-gray-400">
                By <span className="text-[var(--guara-secondary)]">
                  João Pedro Nascimento
                </span>
              </span>
            </div>

            <p className="text-gray-400 text-sm">
              Criando experiências digitais únicas com código limpo,
              design moderno e foco em resultados.
            </p>
          </div>

          <div>
            <h4 className="mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              {['home', 'about', 'services', 'portfolio', 'contact'].map((section) => (
                <li key={section}>
                  <button
                    onClick={() => scrollToSection(section)}
                    className="text-gray-400 hover:text-[var(--guara-primary)] transition-colors text-sm capitalize"
                  >
                    {section === 'home' ? 'Início' :
                     section === 'about' ? 'Sobre' :
                     section === 'services' ? 'Serviços' :
                     section === 'portfolio' ? 'Portfólio' : 'Contato'}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4">Redes Sociais</h4>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg bg-gray-800 hover:bg-[var(--guara-primary)] flex items-center justify-center transition-all duration-300"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

        </div>

        <div className="pt-8 border-t border-gray-800 text-center">
          <p className="text-sm text-gray-400">
            © {currentYear} Guará Digital. Todos os direitos reservados.
          </p>
        </div>

      </div>
    </footer>
  );
}