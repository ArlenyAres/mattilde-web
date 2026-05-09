import { useEffect, useRef, useState } from 'react';

/**
 * Hook que detecta si el usuario ha hecho scroll más allá de un umbral
 * y devuelve la sección activa basándose en los anclas visibles.
 */
export function usarScrollSeccion(umbral = 80): {
  scrollActivo: boolean;
  seccionActiva: string;
} {
  const [scrollActivo, setScrollActivo] = useState(false);
  const [seccionActiva, setSeccionActiva] = useState('inicio');
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const manejarScroll = () => {
      if (rafRef.current !== null) return;
      rafRef.current = requestAnimationFrame(() => {
        setScrollActivo(window.scrollY > umbral);

        const secciones = document.querySelectorAll<HTMLElement>('section[id]');
        let activa = 'inicio';
        secciones.forEach((seccion) => {
          const top = seccion.getBoundingClientRect().top;
          if (top <= umbral + 20) {
            activa = seccion.id;
          }
        });
        setSeccionActiva(activa);
        rafRef.current = null;
      });
    };

    window.addEventListener('scroll', manejarScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', manejarScroll);
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [umbral]);

  return { scrollActivo, seccionActiva };
}
