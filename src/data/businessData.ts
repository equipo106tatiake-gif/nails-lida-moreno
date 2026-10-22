/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { PRECIO_PENDIENTE, PriceValue } from '../utils/pricing.js';

// Imágenes generadas de alta fidelidad editorial
import heroImage from '../assets/images/hero_lida_editorial_1792696276132.jpg';
import semipermanenteImg from '../assets/images/service_semipermanente_1792696277094.jpg';
import acrilicasImg from '../assets/images/service_acrilicas_1792696277013.jpg';
import spaCareImg from '../assets/images/service_manicura_spa_1792696278068.jpg';
import specialistImg from '../assets/images/specialist_lida_1792696277919.jpg';
import pedicuraImg from '../assets/images/service_pedicura_1792696307064.jpg';
import nailArtImg from '../assets/images/service_nail_art_1792696307935.jpg';
import rubberBaseImg from '../assets/images/service_base_rubber_1792696309239.jpg';
import aestheticHandsImg from '../assets/images/gallery_hands_aesthetic_1792696308145.jpg';

export interface ServiceItem {
  id: string;
  name: string;
  category: 'Manicura' | 'Acrílicas & Rubber' | 'Pedicura & Cuidados' | 'Decoración';
  description: string;
  price: PriceValue; // Modificar a valor numérico en COP cuando Lida proporcione las tarifas (ej: 45000)
  priceClarification?: string;
  image: string;
  altText: string;
}

export interface BenefitItem {
  title: string;
  description: string;
  iconName: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
  altText: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

/**
 * DATOS PRINCIPALES DEL NEGOCIO
 * Todos los campos editables están centralizados aquí para facilitar la actualización por la propietaria.
 */
export const BUSINESS_INFO = {
  name: 'Nails Lida Moreno',
  owner: 'Lida Moreno',
  city: 'Medellín',
  department: 'Antioquia',
  country: 'Colombia',
  phoneDisplay: '310 523 9190',
  phoneRaw: '3105239190',
  phoneInternational: '573105239190',
  instagramUser: 'nails_lidamoreno',
  instagramUrl: 'https://www.instagram.com/nails_lidamoreno/',
  modality: 'Atención en casa y servicios a domicilio en Medellín',
  
  // CAMPOS PENDIENTES DE CONFIRMACIÓN POR LIDA MORENO:
  // Horarios de atención: pendiente de confirmación
  hoursNote: 'Consulta horarios y turnos disponibles vía WhatsApp.',
  // Dirección física exacta: pendiente de confirmación (no se publica dirección inventada)
  exactAddress: null as string | null,
  // Cobertura exacta de domicilios: a consultar vía chat
  homeServiceNote: 'Cobertura sujeta a disponibilidad en sectores de Medellín y área metropolitana.',
};

/**
 * CATÁLOGO DE LOS 8 SERVICIOS CONFIRMADOS
 * Para actualizar precios, sustituye PRECIO_PENDIENTE por el valor numérico en pesos (ej. 35000).
 */
export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'manicura-tradicional',
    name: 'Manicura tradicional',
    category: 'Manicura',
    description: 'Limpieza profunda de cutículas, limado anatómico de precisión, hidratación y esmaltado clásico impecable.',
    price: PRECIO_PENDIENTE,
    priceClarification: 'El valor final puede variar según complementos o diseño adicional.',
    image: spaCareImg,
    altText: 'Manicura tradicional con cuidado de cutículas e hidratación delicada',
  },
  {
    id: 'manicura-semipermanente',
    name: 'Manicura semipermanente',
    category: 'Manicura',
    description: 'Esmaltado en gel curado en lámpara LED que brinda brillo espejo, secado instantáneo y máxima durabilidad.',
    price: PRECIO_PENDIENTE,
    priceClarification: 'Incluye esmaltado en un tono o dos tonos básicos.',
    image: semipermanenteImg,
    altText: 'Manicura semipermanente en tono pastel mauve con acabado brillante',
  },
  {
    id: 'acrilicas-esculpidas',
    name: 'Uñas acrílicas esculpidas',
    category: 'Acrílicas & Rubber',
    description: 'Extensiones moldeadas a mano sobre tu uña natural, adaptadas con precisión a tu largo y forma favorita (almendra, cuadrada o stiletto).',
    price: PRECIO_PENDIENTE,
    priceClarification: 'Depende del número de largo y técnica de acabado solicitada.',
    image: acrilicasImg,
    altText: 'Uñas acrílicas esculpidas en forma almendra con degradé baby boomer',
  },
  {
    id: 'forrado-acrilico',
    name: 'Forrado de acrílico',
    category: 'Acrílicas & Rubber',
    description: 'Estructuración y blindaje con acrílico sobre el largo natural para dar fuerza, resistencia y evitar fracturas.',
    price: PRECIO_PENDIENTE,
    priceClarification: 'Aplicado sobre uña natural sin extensión de largo.',
    image: rubberBaseImg,
    altText: 'Forrado de acrílico sobre uña natural con tono porcelana',
  },
  {
    id: 'base-rubber-semi',
    name: 'Base rubber + semipermanente',
    category: 'Acrílicas & Rubber',
    description: 'Base elástica niveladora de alta viscosidad que refuerza uñas delgadas o quebradizas y maximiza la adhesión del esmalte.',
    price: PRECIO_PENDIENTE,
    priceClarification: 'Ideal para personas que desean fortalecer su uña natural.',
    image: heroImage,
    altText: 'Uñas niveladas con base rubber y tono nude rosado brillante',
  },
  {
    id: 'pedicura-semipermanente',
    name: 'Pedicura semipermanente',
    category: 'Pedicura & Cuidados',
    description: 'Tratamiento estético de pies con limpieza prolija, exfoliación, hidratación y esmalte en gel de larga duración.',
    price: PRECIO_PENDIENTE,
    priceClarification: 'Diseño para pies descansados y uñas presentables por semanas.',
    image: pedicuraImg,
    altText: 'Pedicura semipermanente estética en tono rosa suave con toallas blancas',
  },
  {
    id: 'decoracion-adicional',
    name: 'Decoración adicional',
    category: 'Decoración',
    description: 'Detalles artísticos a mano alzada, francesas contemporáneas, líneas minimalistas, glitter sutil o acentos delicados.',
    price: PRECIO_PENDIENTE,
    priceClarification: 'El costo depende de la complejidad del arte y número de uñas decoradas.',
    image: nailArtImg,
    altText: 'Nail art minimalista con ondas orgánicas y trazos sutiles en tono lila',
  },
  {
    id: 'retiro-semipermanente',
    name: 'Retiro de esmalte semipermanente',
    category: 'Pedicura & Cuidados',
    description: 'Retiro cuidadoso y no abrasivo que preserva la salud de la lámina ungueal, acompañado de nutrición con aceites esenciales.',
    price: PRECIO_PENDIENTE,
    priceClarification: 'Tarifa preferencial si se acompaña de una nueva manicura.',
    image: aestheticHandsImg,
    altText: 'Cuidado y nutrición profunda tras el retiro de esmalte semipermanente',
  },
];

/**
 * ATRIBUTOS Y BENEFICIOS RESPONSABLES (SIN AFIRMACIONES NO VERIFICADAS)
 */
export const BENEFITS_DATA: BenefitItem[] = [
  {
    title: 'Atención 100% personalizada',
    description: 'Cada servicio se realiza dedicando el tiempo necesario para escuchar tus gustos y cuidar cada detalle de tus manos.',
    iconName: 'Sparkles',
  },
  {
    title: 'Variedad de técnicas modernas',
    description: 'Desde esmaltado tradicional y semipermanente hasta acrílico esculpido y nivelación con base rubber.',
    iconName: 'Palette',
  },
  {
    title: 'En casa o a domicilio en Medellín',
    description: 'Elige la comodidad que prefieras: visita nuestro espacio de atención o consulta disponibilidad para servicio en tu hogar.',
    iconName: 'Home',
  },
  {
    title: 'Portafolio y diseños contemporáneos',
    description: 'Estilos limpios, elegantes y actuales, adaptados tanto a looks sobrios para el día a día como a ocasiones especiales.',
    iconName: 'HeartHandshake',
  },
  {
    title: 'Comunicación directa vía WhatsApp',
    description: 'Sin intermediarios ni procesos complicados: conversa directamente con Lida para resolver dudas y agendar.',
    iconName: 'MessageCircle',
  },
];

/**
 * PERFIL PROFESIONAL: LIDA MORENO
 * Solo información confirmada. Campos formativos pendientes de verificación por la propietaria.
 */
export const SPECIALIST_PROFILE = {
  name: 'Lida Moreno',
  role: 'Especialista en Manicura y Cuidado Estético',
  image: specialistImg,
  altText: 'Lida Moreno sonriendo en su estudio de manicura con esmaltes y herramientas limpias',
  intro: 'Apasionada por el arte de las uñas y el cuidado dedicado de las manos. Para mí, una manicura no es solo un procedimiento estético, sino un espacio personal de bienestar, relajación y expresión de tu estilo propio.',
  philosophy: 'Trabajo con dedicación en cada detalle, respetando la estructura natural de tus uñas y recomendándote la técnica más adecuada para tu ritmo de vida y preferencias visuales.',
  verifiedHighlights: [
    'Especialista en acrílico esculpido y base rubber',
    'Técnicas de esmaltado semipermanente de alta precisión',
    'Atención cuidada, sin prisas y orientada a tus gustos',
    'Servicio a domicilio en sectores acordados de Medellín',
  ],
  // NOTA PARA LA PROPIETARIA:
  // Completa aquí tu año de inicio o certificaciones cuando desees agregarlas al perfil:
  yearsOfExperience: null as number | null,
  certifications: [] as string[],
};

/**
 * GALERÍA DE DISEÑOS
 * Fotografías demostrativas de referencia estética editorial.
 */
export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Pastel Mauve Gloss',
    category: 'Semipermanente',
    image: semipermanenteImg,
    altText: 'Uñas con acabado semipermanente en tono malva pastel brillante',
  },
  {
    id: 'gal-2',
    title: 'Esculpidas Baby Boomer',
    category: 'Acrílicas',
    image: acrilicasImg,
    altText: 'Uñas acrílicas esculpidas con suave degradado baby boomer blanco y rosado',
  },
  {
    id: 'gal-3',
    title: 'Minimalist Line Art',
    category: 'Nail Art',
    image: nailArtImg,
    altText: 'Diseño de nail art minimalista con ondas orgánicas y líneas suaves',
  },
  {
    id: 'gal-4',
    title: 'Rubber Base & Nude Glaze',
    category: 'Base Rubber',
    image: rubberBaseImg,
    altText: 'Nivelación con base rubber en tono nude con brillo duradero',
  },
  {
    id: 'gal-5',
    title: 'Cuidado & Bienestar Spa',
    category: 'Cuidado Personal',
    image: spaCareImg,
    altText: 'Tratamiento de cutículas con aceites nutritivos en entorno spa',
  },
  {
    id: 'gal-6',
    title: 'Pedicura Soft Rose',
    category: 'Pedicura',
    image: pedicuraImg,
    altText: 'Pedicura semipermanente en tono rosa delicado sobre toalla blanca',
  },
  {
    id: 'gal-7',
    title: 'Elegancia Cotidiana en Tonos Lila',
    category: 'Manicura Editorial',
    image: heroImage,
    altText: 'Manos cuidadas con manicura lila suave en composición editorial',
  },
  {
    id: 'gal-8',
    title: 'Detalles y Brillo Natural',
    category: 'Acabados',
    image: aestheticHandsImg,
    altText: 'Manos elegantes sosteniendo una taza de cerámica con manicura sutil',
  },
];

/**
 * PREGUNTAS FRECUENTES CONFIRMADAS
 */
export const FAQ_DATA: FaqItem[] = [
  {
    id: 'faq-1',
    question: '¿Qué servicios ofrece Nails Lida Moreno?',
    answer: 'Ofrecemos manicura tradicional, manicura semipermanente, uñas acrílicas esculpidas, forrado de acrílico, base rubber + semipermanente, pedicura semipermanente, decoración adicional y retiro seguro de esmalte semipermanente.',
  },
  {
    id: 'faq-2',
    question: '¿Cómo puedo reservar una cita?',
    answer: 'Puedes solicitar tu cita pulsando cualquiera de los botones de WhatsApp de la página (310 523 9190). Te responderemos con los horarios disponibles para coordinar la fecha y hora que mejor te acomode.',
  },
  {
    id: 'faq-3',
    question: '¿Cuáles son los precios de los servicios?',
    answer: 'Los precios varían según el servicio elegido, el largo deseado en acrílicas o la complejidad del diseño adicional. Puedes consultar la tarifa exacta de cualquiera de nuestros servicios escribiéndonos directamente por WhatsApp.',
  },
  {
    id: 'faq-4',
    question: '¿Ofrece atención a domicilio?',
    answer: 'Sí, contamos con modalidad de atención en casa y servicio a domicilio en la ciudad de Medellín. Escríbenos a WhatsApp para consultar la disponibilidad y verificar la cobertura en tu zona o barrio.',
  },
  {
    id: 'faq-5',
    question: '¿Cómo puedo consultar la disponibilidad de fechas?',
    answer: 'Simplemente haz clic en el botón de WhatsApp e indícanos qué día y franja horaria prefieres. Lida te confirmará los turnos más próximos para agendar tu espacio.',
  },
  {
    id: 'faq-6',
    question: '¿Cómo puedo solicitar un diseño personalizado de nail art?',
    answer: 'Si tienes una foto de referencia de Instagram, Pinterest o una idea propia, envíala por WhatsApp al agendar tu cita. Con gusto te asesoraremos sobre la técnica recomendada y el tiempo requerido para realizarla.',
  },
];

/**
 * TESTIMONIOS (DESACTIVADOS POR DEFECTO HASTA TENER RESEÑAS REALES DE CLIENTES)
 * Siguiendo las directrices éticas del proyecto, no inventamos testimonios ni calificaciones falsas.
 */
export const TESTIMONIALS_ENABLED = false;
export const TESTIMONIALS_DATA = [];
