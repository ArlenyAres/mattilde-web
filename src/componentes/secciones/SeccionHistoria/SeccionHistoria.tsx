import { usarVisibilidad } from '@/hooks/usarVisibilidad';
import estilos from './SeccionHistoria.module.css';

export function SeccionHistoria() {
  const { ref, esVisible } = usarVisibilidad();

  return (
    <section id="historia" className={estilos.seccion}>
      <div ref={ref} className={`${estilos.contenedor} ${esVisible ? estilos.visible : ''}`}>
        <div className={estilos.columnaTexto}>
          <p className={estilos.etiqueta}>Nuestra historia</p>
          <h2 className={estilos.titulo}>Hecho con amor desde el primer día</h2>
          <p className={estilos.parrafo}>
            Todo empezó con una pasión: crear dulces que hicieran feliz a la gente.
            Mattilde es una cafetería y obrador artesanal en el corazón de Chiclana de la Frontera,
            donde cada tarta, cada croissant y cada taza de café se elabora con ingredientes
            seleccionados y mucho cariño.
          </p>
          <p className={estilos.parrafo}>
            Creemos que los momentos especiales merecen dulces especiales. Por eso cada
            encargo es único: lo diseñamos contigo para que sea exactamente como lo imaginas.
          </p>
          <ul className={estilos.valores}>
            <li className={estilos.valorItem}>
              <span className={estilos.valorIcono}>✦</span>
              <span>Ingredientes artesanales de calidad</span>
            </li>
            <li className={estilos.valorItem}>
              <span className={estilos.valorIcono}>✦</span>
              <span>Elaboración propia en obrador</span>
            </li>
            <li className={estilos.valorItem}>
              <span className={estilos.valorIcono}>✦</span>
              <span>Diseños únicos y personalizados</span>
            </li>
            <li className={estilos.valorItem}>
              <span className={estilos.valorIcono}>✦</span>
              <span>Trato cercano y familiar</span>
            </li>
          </ul>
        </div>
        <div className={estilos.columnaImagen}>
          <div className={estilos.marcoCuadro}>
            <div className={estilos.imagenPlaceholder} role="img" aria-label="Mattilde en su obrador">
              <span className={estilos.iconoPlaceholder}>👩‍🍳</span>
            </div>
          </div>
          <div className={estilos.adorno} aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
