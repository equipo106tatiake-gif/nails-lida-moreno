/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData.js';
import { formatWhatsAppUrl, getGeneralBookingMessage } from '../utils/whatsapp.js';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setMobileMenuOpen(false);

  const bookingUrl = formatWhatsAppUrl(getGeneralBookingMessage());

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-colors duration-200 ${
        isScrolled
          ? 'bg-[#FFFEFC]/95 backdrop-blur-md shadow-xs border-b border-[#352D38]/8'
          : 'bg-[#F6F1FA]/80 backdrop-blur-xs border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-20">
          {/* Zona 1: Marca editorial limpia de un solo renglón */}
          <a
            href="#inicio"
            className="text-xl sm:text-2xl font-editorial font-medium tracking-tight text-[#352D38] hover:text-[#80618F] transition-colors whitespace-nowrap shrink-0"
            aria-label={`${BUSINESS_INFO.name} - Inicio`}
          >
            {BUSINESS_INFO.name}
          </a>

          {/* Zona 2: Enlaces de navegación limpios de un solo renglón */}
          <nav
            className="hidden md:flex items-center gap-7 text-sm font-medium text-[#6F6672]"
            aria-label="Navegación principal"
          >
            <a
              href="#servicios"
              className="hover:text-[#352D38] transition-colors whitespace-nowrap shrink-0 py-1"
            >
              Servicios
            </a>
            <a
              href="#experiencia"
              className="hover:text-[#352D38] transition-colors whitespace-nowrap shrink-0 py-1"
            >
              Experiencia
            </a>
            <a
              href="#sobre-mi"
              className="hover:text-[#352D38] transition-colors whitespace-nowrap shrink-0 py-1"
            >
              Sobre Lida
            </a>
            <a
              href="#galeria"
              className="hover:text-[#352D38] transition-colors whitespace-nowrap shrink-0 py-1"
            >
              Galería
            </a>
            <a
              href="#modalidad"
              className="hover:text-[#352D38] transition-colors whitespace-nowrap shrink-0 py-1"
            >
              Modalidad
            </a>
            <a
              href="#preguntas"
              className="hover:text-[#352D38] transition-colors whitespace-nowrap shrink-0 py-1"
            >
              Preguntas
            </a>
          </nav>

          {/* Zona 3: 1 Acción principal directa */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <a
              href={bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-semibold tracking-wide uppercase text-[#FFFEFC] bg-[#80618F] hover:bg-[#583F63] rounded-full transition-all duration-200 shadow-xs hover:shadow-sm whitespace-nowrap shrink-0"
            >
              <span>Agendar mi cita</span>
              <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
            </a>
          </div>

          {/* Botón hamburguesa accesible en móvil */}
          <div className="flex md:hidden items-center gap-2">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#352D38] hover:text-[#80618F] focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#80618F] rounded-lg"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation"
              aria-label={mobileMenuOpen ? 'Cerrar menú principal' : 'Abrir menú principal'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Menú desplegable móvil */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation"
          className="md:hidden bg-[#FFFEFC] border-b border-[#352D38]/10 px-6 py-6 shadow-lg animate-in fade-in duration-150"
        >
          <nav className="flex flex-col gap-4 text-base font-medium text-[#352D38]" aria-label="Menú móvil">
            <a
              href="#servicios"
              onClick={closeMenu}
              className="py-1 hover:text-[#80618F] transition-colors"
            >
              Servicios y Precios
            </a>
            <a
              href="#experiencia"
              onClick={closeMenu}
              className="py-1 hover:text-[#80618F] transition-colors"
            >
              Experiencia y Filosofía
            </a>
            <a
              href="#sobre-mi"
              onClick={closeMenu}
              className="py-1 hover:text-[#80618F] transition-colors"
            >
              Sobre Lida Moreno
            </a>
            <a
              href="#galeria"
              onClick={closeMenu}
              className="py-1 hover:text-[#80618F] transition-colors"
            >
              Galería de Diseños
            </a>
            <a
              href="#modalidad"
              onClick={closeMenu}
              className="py-1 hover:text-[#80618F] transition-colors"
            >
              Modalidad (En casa y Domicilio)
            </a>
            <a
              href="#preguntas"
              onClick={closeMenu}
              className="py-1 hover:text-[#80618F] transition-colors"
            >
              Preguntas Frecuentes
            </a>
            <div className="pt-3 border-t border-[#352D38]/10">
              <a
                href={bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-medium text-[#FFFEFC] bg-[#80618F] rounded-full shadow-sm"
              >
                <span>Agendar mi cita por WhatsApp</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
