import { useInView } from 'react-intersection-observer';

export interface OpcionesVisibilidad {
  umbral?: number;
  soloUnaVez?: boolean;
}

/**
 * Hook que detecta si un elemento es visible en el viewport.
 * Devuelve una ref y un booleano de visibilidad.
 */
export function usarVisibilidad(opciones: OpcionesVisibilidad = {}): {
  ref: (node?: Element | null) => void;
  esVisible: boolean;
} {
  const { umbral = 0.15, soloUnaVez = true } = opciones;
  const { ref, inView } = useInView({
    threshold: umbral,
    triggerOnce: soloUnaVez,
  });

  return { ref, esVisible: inView };
}
