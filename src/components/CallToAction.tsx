/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ArrowUpRight, MessageCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData.js';
import { formatWhatsAppUrl, getGeneralBookingMessage } from '../utils/whatsapp.js';

export const CallToAction: React.FC = () => {
  const bookingUrl = formatWhatsAppUrl(getGeneralBookingMessage());

  return (
    <section className="py-20 sm:py-24 bg-gradient-to-b from-[#FFFEFC] to-[#F6F1FA] border-t border-[#352D38]/8">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="p-10 sm:p-16 rounded-3xl bg-gradient-to-tr from-[#80618F] to-[#583F63] text-[#FFFEFC] shadow-xl relative overflow-hidden">
          {/* Acentos decorativos de luz difusa */}
          <div
            className="absolute -top-12 -left-12 w-64 h-64 bg-[#B99AD6]/20 rounded-full blur-3xl pointer-events-none"
            aria-hidden="true"
          />
          <div
            className="absolute -bottom-12 -right-12 w-64 h-64 bg-[#E8C9D7]/20 rounded-full blur-3xl pointer-events-none"
            aria-hidden="true"
          />

          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <div className="text-xs font-semibold tracking-widest uppercase text-[#E8C9D7]">
              Agenda tu momento de cuidado
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-editorial font-normal tracking-tight text-white leading-tight text-balance">
              Es momento de darle a tus uñas el cuidado que merecen.
            </h2>

            <p className="text-base sm:text-lg text-[#F6F1FA]/90 leading-relaxed max-w-xl mx-auto">
              Elige el estilo que mejor se adapte a tu personalidad y déjalo en manos dedicadas.
              Atención personalizada en Medellín, en casa o con servicio a domicilio.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-semibold tracking-wide uppercase text-[#352D38] bg-[#FFFEFC] hover:bg-[#F6F1FA] rounded-full transition-all duration-200 shadow-md hover:shadow-lg whitespace-nowrap"
              >
                <MessageCircle className="w-4 h-4 text-[#80618F]" />
                <span>Agendar mi cita por WhatsApp</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

            <p className="text-xs text-[#E8C9D7] pt-2">
              WhatsApp directo: {BUSINESS_INFO.phoneDisplay} · Medellín, Antioquia
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
