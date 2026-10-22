/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from 'react';
import { X, MessageCircle, ArrowLeft, ArrowRight } from 'lucide-react';
import { GalleryItem } from '../data/businessData.js';
import { formatWhatsAppUrl, getGalleryDesignMessage } from '../utils/whatsapp.js';

interface LightboxModalProps {
  item: GalleryItem | null;
  onClose: () => void;
  onNext?: () => void;
  onPrev?: () => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  item,
  onClose,
  onNext,
  onPrev,
}) => {
  useEffect(() => {
    if (!item) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight' && onNext) onNext();
      if (e.key === 'ArrowLeft' && onPrev) onPrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [item, onClose, onNext, onPrev]);

  if (!item) return null;

  const waUrl = formatWhatsAppUrl(getGalleryDesignMessage(item.title));

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Detalle del diseño: ${item.title}`}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#352D38]/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative max-w-4xl w-full bg-[#FFFEFC] rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row border border-white/20"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Botón cerrar accesible */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-[#FFFEFC]/80 hover:bg-[#FFFEFC] text-[#352D38] hover:text-[#80618F] shadow-md transition-colors"
          aria-label="Cerrar visor de imagen"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Imagen en alta resolución */}
        <div className="relative md:w-3/5 bg-[#F6F1FA] flex items-center justify-center min-h-[300px] sm:min-h-[420px]">
          <img
            src={item.image}
            alt={item.altText}
            className="w-full h-full object-cover max-h-[75vh]"
          />

          {/* Flechas de navegación rápida */}
          {onPrev && (
            <button
              type="button"
              onClick={onPrev}
              className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-[#FFFEFC]/70 hover:bg-[#FFFEFC] text-[#352D38] shadow-xs"
              aria-label="Ver imagen anterior"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
          )}

          {onNext && (
            <button
              type="button"
              onClick={onNext}
              className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-[#FFFEFC]/70 hover:bg-[#FFFEFC] text-[#352D38] shadow-xs"
              aria-label="Ver siguiente imagen"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          )}
        </div>

        {/* Panel lateral con detalles y botón WhatsApp */}
        <div className="p-6 sm:p-8 md:w-2/5 flex flex-col justify-between">
          <div>
            <div className="text-xs font-semibold tracking-wider uppercase text-[#80618F] mb-2">
              {item.category}
            </div>
            <h3 className="text-2xl font-editorial font-medium text-[#352D38] mb-3 leading-snug">
              {item.title}
            </h3>
            <p className="text-sm text-[#6F6672] leading-relaxed mb-6">
              {item.altText}. Cada diseño se adapta a la longitud y forma de tus uñas para lograr armonía y delicadeza.
            </p>
          </div>

          <div className="pt-6 border-t border-[#352D38]/10 space-y-3">
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-[#FFFEFC] bg-[#80618F] hover:bg-[#583F63] rounded-full transition-all duration-200 shadow-sm"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Pedir este diseño en WhatsApp</span>
            </a>

            <button
              type="button"
              onClick={onClose}
              className="w-full py-2 text-xs font-medium text-[#6F6672] hover:text-[#352D38] transition-colors"
            >
              Volver a la galería
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
