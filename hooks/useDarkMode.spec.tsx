import React from 'react';
import { renderHook } from '@testing-library/react';

import { useDarkMode } from './useDarkMode'

describe('useDarkMode', () => {
  it('does X', () => {
    const { result } = renderHook(() => useDarkMode())
  })
})