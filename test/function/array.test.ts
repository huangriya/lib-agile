import { assert, expect, test } from 'vitest'
import { arrEq } from '../../src'

test('arrEq', () => {
  expect(arrEq([1, 2, 3], 1)).toBe(2)
  expect(arrEq([1, 2, 3], 9)).toBe(undefined)
  expect(arrEq([1, 2, 3], -1)).toBe(3)
  expect(arrEq([1, 2, 3], -2)).toBe(2)
})
