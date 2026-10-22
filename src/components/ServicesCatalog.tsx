/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { MessageCircle, Info } from 'lucide-react';
import { SERVICES_DATA, ServiceItem } from '../data/businessData.js';
import { formatPrice } from '../utils/pricing.js';
import { formatWhatsAppUrl, getServiceBookingMessage } from '../utils/whatsapp.js';

type CategoryFilter = 'Todos' | 'Manicura' | 'Acrílicas & Rubber' | 'Pedicura & Cuidados' | 'Decoración';

export const ServicesCatalog: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>('Todos');

  const categories: CategoryFilter[] = [
    'Todos',
    'Manicura',
    'Acrílicas & Rubber',
    'Pedicura & Cuidados',
    'Decoración',
  ];

  const filteredServices = selectedCategory === 'Todos'
    ? SERVICES_DATA
    : SERVICES_DATA.filter((s) => s.category === selectedCategory);

  return (
    <section id="servicios" className="py-20 sm:py-24 bg-[#F6F1FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado de Sección */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="text-xs font-semibold tracking-widest uppercase text-[#80618F] mb-3">
            Catálogo y tarifas
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-editorial font-normal tracking-tight text-[#352D38] mb-4 text-balance">
            Servicios dedicados para tus manos y pies
          </h2>
          <p className="text-base text-[#6F6672] max-w-2xl mx-auto">
            Cada tratamiento combina técnicas actuales y atención minuciosa. Selecciona el servicio
            que deseas y escríbenos directamente para confirmar tu tarifa y agendar tu fecha.
          </p>

          {/* Filtros de Categoría tipo Segmented Control accesible */}
          <div className="mt-8 flex flex-wrap justify-center gap-2 p-1.5 bg-[#FFFEFC] rounded-full border border-[#352D38]/10 max-w-2xl mx-auto shadow-xs">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 text-xs font-semibold rounded-full transition-all duration-150 whitespace-nowrap shrink-0 ${
                  selectedCategory === category
                    ? 'bg-[#80618F] text-[#FFFEFC] shadow-xs'
                    : 'text-[#6F6672] hover:text-[#352D38] hover:bg-[#F6F1FA]'
                }`}
                aria-pressed={selectedCategory === category}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Cuadrícula de Tarjetas de Servicios (3 columnas en escritorio, 2 en tablet, 1 en móvil) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredServices.map((service: ServiceItem) => {
            const formattedPrice = formatPrice(service.price);
            const waUrl = formatWhatsAppUrl(getServiceBookingMessage(service.name));

            return (
              <article
                key={service.id}
                className="group flex flex-col bg-[#FFFEFC] rounded-2xl overflow-hidden border border-[#352D38]/8 shadow-xs hover:shadow-md transition-all duration-300"
              >
                {/* Fotografía de Servicio */}
                <div className="relative aspect-4/3 overflow-hidden bg-[#F6F1FA]">
                  <img
                    src={service.image}
                    alt={service.altText}
                    className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-500"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 left-3 bg-[#FFFEFC]/90 backdrop-blur-xs text-[11px] font-semibold text-[#80618F] px-2.5 py-1 rounded-md shadow-xs">
                    {service.category}
                  </div>
                </div>

                {/* Contenido de la Tarjeta */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between gap-3 mb-2.5">
                      <h3 className="text-xl font-editorial font-medium text-[#352D38] leading-snug">
                        {service.name}
                      </h3>
                      {/* Precio formal o "Consultar precio" */}
                      <span className="text-xs font-semibold text-[#80618F] bg-[#E8C9D7]/30 px-2.5 py-1 rounded-md shrink-0 font-sans tabular-nums border border-[#80618F]/15">
                        {formattedPrice}
                      </span>
                    </div>

                    <p className="text-sm text-[#6F6672] leading-relaxed mb-4">
                      {service.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#352D38]/8">
                    {service.priceClarification && (
                      <p className="text-xs text-[#6F6672] italic mb-3 flex items-center gap-1.5">
                        <Info className="w-3.5 h-3.5 text-[#B99AD6] shrink-0" aria-hidden="true" />
                        <span>{service.priceClarification}</span>
                      </p>
                    )}

                    {/* Botón CTA Contextual para WhatsApp */}
                    <a
                      href={waUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#352D38] bg-[#F6F1FA] hover:bg-[#80618F] hover:text-[#FFFEFC] rounded-xl transition-colors duration-200"
                      aria-label={`Consultar por WhatsApp el servicio de ${service.name}`}
                    >
                      <MessageCircle className="w-4 h-4 text-[#80618F] group-hover:text-[#FFFEFC]" aria-hidden="true" />
                      <span>Consultar por WhatsApp</span>
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Nota informativa de tarifas */}
        <div className="mt-12 p-6 bg-[#FFFEFC] rounded-2xl border border-[#352D38]/10 max-w-3xl mx-auto text-center text-xs sm:text-sm text-[#6F6672]">
          <p>
            <strong className="text-[#352D38]">Transparencia en tarifas:</strong> El valor final de cada servicio se ajusta según el largo, técnica de retiro previo o arte adicional solicitado.
            Al comunicarte por WhatsApp, recibirás la cotización exacta sin sorpresas.
          </p>
        </div>
      </div>
    </section>
  );
};
