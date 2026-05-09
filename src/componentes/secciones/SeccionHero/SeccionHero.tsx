import { generarUrlWhatsapp, MENSAJES_WHATSAPP } from '@/utilidades/whatsapp';
import { NOMBRE_NEGOCIO } from '@/utilidades/constantes';
import estilos from './SeccionHero.module.css';

export function SeccionHero() {
  const urlEncargo = generarUrlWhatsapp(MENSAJES_WHATSAPP.encargo);

  return (
    <section id="inicio" className={estilos.hero}>
      <div className={estilos.contenido}>
        <p className={estilos.subtituloSuperior}>Obrador artesanal · Chiclana de la Frontera</p>
        <h1 className={estilos.titulo}>{NOMBRE_NEGOCIO}</h1>
        <p className={estilos.descripcion}>
          Tartas personalizadas, desayunos y dulces elaborados con ingredientes
          de calidad y mucho amor. Cada creación es única, como tú.
        </p>
        <div className={estilos.acciones}>
          <a href={urlEncargo} target="_blank" rel="noopener noreferrer" className={estilos.botonPrimario}>
            Hacer un encargo
          </a>
          <a href="#creaciones" className={estilos.botonSecundario}>
            Ver creaciones
          </a>
        </div>
      </div>
      <div className={estilos.decoracion} aria-hidden="true">
        <div className={estilos.circuloGrande} />
        <div className={estilos.circuloMedio} />
        <div className={estilos.circuloPequeno} />
      </div>
    </section>
  );
}
