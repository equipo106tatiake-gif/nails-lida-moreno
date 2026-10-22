/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export const DEFAULT_COLOMBIA_PHONE = '573105239190';

/**
 * Limpia y normaliza un número telefónico asegurando el prefijo internacional de Colombia (57).
 */
export function normalizePhoneColombia(rawPhone: string): string {
  const digits = rawPhone.replace(/\D/g, '');
  if (digits.startsWith('57') && digits.length >= 12) {
    return digits;
  }
  if (digits.length === 10) {
    return `57${digits}`;
  }
  return digits || DEFAULT_COLOMBIA_PHONE;
}

/**
 * Genera la URL completa de WhatsApp con el mensaje codificado correctamente.
 */
export function formatWhatsAppUrl(message: string, phone: string = DEFAULT_COLOMBIA_PHONE): string {
  const cleanPhone = normalizePhoneColombia(phone);
  const encodedText = encodeURIComponent(message.trim());
  return `https://wa.me/${cleanPhone}?text=${encodedText}`;
}

/**
 * Mensaje general para agendar cita desde el Hero o botones principales.
 */
export function getGeneralBookingMessage(): string {
  return 'Hola, Lida. Vi tu página web y me gustaría conocer los servicios y la disponibilidad para agendar una cita.';
}

/**
 * Mensaje contextual para un servicio específico del catálogo.
 */
export function getServiceBookingMessage(serviceName: string): string {
  return `Hola, Lida. Estoy interesada en el servicio de ${serviceName}. ¿Podrías compartirme el precio y la disponibilidad para agendar una cita?`;
}

/**
 * Mensaje para consultar modalidad o cobertura de atención a domicilio en Medellín.
 */
export function getModalityInquiryMessage(): string {
  return 'Hola, Lida. Me gustaría consultar la cobertura y disponibilidad para el servicio a domicilio en Medellín.';
}

/**
 * Mensaje para consultar por un diseño visual específico visto en la galería.
 */
export function getGalleryDesignMessage(designTitle: string): string {
  return `Hola, Lida. Vi el diseño "${designTitle}" en tu galería y me gustaría consultar disponibilidad para realizarme este estilo.`;
}
