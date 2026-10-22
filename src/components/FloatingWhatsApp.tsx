/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { MessageCircle } from 'lucide-react';
import { formatWhatsAppUrl, getGeneralBookingMessage } from '../utils/whatsapp.js';
import { BUSINESS_INFO } from '../data/businessData.js';

export const FloatingWhatsApp: React.FC = () => {
  const waUrl = formatWhatsAppUrl(getGeneralBookingMessage());

  return (
    <aside
      aria-label="Contacto directo por WhatsApp"
      className="fixed bottom-5 right-5 z-40 print:hidden"
    >
      <a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-2.5 px-4 py-3 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 focus:outline-hidden focus-visible:ring-3 focus-visible:ring-[#25D366]/50"
        aria-label={`Abrir chat de WhatsApp con ${BUSINESS_INFO.name} al ${BUSINESS_INFO.phoneDisplay}`}
      >
        <MessageCircle className="w-5 h-5 fill-current" aria-hidden="true" />
        <span className="hidden sm:inline-block text-xs font-semibold tracking-wide uppercase whitespace-nowrap">
          ¿Deseas agendar?
        </span>
      </a>
    </aside>
  );
};
