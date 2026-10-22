/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import test from 'node:test';
import assert from 'node:assert/strict';
import { formatPrice, isPricePending, PRECIO_PENDIENTE } from './pricing.js';

test('isPricePending identifies pending values accurately', () => {
  assert.equal(isPricePending(PRECIO_PENDIENTE), true);
  assert.equal(isPricePending(undefined), true);
  assert.equal(isPricePending(null), true);
  assert.equal(isPricePending(35000), false);
  assert.equal(isPricePending(0), false);
});

test('formatPrice returns "Consultar precio" when price is pending', () => {
  assert.equal(formatPrice(PRECIO_PENDIENTE), 'Consultar precio');
  // @ts-expect-error test invalid string
  assert.equal(formatPrice('sin_definir'), 'Consultar precio');
});

test('formatPrice formats valid Colombian COP numerical price', () => {
  const result = formatPrice(45000);
  // Contains currency symbol and 45
  assert.ok(result.includes('45'), `Expected formatted price to contain 45, got ${result}`);
  assert.ok(result.includes('$'), `Expected formatted price to contain $, got ${result}`);
});
