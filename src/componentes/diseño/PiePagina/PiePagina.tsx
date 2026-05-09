import { NOMBRE_NEGOCIO, CONTACTO } from '@/utilidades/constantes';
import estilos from './PiePagina.module.css';

export function PiePagina() {
  const anio = new Date().getFullYear();

  return (
    <footer className={estilos.pie}>
      <div className={estilos.contenedor}>
        <div className={estilos.columnaLogo}>
          <span className={estilos.logo}>{NOMBRE_NEGOCIO}</span>
          <p className={estilos.descripcion}>
            Obrador artesanal y cafetería en Chiclana de la Frontera.
            Hecho con amor, servido con cariño.
          </p>
        </div>

        <div className={estilos.columnaDatos}>
          <h3 className={estilos.tituloColumna}>Contacto</h3>
          <address className={estilos.direccion}>
            <p>{CONTACTO.direccion}</p>
            <a href={`tel:${CONTACTO.telefono}`}>{CONTACTO.telefono}</a>
            <a href={`mailto:${CONTACTO.email}`}>{CONTACTO.email}</a>
          </address>
        </div>

        <div className={estilos.columnaHorarios}>
          <h3 className={estilos.tituloColumna}>Horarios</h3>
          <ul className={estilos.listaHorarios}>
            {CONTACTO.horarios.map((horario) => (
              <li key={horario.dias}>
                <span className={estilos.dias}>{horario.dias}</span>
                <span className={estilos.horas}>
                  {horario.apertura === 'Cerrado'
                    ? 'Cerrado'
                    : `${horario.apertura} – ${horario.cierre}`}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className={estilos.base}>
        <p className={estilos.copyright}>
          © {anio} {NOMBRE_NEGOCIO}. Todos los derechos reservados.
        </p>
        {CONTACTO.redesSociales.instagram && (
          <a
            href={CONTACTO.redesSociales.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className={estilos.enlaceInstagram}
            aria-label="Síguenos en Instagram"
          >
            Instagram
          </a>
        )}
      </div>
    </footer>
  );
}
