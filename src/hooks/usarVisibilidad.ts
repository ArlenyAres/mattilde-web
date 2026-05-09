import { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';

export interface OpcionesVisibilidad {
  umbral?: number;      // 0-1, default 0.15
  soloUnaVez?: boolean; // default true
  margen?: string;      // rootMargin, default '0px'
}

/**
 * Hook que detecta si un elemento entra en el viewport.
 * Respeta prefers-reduced-motion: si está activo devuelve siempre esVisible=true.
 */
export function usarVisibilidad(opciones: OpcionesVisibilidad = {}): {
  ref: (node: Element | null) => void;
  esVisible: boolean;
} {
  const { umbral = 0.15, soloUnaVez = true, margen = '0px' } = opciones;

  const [prefiereMenosMovimiento, setPrefiereMenosMovimiento] = useState(false);
  const yaEsVisibleRef = useRef(false);

  useEffect(() => {
    const consulta = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefiereMenosMovimiento(consulta.matches);
    const manejar = (e: MediaQueryListEvent) => setPrefiereMenosMovimiento(e.matches);
    consulta.addEventListener('change', manejar);
    return () => consulta.removeEventListener('change', manejar);
  }, []);

  const { ref, inView } = useInView({
    threshold: umbral,
    rootMargin: margen,
    triggerOnce: soloUnaVez,
  });

  if (soloUnaVez && inView) {
    yaEsVisibleRef.current = true;
  }

  const esVisible =
    prefiereMenosMovimiento ||
    (soloUnaVez ? yaEsVisibleRef.current || inView : inView);

  return { ref, esVisible };
}
