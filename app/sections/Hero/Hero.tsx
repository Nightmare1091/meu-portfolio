"use client";

import { ArrowDown } from "lucide-react";

const logo = "/logo.png";

export function Hero() {
  const scrollToAbout = () => {
    const element = document.getElementById("about");

    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-white to-[var(--guara-gray)]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">

        <div className="mb-8 flex justify-center flex-col items-center">
          <img
            src={logo}
            alt="Guará Digital"
            className="h-40 md:h-52 lg:h-64 w-auto mb-4"
          />

          <p className="text-base md:text-lg lg:text-xl text-gray-600 tracking-wide">
            By{" "}
            <span className="text-[var(--guara-secondary)]">
              João Pedro Nascimento
            </span>
          </p>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6 tracking-tight">
          Criando Experiências
          <br />
          <span className="text-[var(--guara-primary)]">
            Digitais Únicas
          </span>
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto">
          Desenvolvimento web profissional, moderno e otimizado para o seu
          negócio
        </p>

        <button
          onClick={scrollToAbout}
          className="group inline-flex items-center gap-2 bg-[var(--guara-primary)] hover:bg-[var(--guara-secondary)] text-white px-8 py-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          Saiba Mais
          <ArrowDown className="h-5 w-5 group-hover:translate-y-1 transition-transform" />
        </button>

      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
}