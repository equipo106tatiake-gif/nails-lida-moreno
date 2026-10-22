/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Eye, Instagram, ArrowUpRight } from 'lucide-react';
import { GALLERY_ITEMS, GalleryItem, BUSINESS_INFO } from '../data/businessData.js';
import { LightboxModal } from './LightboxModal.js';

export const Gallery: React.FC = () => {
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);

  const handleOpen = (item: GalleryItem) => setActiveItem(item);
  const handleClose = () => setActiveItem(null);

  const currentIndex = activeItem
    ? GALLERY_ITEMS.findIndex((item) => item.id === activeItem.id)
    : -1;

  const handleNext = () => {
    if (currentIndex >= 0 && currentIndex < GALLERY_ITEMS.length - 1) {
      setActiveItem(GALLERY_ITEMS[currentIndex + 1]);
    } else {
      setActiveItem(GALLERY_ITEMS[0]);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setActiveItem(GALLERY_ITEMS[currentIndex - 1]);
    } else {
      setActiveItem(GALLERY_ITEMS[GALLERY_ITEMS.length - 1]);
    }
  };

  return (
    <section id="galeria" className="py-20 sm:py-24 bg-[#F6F1FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado con enlace a Instagram */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div>
            <div className="text-xs font-semibold tracking-widest uppercase text-[#80618F] mb-3">
              Inspiración visual
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-editorial font-normal tracking-tight text-[#352D38] text-balance">
              Nuestra galería de diseños
            </h2>
            <p className="text-sm sm:text-base text-[#6F6672] mt-2 max-w-xl">
              Explora una muestra de estilos, tonalidades y técnicas. Haz clic sobre cualquier imagen
              para verla en detalle o consultar su disponibilidad.
            </p>
          </div>

          <a
            href={BUSINESS_INFO.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#80618F] hover:text-[#583F63] transition-colors group shrink-0"
          >
            <Instagram className="w-4 h-4" />
            <span>Ver más en Instagram @{BUSINESS_INFO.instagramUser}</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        {/* Cuadrícula de Galería (4 columnas en escritorio, 2 en móvil) */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {GALLERY_ITEMS.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => handleOpen(item)}
              className="group relative aspect-square rounded-2xl overflow-hidden bg-[#FFFEFC] shadow-2xs hover:shadow-lg focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#80618F] transition-all duration-300 text-left"
              aria-label={`Ver detalles del diseño ${item.title}`}
            >
              <img
                src={item.image}
                alt={item.altText}
                className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-500"
                loading="lazy"
                referrerPolicy="no-referrer"
              />

              {/* Scrim y detalles al hacer hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#352D38]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <span className="text-[11px] font-semibold text-[#E8C9D7] uppercase tracking-wider">
                  {item.category}
                </span>
                <span className="text-sm font-medium text-[#FFFEFC] mt-0.5">
                  {item.title}
                </span>
                <div className="mt-2 flex items-center gap-1.5 text-xs text-white/90">
                  <Eye className="w-3.5 h-3.5" />
                  <span>Ampliar</span>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Nota informativa de fotografías */}
        <div className="mt-10 text-center text-xs text-[#6F6672]">
          <p>
            Imágenes de referencia de acabados y técnicas para Nails Lida Moreno.
            ¿Tienes un diseño en mente? Envíanos tu foto por WhatsApp para cotizarlo.
          </p>
        </div>
      </div>

      {/* Modal Lightbox */}
      <LightboxModal
        item={activeItem}
        onClose={handleClose}
        onNext={handleNext}
        onPrev={handlePrev}
      />
    </section>
  );
};
