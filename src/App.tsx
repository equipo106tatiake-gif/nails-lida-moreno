/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Header } from './components/Header.js';
import { Hero } from './components/Hero.js';
import { Experience } from './components/Experience.js';
import { ServicesCatalog } from './components/ServicesCatalog.js';
import { Benefits } from './components/Benefits.js';
import { AboutSpecialist } from './components/AboutSpecialist.js';
import { Gallery } from './components/Gallery.js';
import { Modality } from './components/Modality.js';
import { FaqSection } from './components/FaqSection.js';
import { CallToAction } from './components/CallToAction.js';
import { Footer } from './components/Footer.js';
import { FloatingWhatsApp } from './components/FloatingWhatsApp.js';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F6F1FA] text-[#352D38]">
      {/* Encabezado fijo con navegación y botón de cita */}
      <Header />

      {/* Contenido Principal */}
      <main id="main-content" className="flex-1">
        {/* A. Hero: Primera impresión editorial */}
        <Hero />

        {/* B. Presentación de la experiencia y filosofía */}
        <Experience />

        {/* C. Catálogo de los 8 servicios y tarifas */}
        <ServicesCatalog />

        {/* D. Beneficios y atributos responsables */}
        <Benefits />

        {/* E. Perfil profesional: Conoce a Lida Moreno */}
        <AboutSpecialist />

        {/* F. Galería de diseños con visor modal */}
        <Gallery />

        {/* G. Modalidad: Atención en casa y a domicilio */}
        <Modality />

        {/* H. Preguntas frecuentes (Acordeón accesible) */}
        <FaqSection />

        {/* I. Llamada final a la acción */}
        <CallToAction />
      </main>

      {/* Pie de página con información y enlaces */}
      <Footer />

      {/* Botón flotante accesible de WhatsApp */}
      <FloatingWhatsApp />
    </div>
  );
}
