/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Sparkles, Palette, Home, HeartHandshake, MessageCircle } from 'lucide-react';
import { BENEFITS_DATA } from '../data/businessData.js';

export const Benefits: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-[#80618F]" aria-hidden="true" />;
      case 'Palette':
        return <Palette className="w-5 h-5 text-[#80618F]" aria-hidden="true" />;
      case 'Home':
        return <Home className="w-5 h-5 text-[#80618F]" aria-hidden="true" />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-5 h-5 text-[#80618F]" aria-hidden="true" />;
      case 'MessageCircle':
      default:
        return <MessageCircle className="w-5 h-5 text-[#80618F]" aria-hidden="true" />;
    }
  };

  return (
    <section className="py-20 bg-[#FFFEFC] border-y border-[#352D38]/8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="text-xs font-semibold tracking-widest uppercase text-[#80618F] mb-3">
            Compromiso y cercanía
          </div>
          <h2 className="text-3xl sm:text-4xl font-editorial font-normal tracking-tight text-[#352D38] text-balance">
            ¿Por qué elegir Nails Lida Moreno?
          </h2>
          <p className="text-sm sm:text-base text-[#6F6672] mt-3">
            Atributos reales y dedicación sincera en cada experiencia de atención.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BENEFITS_DATA.map((benefit, index) => (
            <div
              key={benefit.title}
              className={`p-6 rounded-2xl bg-[#F6F1FA]/60 border border-[#352D38]/6 hover:border-[#80618F]/20 transition-all duration-200 flex flex-col justify-between ${
                index === 4 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div>
                <div className="w-11 h-11 rounded-xl bg-[#FFFEFC] border border-[#352D38]/8 flex items-center justify-center mb-5 shadow-2xs">
                  {getIcon(benefit.iconName)}
                </div>
                <h3 className="text-lg font-editorial font-medium text-[#352D38] mb-2">
                  {benefit.title}
                </h3>
                <p className="text-sm text-[#6F6672] leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
