/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FAQ_DATA, FaqItem } from '../data/businessData.js';

export const FaqSection: React.FC = () => {
  // Primer elemento abierto por defecto para mayor claridad visual
  const [openId, setOpenId] = useState<string | null>(FAQ_DATA[0]?.id || null);

  const toggleAccordion = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="preguntas" className="py-20 sm:py-24 bg-[#F6F1FA]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="text-xs font-semibold tracking-widest uppercase text-[#80618F] mb-3">
            Dudas frecuentes
          </div>
          <h2 className="text-3xl sm:text-4xl font-editorial font-normal tracking-tight text-[#352D38] text-balance">
            Preguntas sobre nuestros servicios y citas
          </h2>
          <p className="text-base text-[#6F6672] mt-3 max-w-xl mx-auto">
            Resolvemos las inquietudes más comunes sobre atención, agenda y procedimientos.
          </p>
        </div>

        <div className="space-y-4">
          {FAQ_DATA.map((faq: FaqItem) => {
            const isOpen = openId === faq.id;
            const contentId = `faq-answer-${faq.id}`;
            const headerId = `faq-header-${faq.id}`;

            return (
              <div
                key={faq.id}
                className="bg-[#FFFEFC] rounded-2xl border border-[#352D38]/8 overflow-hidden transition-shadow duration-200 shadow-2xs hover:shadow-xs"
              >
                <button
                  type="button"
                  id={headerId}
                  onClick={() => toggleAccordion(faq.id)}
                  aria-expanded={isOpen}
                  aria-controls={contentId}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#80618F]"
                >
                  <span className="text-base sm:text-lg font-editorial font-medium text-[#352D38]">
                    {faq.question}
                  </span>
                  <span
                    className={`p-1.5 rounded-full bg-[#F6F1FA] text-[#80618F] transition-transform duration-200 shrink-0 ${
                      isOpen ? 'rotate-180 bg-[#E8C9D7]/40' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" aria-hidden="true" />
                  </span>
                </button>

                {isOpen && (
                  <div
                    id={contentId}
                    role="region"
                    aria-labelledby={headerId}
                    className="px-6 pb-5 pt-1 text-sm sm:text-base text-[#6F6672] leading-relaxed border-t border-[#352D38]/5"
                  >
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
