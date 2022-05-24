import React from 'react';
import { renderHook } from '@testing-library/react';

import { useCart } from './useCart'

describe('useCart', () => {
  it('does X', () => {
    const { result } = renderHook(() => useCart())
  })
})