/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ArrowUpRight, ChevronDown, Sparkles } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData.js';
import { formatWhatsAppUrl, getGeneralBookingMessage } from '../utils/whatsapp.js';
import heroImage from '../assets/images/hero_lida_editorial_1792696276132.jpg';
import handsSecondary from '../assets/images/service_semipermanente_1792696277094.jpg';

export const Hero: React.FC = () => {
  const bookingUrl = formatWhatsAppUrl(getGeneralBookingMessage());

  return (
    <section
      id="inicio"
      className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-gradient-to-b from-[#F6F1FA] via-[#F6F1FA] to-[#FFFEFC]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Columna de Contenido Editorial */}
          <div className="lg:col-span-6 xl:col-span-6 flex flex-col justify-center">
            {/* Etiqueta superior sutil sin formato de cápsula estática */}
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs font-semibold tracking-wider uppercase text-[#80618F] mb-4">
              <div className="flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#B99AD6]" aria-hidden="true" />
                <span>Manicura y cuidado personalizado</span>
              </div>
              <span aria-hidden="true" className="text-[#B99AD6] hidden sm:inline">·</span>
              <span className="text-[#6F6672] normal-case tracking-normal font-medium">Medellín, Colombia</span>
            </div>

            {/* Título Principal */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-editorial font-normal tracking-tight text-[#352D38] leading-[1.12] mb-6 text-balance">
              Tus uñas, una forma de expresar tu estilo.
            </h1>

            {/* Descripción Breve */}
            <p className="text-base sm:text-lg text-[#6F6672] font-normal leading-relaxed mb-8 max-w-xl">
              Cuidado estético integral, acabados limpios y atención dedicada en cada sesión.
              Descubre una experiencia relajante diseñada para realzar la elegancia de tus manos y pies,
              con atención en casa y servicios a domicilio en Medellín.
            </p>

            {/* Botones de Acción */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mb-10">
              <a
                href={bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-semibold tracking-wide text-[#FFFEFC] bg-[#80618F] hover:bg-[#583F63] rounded-full transition-all duration-200 shadow-xs hover:shadow-md active:scale-[0.98] whitespace-nowrap"
              >
                <span>Agendar mi cita</span>
                <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
              </a>

              <a
                href="#servicios"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-medium text-[#352D38] bg-[#FFFEFC] hover:bg-[#F6F1FA] border border-[#352D38]/15 rounded-full transition-colors duration-200 whitespace-nowrap"
              >
                <span>Explorar servicios</span>
                <ChevronDown className="w-4 h-4 text-[#6F6672]" aria-hidden="true" />
              </a>
            </div>

            {/* Metadatos de Confianza Responsables (sin píldoras estáticas) */}
            <div className="pt-6 border-t border-[#352D38]/10 flex flex-wrap items-center gap-y-2 gap-x-3 text-xs sm:text-sm text-[#6F6672]">
              <span className="font-medium text-[#352D38]">Atención en casa & domicilio</span>
              <span aria-hidden="true" className="text-[#B99AD6]">·</span>
              <span>Acabados prolijos</span>
              <span aria-hidden="true" className="text-[#B99AD6]">·</span>
              <span>Citas vía WhatsApp</span>
            </div>
          </div>

          {/* Columna de Composición Visual Editorial (Inspirada en el estilo Maison Nails) */}
          <div className="lg:col-span-6 xl:col-span-6 relative flex justify-center items-center">
            <div className="relative w-full max-w-md sm:max-w-lg lg:max-w-none">
              {/* Imagen Principal con Marco Oval/Redondeado y Textura */}
              <div className="relative z-10 mx-auto w-[85%] aspect-4/3 rounded-3xl overflow-hidden shadow-xl border-4 border-[#FFFEFC]">
                <img
                  src={heroImage}
                  alt="Manicura editorial en tonos pastel y lila realizada con delicadeza"
                  className="w-full h-full object-cover"
                  loading="eager"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Imagen Secundaria Superpuesta (Composición editorial) */}
              <div className="absolute -bottom-6 -left-2 sm:bottom-0 sm:left-4 z-20 w-[48%] aspect-4/3 rounded-2xl overflow-hidden shadow-2xl border-4 border-[#FFFEFC]">
                <img
                  src={handsSecondary}
                  alt="Detalle de esmaltado semipermanente impecable en tono malva"
                  className="w-full h-full object-cover"
                  loading="eager"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Elemento Decorativo Geométrico Sutil */}
              <div
                className="absolute -top-6 -right-4 w-40 h-40 bg-[#E8C9D7]/40 rounded-full blur-2xl -z-0 pointer-events-none"
                aria-hidden="true"
              />
              <div
                className="absolute -bottom-8 right-12 w-48 h-48 bg-[#B99AD6]/25 rounded-full blur-3xl -z-0 pointer-events-none"
                aria-hidden="true"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
