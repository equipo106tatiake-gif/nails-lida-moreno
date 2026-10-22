/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * Marcador técnico para precios que aún no han sido definidos por la propietaria.
 * En la interfaz pública nunca se muestra este marcador; en su lugar se presenta "Consultar precio".
 */
export const PRECIO_PENDIENTE = 'PRECIO_PENDIENTE' as const;

export type PriceValue = number | typeof PRECIO_PENDIENTE;

/**
 * Determina si el precio se encuentra pendiente de confirmación.
 */
export function isPricePending(price: PriceValue | undefined | null): boolean {
  return price === PRECIO_PENDIENTE || price === undefined || price === null;
}

/**
 * Formatea el precio para mostrar en la interfaz pública.
 * Si el precio está pendiente, retorna "Consultar precio".
 * Si es un número, lo formatea con separadores de miles en Pesos Colombianos (COP).
 */
export function formatPrice(price: PriceValue, currency = 'COP'): string {
  if (isPricePending(price)) {
    return 'Consultar precio';
  }

  const num = typeof price === 'number' ? price : Number(price);
  if (isNaN(num)) {
    return 'Consultar precio';
  }

  // Formato COP estándar en Colombia: $ 45.000 COP
  const formatted = new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    maximumFractionDigits: 0,
  }).format(num);

  return formatted;
}
