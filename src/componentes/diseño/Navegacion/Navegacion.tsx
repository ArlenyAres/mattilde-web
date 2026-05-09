import { useState } from 'react';
import type { TipoSeccion } from '@/tipos';
import { generarUrlWhatsapp, MENSAJES_WHATSAPP } from '@/utilidades/whatsapp';
import estilos from './Navegacion.module.css';

export interface PropsNavegacion {
  seccionActual: TipoSeccion;
  navVisible: boolean;
  alNavegar: (seccion: TipoSeccion) => void;
}

const urlWhatsappPedido = generarUrlWhatsapp(MENSAJES_WHATSAPP.encargo);

export function Navegacion({ seccionActual, navVisible, alNavegar }: PropsNavegacion) {
  const [menuAbierto, setMenuAbierto] = useState(false);

  const alternarMenu = () => setMenuAbierto((prev) => !prev);
  const cerrarMenu = () => setMenuAbierto(false);

  const manejarNavegar = (seccion: TipoSeccion) => {
    alNavegar(seccion);
    cerrarMenu();
  };

  return (
    <header
      role="banner"
      className={`${estilos.encabezado} ${navVisible ? estilos.encabezadoSolido : ''}`}
    >
      <nav aria-label="Navegación principal">
        <div className={estilos.contenedorNav}>
          {/* Logo — izquierda/centro */}
          <a
            href="#inicio"
            className={estilos.logo}
            onClick={() => manejarNavegar('inicio')}
            aria-label="Más que Tartas Mattilde - Ir al inicio"
          >
            Mattilde
          </a>

          {/* Links — derecha */}
          <ul
            id="menu-navegacion"
            className={`${estilos.enlacesNav} ${menuAbierto ? estilos.enlacesNavAbierto : ''}`}
            role="list"
          >
            {(
              [
                { id: 'inicio', etiqueta: 'Inicio' },
                { id: 'desayunos', etiqueta: 'Desayunos' },
                { id: 'encargos', etiqueta: 'Encargos' },
                { id: 'contacto', etiqueta: 'Contacto' },
              ] as { id: TipoSeccion; etiqueta: string }[]
            ).map(({ id, etiqueta }) => (
              <li key={id}>
                <button
                  className={`${estilos.enlaceNav} ${seccionActual === id ? estilos.enlaceActivo : ''}`}
                  onClick={() => manejarNavegar(id)}
                  aria-current={seccionActual === id ? 'true' : undefined}
                >
                  {etiqueta}
                </button>
              </li>
            ))}
            <li>
              <a
                href={urlWhatsappPedido}
                className={estilos.botonPedido}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Hacer un pedido por WhatsApp"
              >
                💬 Pedir
              </a>
            </li>
          </ul>

          {/* Hamburguesa — mobile */}
          <button
            className={estilos.botonHamburguesa}
            onClick={alternarMenu}
            aria-label={menuAbierto ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={menuAbierto}
            aria-controls="menu-navegacion"
          >
            <span className={`${estilos.lineaHamburguesa} ${menuAbierto ? estilos.lineaActiva : ''}`} />
            <span className={`${estilos.lineaHamburguesa} ${menuAbierto ? estilos.lineaActiva : ''}`} />
            <span className={`${estilos.lineaHamburguesa} ${menuAbierto ? estilos.lineaActiva : ''}`} />
          </button>
        </div>
      </nav>
    </header>
  );
}
