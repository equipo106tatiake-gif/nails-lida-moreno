/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Home, MapPin, Calendar, MessageCircle, ArrowUpRight } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData.js';
import { formatWhatsAppUrl, getModalityInquiryMessage } from '../utils/whatsapp.js';

export const Modality: React.FC = () => {
  const modalityWaUrl = formatWhatsAppUrl(getModalityInquiryMessage());

  return (
    <section id="modalidad" className="py-20 bg-[#FFFEFC] border-t border-[#352D38]/8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="text-xs font-semibold tracking-widest uppercase text-[#80618F] mb-3">
            Dónde y cómo te atendemos
          </div>
          <h2 className="text-3xl sm:text-4xl font-editorial font-normal tracking-tight text-[#352D38] text-balance">
            Modalidad de atención: En casa y a domicilio
          </h2>
          <p className="text-base text-[#6F6672] mt-3">
            Adaptamos el servicio a tu conveniencia para que disfrutes del cuidado de tus uñas sin complicaciones.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Tarjeta Modalidad 1: Atención en Casa */}
          <div className="p-8 rounded-3xl bg-[#F6F1FA] border border-[#352D38]/6 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#FFFEFC] flex items-center justify-center text-[#80618F] mb-6 shadow-2xs">
                <Home className="w-6 h-6" />
              </div>

              <h3 className="text-xl font-editorial font-medium text-[#352D38] mb-3">
                Atención en espacio de trabajo
              </h3>

              <p className="text-sm text-[#6F6672] leading-relaxed mb-6">
                Disfruta de un ambiente tranquilo, ordenado y pensado para tu comodidad.
                Espacio acondicionado con iluminación óptima, selección de esmaltes y música relajante.
              </p>

              <div className="space-y-2 text-xs text-[#352D38]">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#80618F] shrink-0" />
                  <span>Medellín, Antioquia, Colombia</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-[#80618F] shrink-0" />
                  <span>Citas previas coordinadas directamente con Lida</span>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-[#352D38]/8">
              <a
                href={modalityWaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold text-[#80618F] hover:text-[#583F63] uppercase tracking-wider group"
              >
                <span>Consultar disponibilidad</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>

          {/* Tarjeta Modalidad 2: Servicio a Domicilio */}
          <div className="p-8 rounded-3xl bg-[#F6F1FA] border border-[#352D38]/6 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#FFFEFC] flex items-center justify-center text-[#80618F] mb-6 shadow-2xs">
                <MapPin className="w-6 h-6" />
              </div>

              <h3 className="text-xl font-editorial font-medium text-[#352D38] mb-3">
                Servicio a domicilio en Medellín
              </h3>

              <p className="text-sm text-[#6F6672] leading-relaxed mb-6">
                Recibe la experiencia completa en la calidez de tu propio hogar. Lida lleva los materiales
                y equipos necesarios para brindarte una atención impecable sin que tengas que desplazarte.
              </p>

              <div className="space-y-2 text-xs text-[#352D38]">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#80618F] shrink-0" />
                  <span>Cobertura en sectores acordados de Medellín</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-[#80618F] shrink-0" />
                  <span>Agenda con anticipación para reservar tu franja horaria</span>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-[#352D38]/8">
              <a
                href={modalityWaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold text-[#80618F] hover:text-[#583F63] uppercase tracking-wider group"
              >
                <span>Consultar cobertura en tu barrio</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>
        </div>

        {/* Módulo informativo para futura integración de mapa */}
        <div className="mt-12 max-w-4xl mx-auto p-6 bg-[#E8C9D7]/20 rounded-2xl border border-[#80618F]/15 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="text-sm font-semibold text-[#352D38]">
              ¿Tienes dudas sobre la ubicación o el desplazamiento?
            </h4>
            <p className="text-xs text-[#6F6672] mt-0.5">
              Escríbenos tu sector en Medellín y te confirmaremos disponibilidad de horario de inmediato.
            </p>
          </div>

          <a
            href={modalityWaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#FFFEFC] bg-[#80618F] hover:bg-[#583F63] rounded-full shrink-0 transition-colors shadow-xs"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>Consultar por WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};
