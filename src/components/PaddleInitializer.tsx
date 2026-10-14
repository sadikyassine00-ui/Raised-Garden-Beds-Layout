'use client';

import { useEffect } from 'react';
import { preloadPaddle } from '@/lib/checkout';

export function PaddleInitializer() {
  useEffect(() => {
    preloadPaddle();
  }, []);

  return null;
}
