/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import test from 'node:test';
import assert from 'node:assert/strict';
import {
  normalizePhoneColombia,
  formatWhatsAppUrl,
  getGeneralBookingMessage,
  getServiceBookingMessage,
  DEFAULT_COLOMBIA_PHONE,
} from './whatsapp.js';

test('normalizePhoneColombia formats 10-digit Colombian mobile correctly', () => {
  assert.equal(normalizePhoneColombia('3105239190'), '573105239190');
  assert.equal(normalizePhoneColombia('+57 310 523 9190'), '573105239190');
  assert.equal(normalizePhoneColombia('573105239190'), '573105239190');
});

test('formatWhatsAppUrl generates valid link with encoded special characters', () => {
  const message = 'Hola, Lida. ¿Podrías compartirme información?';
  const url = formatWhatsAppUrl(message, '3105239190');

  assert.ok(url.startsWith('https://wa.me/573105239190?text='));
  assert.ok(url.includes('%C2%BF') || url.includes('%3F')); // ¿ or ? encoded
  assert.ok(!url.includes(' ')); // Spaces must be percent-encoded
});

test('getServiceBookingMessage includes specific service name', () => {
  const msg = getServiceBookingMessage('Manicura semipermanente');
  assert.ok(msg.includes('Manicura semipermanente'));
  assert.ok(msg.includes('precio'));
  assert.ok(msg.includes('disponibilidad'));
});

test('getGeneralBookingMessage returns confirmed introductory copy', () => {
  const msg = getGeneralBookingMessage();
  assert.ok(msg.includes('Hola, Lida.'));
  assert.ok(msg.includes('agendar una cita'));
});
