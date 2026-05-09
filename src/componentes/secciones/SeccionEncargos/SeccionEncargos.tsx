import { usarVisibilidad } from '@/hooks/usarVisibilidad';
import { generarUrlWhatsapp, MENSAJES_WHATSAPP } from '@/utilidades/whatsapp';
import estilos from './SeccionEncargos.module.css';

const PASOS = [
  {
    numero: '01',
    titulo: 'Cuéntanos tu idea',
    descripcion: 'Escríbenos por WhatsApp o visítanos. Cuéntanos la ocasión, el sabor y cualquier detalle que imagines.',
  },
  {
    numero: '02',
    titulo: 'Diseñamos juntos',
    descripcion: 'Te enviamos un boceto y presupuesto personalizado. Sin compromiso y totalmente adaptado a ti.',
  },
  {
    numero: '03',
    titulo: 'Horneamos con amor',
    descripcion: 'Elaboramos tu creación en el obrador con ingredientes artesanales seleccionados.',
  },
  {
    numero: '04',
    titulo: 'Lo recibes perfecto',
    descripcion: 'Recoge en tienda o acuerda la entrega. Tu tarta lista para hacer el momento especial.',
  },
];

export function SeccionEncargos() {
  const { ref, esVisible } = usarVisibilidad();
  const urlEncargo = generarUrlWhatsapp(MENSAJES_WHATSAPP.encargo);

  return (
    <section id="encargos" className={estilos.seccion}>
      <div ref={ref} className={`${estilos.contenedor} ${esVisible ? estilos.visible : ''}`}>
        <header className={estilos.encabezado}>
          <p className={estilos.etiqueta}>Pedidos personalizados</p>
          <h2 className={estilos.titulo}>¿Cómo hacer un encargo?</h2>
          <p className={estilos.subtitulo}>
            Es muy sencillo. En 4 pasos tendrás la tarta de tus sueños.
          </p>
        </header>

        <ol className={estilos.listaPasos}>
          {PASOS.map((paso) => (
            <li key={paso.numero} className={estilos.paso}>
              <span className={estilos.numeroPaso}>{paso.numero}</span>
              <div className={estilos.contenidoPaso}>
                <h3 className={estilos.tituloPaso}>{paso.titulo}</h3>
                <p className={estilos.descripcionPaso}>{paso.descripcion}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className={estilos.llamadaAccion}>
          <p className={estilos.textoCta}>¿Lista para empezar?</p>
          <a
            href={urlEncargo}
            target="_blank"
            rel="noopener noreferrer"
            className={estilos.botonCta}
          >
            Hacer mi encargo ahora
          </a>
        </div>
      </div>
    </section>
  );
}
