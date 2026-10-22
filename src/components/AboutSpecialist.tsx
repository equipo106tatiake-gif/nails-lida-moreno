/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Check, ArrowUpRight, MessageCircle } from 'lucide-react';
import { SPECIALIST_PROFILE, BUSINESS_INFO } from '../data/businessData.js';
import { formatWhatsAppUrl, getGeneralBookingMessage } from '../utils/whatsapp.js';

export const AboutSpecialist: React.FC = () => {
  const bookingUrl = formatWhatsAppUrl(getGeneralBookingMessage());

  return (
    <section id="sobre-mi" className="py-20 sm:py-24 bg-[#FFFEFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Fotografía de Lida Moreno en su estudio */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="relative aspect-4/3 sm:aspect-4/3 rounded-3xl overflow-hidden shadow-xl border-4 border-[#F6F1FA]">
                <img
                  src={SPECIALIST_PROFILE.image}
                  alt={SPECIALIST_PROFILE.altText}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Tarjeta flotante con sello de atención personalizada */}
              <div className="absolute -bottom-5 -right-3 sm:right-4 bg-[#FFFEFC] p-4 rounded-2xl shadow-lg border border-[#352D38]/10 max-w-[240px]">
                <p className="text-xs font-semibold text-[#80618F]">Atención en Medellín</p>
                <p className="text-[11px] text-[#6F6672] mt-0.5">
                  En casa o con servicio a domicilio con cita previa
                </p>
              </div>
            </div>
          </div>

          {/* Texto y perfil editorial */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            <div className="text-xs font-semibold tracking-widest uppercase text-[#80618F]">
              Conoce a tu especialista
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-editorial font-normal tracking-tight text-[#352D38] leading-tight text-balance">
              {SPECIALIST_PROFILE.name}
            </h2>

            <p className="text-base sm:text-lg text-[#80618F] font-medium">
              {SPECIALIST_PROFILE.role}
            </p>

            <div className="space-y-4 text-base text-[#6F6672] leading-relaxed">
              <p>{SPECIALIST_PROFILE.intro}</p>
              <p>{SPECIALIST_PROFILE.philosophy}</p>
            </div>

            {/* Puntos destacados verificados */}
            <div className="pt-2">
              <ul className="space-y-2.5 text-sm text-[#352D38]">
                {SPECIALIST_PROFILE.verifiedHighlights.map((highlight) => (
                  <li key={highlight} className="flex items-center gap-3">
                    <span className="w-5 h-5 rounded-full bg-[#E8C9D7]/40 flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5 text-[#80618F]" />
                    </span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Acciones */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href={bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-3 text-sm font-semibold text-[#FFFEFC] bg-[#80618F] hover:bg-[#583F63] rounded-full transition-all duration-200 shadow-xs hover:shadow-md whitespace-nowrap"
              >
                <span>Agendar cita con Lida</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <a
                href={BUSINESS_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium text-[#352D38] hover:text-[#80618F] bg-[#F6F1FA] hover:bg-[#E8C9D7]/30 rounded-full transition-colors duration-200 whitespace-nowrap"
              >
                <MessageCircle className="w-4 h-4 text-[#80618F]" />
                <span>Ver Instagram @{BUSINESS_INFO.instagramUser}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
