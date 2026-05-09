import { useCallback, useEffect, useRef, useState } from 'react';
import type { TipoSeccion } from '@/tipos';

export interface TipoEstadoScroll {
  seccionActual: TipoSeccion;
  irASeccion: (seccion: TipoSeccion) => void;
  navVisible: boolean;
}

/**
 * Hook para navegación por secciones.
 * Detecta la sección activa con IntersectionObserver (threshold 0.5)
 * y expone irASeccion para scroll suave.
 * navVisible es true cuando el usuario ha scrolleado más de 80px.
 */
export function usarScrollSeccion(
  idsSeccion: ReadonlyArray<TipoSeccion>
): TipoEstadoScroll {
  const [seccionActual, setSeccionActual] = useState<TipoSeccion>(idsSeccion[0]);
  const [navVisible, setNavVisible] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  // Detecta scroll > 80px para mostrar la nav
  useEffect(() => {
    const manejarScroll = () => setNavVisible(window.scrollY > 80);
    window.addEventListener('scroll', manejarScroll, { passive: true });
    return () => window.removeEventListener('scroll', manejarScroll);
  }, []);

  // IntersectionObserver para sección activa
  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entradas) => {
        entradas.forEach((entrada) => {
          if (entrada.isIntersecting) {
            setSeccionActual(entrada.target.id as TipoSeccion);
          }
        });
      },
      { threshold: 0.5 }
    );

    const elementos: Element[] = [];
    idsSeccion.forEach((id) => {
      const el = document.getElementById(id);
      if (el) {
        observerRef.current!.observe(el);
        elementos.push(el);
      }
    });

    return () => {
      elementos.forEach((el) => observerRef.current?.unobserve(el));
      observerRef.current?.disconnect();
    };
  }, [idsSeccion]);

  const irASeccion = useCallback((seccion: TipoSeccion) => {
    const el = document.getElementById(seccion);
    el?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  return { seccionActual, irASeccion, navVisible };
}
