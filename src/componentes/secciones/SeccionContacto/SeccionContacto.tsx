import { usarVisibilidad } from '@/hooks/usarVisibilidad';
import { CONTACTO, NOMBRE_NEGOCIO } from '@/utilidades/constantes';
import { generarUrlWhatsapp, MENSAJES_WHATSAPP } from '@/utilidades/whatsapp';
import estilos from './SeccionContacto.module.css';

export function SeccionContacto() {
  const { ref, esVisible } = usarVisibilidad();
  const urlWhatsapp = generarUrlWhatsapp(MENSAJES_WHATSAPP.info);

  return (
    <section id="contacto" className={estilos.seccion}>
      <div ref={ref} className={`${estilos.contenedor} ${esVisible ? estilos.visible : ''}`}>
        <header className={estilos.encabezado}>
          <p className={estilos.etiqueta}>Encuéntranos</p>
          <h2 className={estilos.titulo}>Visítanos o escríbenos</h2>
          <p className={estilos.subtitulo}>
            Estamos en el corazón de Chiclana. ¡Estaremos encantadas de atenderte!
          </p>
        </header>

        <div className={estilos.bloques}>
          <div className={estilos.bloqueInfo}>
            <div className={estilos.grupoInfo}>
              <h3 className={estilos.tituloGrupo}>Dirección</h3>
              <p className={estilos.textoInfo}>{CONTACTO.direccion}</p>
            </div>

            <div className={estilos.grupoInfo}>
              <h3 className={estilos.tituloGrupo}>Teléfono</h3>
              <a href={`tel:${CONTACTO.telefono}`} className={estilos.enlaceInfo}>
                {CONTACTO.telefono}
              </a>
            </div>

            <div className={estilos.grupoInfo}>
              <h3 className={estilos.tituloGrupo}>Email</h3>
              <a href={`mailto:${CONTACTO.email}`} className={estilos.enlaceInfo}>
                {CONTACTO.email}
              </a>
            </div>

            <div className={estilos.grupoInfo}>
              <h3 className={estilos.tituloGrupo}>Horarios</h3>
              <ul className={estilos.listaHorarios}>
                {CONTACTO.horarios.map((h) => (
                  <li key={h.dias} className={estilos.itemHorario}>
                    <span className={estilos.diasHorario}>{h.dias}</span>
                    <span className={estilos.horasHorario}>
                      {h.apertura === 'Cerrado' ? 'Cerrado' : `${h.apertura} – ${h.cierre}`}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className={estilos.accionesContacto}>
              <a
                href={urlWhatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className={estilos.botonWhatsapp}
              >
                Escribir por WhatsApp
              </a>
              {CONTACTO.redesSociales.instagram && (
                <a
                  href={CONTACTO.redesSociales.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={estilos.botonInstagram}
                >
                  Seguir en Instagram
                </a>
              )}
            </div>
          </div>

          <div className={estilos.bloqueMapa}>
            <iframe
              className={estilos.mapa}
              src="https://www.google.com/maps?q=Ctra.+de+la+Barrosa,+118,+local+27+y+28,+11130+Chiclana+de+la+Frontera,+C%C3%A1diz&output=embed"
              title={`Ubicación de ${NOMBRE_NEGOCIO}`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
            <a
              href="https://maps.app.goo.gl/NPWHk3p8PRFmsnCV6"
              target="_blank"
              rel="noopener noreferrer"
              className={estilos.enlaceMapa}
            >
              📍 Ver en Google Maps →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
