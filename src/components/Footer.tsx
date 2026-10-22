/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Instagram, MessageCircle, MapPin, Clock } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData.js';
import { formatWhatsAppUrl, getGeneralBookingMessage } from '../utils/whatsapp.js';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const bookingUrl = formatWhatsAppUrl(getGeneralBookingMessage());

  return (
    <footer className="bg-[#352D38] text-[#F6F1FA] pt-16 pb-12 border-t border-[#80618F]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-[#F6F1FA]/10">
          {/* Columna Marca */}
          <div className="lg:col-span-5 space-y-4">
            <span className="text-2xl font-editorial font-medium tracking-tight text-[#FFFEFC] block">
              {BUSINESS_INFO.name}
            </span>
            <p className="text-sm text-[#F6F1FA]/70 leading-relaxed max-w-sm">
              Especialistas en cuidado, arte y estética de uñas en Medellín, Colombia.
              Atención personalizada en nuestro espacio y servicios a domicilio con reserva previa.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={BUSINESS_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#FFFEFC]/10 hover:bg-[#80618F] flex items-center justify-center text-[#FFFEFC] transition-colors"
                aria-label="Seguir a Nails Lida Moreno en Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#FFFEFC]/10 hover:bg-[#80618F] flex items-center justify-center text-[#FFFEFC] transition-colors"
                aria-label="Contactar a Nails Lida Moreno por WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Columna Navegación */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-[#E8C9D7]">
              Navegación
            </h4>
            <ul className="space-y-2 text-sm text-[#F6F1FA]/75">
              <li>
                <a href="#inicio" className="hover:text-[#FFFEFC] transition-colors">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-[#FFFEFC] transition-colors">
                  Servicios y Precios
                </a>
              </li>
              <li>
                <a href="#experiencia" className="hover:text-[#FFFEFC] transition-colors">
                  Nuestra Filosofía
                </a>
              </li>
              <li>
                <a href="#sobre-mi" className="hover:text-[#FFFEFC] transition-colors">
                  Sobre Lida Moreno
                </a>
              </li>
              <li>
                <a href="#galeria" className="hover:text-[#FFFEFC] transition-colors">
                  Galería de Diseños
                </a>
              </li>
              <li>
                <a href="#modalidad" className="hover:text-[#FFFEFC] transition-colors">
                  Modalidad de Atención
                </a>
              </li>
              <li>
                <a href="#preguntas" className="hover:text-[#FFFEFC] transition-colors">
                  Preguntas Frecuentes
                </a>
              </li>
            </ul>
          </div>

          {/* Columna Contacto y Ubicación */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-[#E8C9D7]">
              Ubicación y Citas
            </h4>

            <div className="space-y-3 text-sm text-[#F6F1FA]/75">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#B99AD6] shrink-0 mt-0.5" />
                <span>
                  {BUSINESS_INFO.city}, {BUSINESS_INFO.department}, {BUSINESS_INFO.country}
                  <span className="block text-xs text-[#F6F1FA]/50 mt-0.5">
                    {BUSINESS_INFO.modality}
                  </span>
                </span>
              </div>

              <div className="flex items-start gap-2.5">
                <MessageCircle className="w-4 h-4 text-[#B99AD6] shrink-0 mt-0.5" />
                <div>
                  <a
                    href={bookingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#FFFEFC] underline underline-offset-2 transition-colors"
                  >
                    WhatsApp: {BUSINESS_INFO.phoneDisplay}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#B99AD6] shrink-0 mt-0.5" />
                <span className="text-xs">
                  {BUSINESS_INFO.hoursNote}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Barra de Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#F6F1FA]/50">
          <p>
            © {currentYear} {BUSINESS_INFO.name}. Todos los derechos reservados.
          </p>
          <p>
            Diseño editorial para estética de uñas · Medellín
          </p>
        </div>
      </div>
    </footer>
  );
};
