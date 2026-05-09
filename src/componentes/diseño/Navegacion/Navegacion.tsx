import { useState } from 'react';
import { usarScrollSeccion } from '@/hooks/usarScrollSeccion';
import { NOMBRE_CORTO, ENLACES_NAVEGACION } from '@/utilidades/constantes';
import type { TipoSeccion } from '@/tipos';
import estilos from './Navegacion.module.css';

const IDS_SECCION = [
  'inicio',
  'historia',
  'creaciones',
  'desayunos',
  'encargos',
  'resenas',
  'contacto',
] as const satisfies ReadonlyArray<TipoSeccion>;

export function Navegacion() {
  const { navVisible, seccionActual } = usarScrollSeccion(IDS_SECCION);
  const [menuAbierto, setMenuAbierto] = useState(false);

  const alternarMenu = () => setMenuAbierto((prev) => !prev);
  const cerrarMenu = () => setMenuAbierto(false);

  return (
    <header className={`${estilos.encabezado} ${navVisible ? estilos.encabezadoSolido : ''}`}>
      <div className={estilos.contenedorNav}>
        <a href="#inicio" className={estilos.logo} onClick={cerrarMenu}>
          <span className={estilos.logoTexto}>{NOMBRE_CORTO}</span>
        </a>

        <nav
          className={`${estilos.nav} ${menuAbierto ? estilos.navAbierto : ''}`}
          aria-label="Navegación principal"
        >
          <ul className={estilos.listaNav}>
            {ENLACES_NAVEGACION.map(({ etiqueta, ancla }) => (
              <li key={ancla}>
                <a
                  href={ancla}
                  className={`${estilos.enlaceNav} ${
                    seccionActual === ancla.replace('#', '') ? estilos.enlaceActivo : ''
                  }`}
                  onClick={cerrarMenu}
                >
                  {etiqueta}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <button
          className={estilos.botonHamburguesa}
          onClick={alternarMenu}
          aria-label={menuAbierto ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={menuAbierto}
        >
          <span className={`${estilos.lineaHamburguesa} ${menuAbierto ? estilos.lineaActiva : ''}`} />
          <span className={`${estilos.lineaHamburguesa} ${menuAbierto ? estilos.lineaActiva : ''}`} />
          <span className={`${estilos.lineaHamburguesa} ${menuAbierto ? estilos.lineaActiva : ''}`} />
        </button>
      </div>
    </header>
  );
}
