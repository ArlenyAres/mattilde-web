import { useState } from 'react';
import { usarScrollSeccion } from '@/hooks/usarScrollSeccion';
import { NOMBRE_CORTO, ENLACES_NAVEGACION } from '@/utilidades/constantes';
import estilos from './Navegacion.module.css';

export function Navegacion() {
  const { scrollActivo, seccionActiva } = usarScrollSeccion(80);
  const [menuAbierto, setMenuAbierto] = useState(false);

  const alternarMenu = () => setMenuAbierto((prev) => !prev);
  const cerrarMenu = () => setMenuAbierto(false);

  return (
    <header className={`${estilos.encabezado} ${scrollActivo ? estilos.encabezadoSolido : ''}`}>
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
                    seccionActiva === ancla.replace('#', '') ? estilos.enlaceActivo : ''
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
