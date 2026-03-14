"use client";
import { Globe, Smartphone, ShoppingCart, Rocket, Layers, Search, Phone } from 'lucide-react';

export function Services() {
  const services = [
    {
      icon: Globe,
      title: 'Sites Institucionais',
      description: 'Websites profissionais que representam sua marca com elegância e eficiência',
      features: ['Design Responsivo', 'SEO Otimizado', 'Carregamento Rápido'],
    },
    {
      icon: Phone,
      title: 'Botão de WhatsApp',
      description: 'Integração de botão de WhatsApp para contato direto com seus clientes',
      features: ['Configuração Personalizada', 'Design Atraente', 'Fácil Integração'],
    },
    /*{
      icon: ShoppingCart,
      title: 'E-commerce',
      description: 'Lojas virtuais completas para vender seus produtos online',
      features: ['Carrinho de Compras', 'Pagamento Seguro', 'Gestão de Produtos'],
    },*/
    {
      icon: Smartphone,
      title: 'Landing Pages',
      description: 'Páginas de conversão otimizadas para campanhas de marketing',
      features: ['Alta Conversão', 'Mobile First', 'Integração com Analytics'],
    },
    /*{
      icon: Layers,
      title: 'Web Apps',
      description: 'Aplicações web customizadas para suas necessidades específicas',
      features: ['Funcionalidades Personalizadas', 'Dashboard', 'Integrações'],
    },*/
    {
      icon: Rocket,
      title: 'Performance',
      description: 'Otimização de sites existentes para melhor desempenho',
      features: ['Análise de Performance', 'Otimização de Código', 'Melhorias de UX'],
    },
    {
      icon: Search,
      title: 'SEO',
      description: 'Otimização para mecanismos de busca e melhor ranqueamento',
      features: ['Otimização On-Page', 'Meta Tags', 'Estrutura Semântica'],
    },
  ];

  return (
    <section id="services" className="py-20 bg-[var(--guara-gray)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl mb-4">
            Serviços
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Soluções completas de desenvolvimento web para elevar seu negócio ao próximo nível
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
