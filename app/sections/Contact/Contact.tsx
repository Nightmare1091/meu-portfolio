"use client";
import { Mail, MessageSquare, Phone, MapPin } from 'lucide-react';
import { useState } from 'react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

const emailCorrections: Record<string, string> = {
  "gamil.com": "gmail.com",
  "gmail.con": "gmail.com",
  "gmial.com": "gmail.com",
  "hotnail.com": "hotmail.com",
  "outlok.com": "outlook.com",
};

function normalizeEmail(email: string) {
  const [user, domain] = email.split("@");

  if (!domain) return email;

  if (emailCorrections[domain]) {
    return `${user}@${emailCorrections[domain]}`;
  }

  return email;
}

const [loading, setLoading] = useState(false);

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  if (loading) return;

  setLoading(true);

  const fixedEmail = normalizeEmail(formData.email);

  const response = await fetch("/api/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      ...formData,
      email: fixedEmail,
    }),
  });

  if (response.ok) {
    alert("Mensagem enviada com sucesso!");
    setFormData({ name: "", email: "", subject: "", message: "" });
  } else {
    alert("Erro ao enviar mensagem.");
  }

  setLoading(false);
};

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'jjoaopedrodeoliveira1091@gmail.com',
      link: 'mailto:jjoaopedrodeoliveira1091@gmail.com',
    },
    {
      icon: Phone,
      title: 'Telefone',
      value: '+55 (61) 99624-2460',
      link: 'tel:+5561996242460',
    },
    {
      icon: MessageSquare,
      title: 'WhatsApp',
      value: 'Fale Conosco',
      link: 'https://wa.me/5561996242460',
    },
    {
      icon: MapPin,
      title: 'Localização',
      value: 'Gama, DF',
      link: '#',
    },
  ];

  return (
    <section id="contact" className="py-20 bg-[var(--guara-gray)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl mb-4">
            Entre em Contato
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Vamos conversar sobre seu projeto e transformar suas ideias em realidade
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl mb-6">Informações de Contato</h3>
              <p className="text-gray-600 mb-8">
                Estou disponível para novos projetos e parcerias. Entre em contato 
                através dos canais abaixo ou envie uma mensagem diretamente pelo formulário.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  className="group flex items-start gap-4 p-4 rounded-lg bg-white hover:shadow-lg transition-all duration-300 border-2 border-transparent hover:border-[var(--guara-primary)]"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-[var(--guara-primary)] text-white flex items-center justify-center group-hover:bg-[var(--guara-secondary)] transition-colors">
                    <info.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">{info.title}</p>
                    <p className="text-sm">{info.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl mb-6">Envie uma Mensagem</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm mb-2">
                  Nome
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[var(--guara-primary)] focus:ring-2 focus:ring-[var(--guara-primary)]/20 outline-none transition-all"
                  placeholder="Seu nome"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[var(--guara-primary)] focus:ring-2 focus:ring-[var(--guara-primary)]/20 outline-none transition-all"
                  placeholder="seu@email.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm mb-2">
                  Assunto
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[var(--guara-primary)] focus:ring-2 focus:ring-[var(--guara-primary)]/20 outline-none transition-all"
                  placeholder="Assunto da mensagem"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm mb-2">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[var(--guara-primary)] focus:ring-2 focus:ring-[var(--guara-primary)]/20 outline-none transition-all resize-none"
                  placeholder="Descreva seu projeto ou dúvida..."
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[var(--guara-primary)] hover:bg-[var(--guara-secondary)] text-white py-4 rounded-lg transition-colors duration-300 shadow-lg hover:shadow-xl"
              >
                {loading ? "Enviando..." : "Enviar Mensagem"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
