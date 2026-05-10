import type { TipoSeccion } from '@/tipos';
import estilos from './PuntosNavegacion.module.css';

export interface PropsPuntosNavegacion {
  secciones: ReadonlyArray<{ id: TipoSeccion; etiqueta: string }>;
  seccionActual: TipoSeccion;
  alNavegar: (seccion: TipoSeccion) => void;
}

export function PuntosNavegacion({
  secciones,
  seccionActual,
  alNavegar,
}: PropsPuntosNavegacion) {
  return (
    <nav
      className={estilos.contenedor}
      aria-label="Navegación por secciones"
    >
      <ul className={estilos.lista}>
        {secciones.map(({ id, etiqueta }) => {
          const activo = seccionActual === id;
          return (
            <li key={id} className={estilos.elemento}>
              <button
                className={`${estilos.punto} ${activo ? estilos.puntoActivo : ''}`}
                onClick={() => alNavegar(id)}
                aria-label={`Ir a sección: ${etiqueta}`}
                aria-current={activo ? 'true' : undefined}
                title={etiqueta}
              />
              <span className={estilos.tooltip} aria-hidden="true">
                {etiqueta}
              </span>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
