/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import spaCareImg from '../assets/images/service_manicura_spa_1792696278068.jpg';
import aestheticHandsImg from '../assets/images/gallery_hands_aesthetic_1792696308145.jpg';

export const Experience: React.FC = () => {
  return (
    <section id="experiencia" className="py-20 bg-[#FFFEFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Columna Editorial Izquierda */}
          <div className="lg:col-span-6 space-y-6">
            <div className="text-xs font-semibold tracking-widest uppercase text-[#80618F]">
              Nuestra filosofía
            </div>

            <h2 className="text-3xl sm:text-4xl font-editorial font-normal tracking-tight text-[#352D38] leading-tight text-balance">
              Donde el cuidado dedicado se encuentra con el detalle.
            </h2>

            <div className="space-y-4 text-base text-[#6F6672] leading-relaxed">
              <p>
                En Nails Lida Moreno concebimos la manicura como un ritual personal de calma y cuidado.
                Nos tomamos el tiempo necesario para atender cada mano y cada pie con paciencia,
                asegurando una preparación prolija de cutículas y un limado armónico acorde a tu fisionomía.
              </p>
              <p>
                Creemos que la verdadera sofisticación reside en la pulcritud de los bordes, la suavidad
                del tono y la comodidad con la que llevas tus uñas en el día a día. Por eso, adaptamos
                cada procedimiento a tus hábitos y preferencias estéticas.
              </p>
            </div>

            {/* Pilares sutiles con numeración editorial (sin slashes mecánicos) */}
            <div className="pt-6 grid grid-cols-1 sm:grid-cols-2 gap-6 border-t border-[#352D38]/10 text-sm">
              <div>
                <span className="text-xs font-semibold text-[#80618F] block mb-1">01. Cuidado Integral</span>
                <p className="text-[#6F6672]">
                  Respeto riguroso por la salud y estructura de la uña natural en cada retiro o aplicación.
                </p>
              </div>
              <div>
                <span className="text-xs font-semibold text-[#80618F] block mb-1">02. Acabado Artesanal</span>
                <p className="text-[#6F6672]">
                  Capas delgadas, nivelación simétrica y brillo duradero sin saturar la uña.
                </p>
              </div>
            </div>
          </div>

          {/* Columna Visual Derecha (Doble fotografía editorial tipo díptico) */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-4 sm:gap-6 items-center">
            <div className="space-y-4">
              <div className="aspect-3/4 rounded-2xl overflow-hidden shadow-md">
                <img
                  src={spaCareImg}
                  alt="Tratamiento de hidratación y aceites nutritivos para manos"
                  className="w-full h-full object-cover hover:scale-103 transition-transform duration-500"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-4 bg-[#F6F1FA] rounded-xl text-center">
                <p className="text-xs font-medium text-[#352D38]">Atención personalizada</p>
                <p className="text-[11px] text-[#6F6672] mt-0.5">Sin prisas, adaptada a ti</p>
              </div>
            </div>

            <div className="space-y-4 pt-8 sm:pt-12">
              <div className="p-4 bg-[#E8C9D7]/30 rounded-xl text-center">
                <p className="text-xs font-medium text-[#352D38]">Medellín y domicilio</p>
                <p className="text-[11px] text-[#6F6672] mt-0.5">Comodidad y flexibilidad</p>
              </div>
              <div className="aspect-3/4 rounded-2xl overflow-hidden shadow-md">
                <img
                  src={aestheticHandsImg}
                  alt="Manos con manicura elegante y aspecto saludable"
                  className="w-full h-full object-cover hover:scale-103 transition-transform duration-500"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
