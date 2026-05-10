import { usarVisibilidad } from '@/hooks/usarVisibilidad';
import estilos from './SeccionCarrusel.module.css';

const IMAGENES_PLACEHOLDER = [
  { id: 1, alt: 'Tarta de cumpleaños personalizada en Chiclana de la Frontera', dataSrc: '/imagenes/tarta-cumpleanos.jpg' },
  { id: 2, alt: 'Croissant artesanal recién horneado en obrador Mattilde Chiclana', dataSrc: '/imagenes/croissant.jpg' },
  { id: 3, alt: 'Tarta de boda elegante elaborada en Chiclana de la Frontera Cádiz', dataSrc: '/imagenes/tarta-boda.jpg' },
  { id: 4, alt: 'Desayuno completo Mattilde cafetería La Barrosa Chiclana', dataSrc: '/imagenes/desayuno.jpg' },
  { id: 5, alt: 'Cheesecake de temporada pastelería artesanal Cádiz', dataSrc: '/imagenes/cheesecake.jpg' },
  { id: 6, alt: 'Dulces artesanales del obrador Más que Tartas Mattilde Chiclana', dataSrc: '/imagenes/dulces.jpg' },
];

export function SeccionCarrusel() {
  const { ref, esVisible } = usarVisibilidad();

  return (
    <section id="carrusel" className={estilos.seccion} aria-label="Galería de creaciones">
      <div ref={ref} className={`${estilos.contenedor} ${esVisible ? estilos.visible : ''}`}>
        <div className={estilos.pista}>
          {[...IMAGENES_PLACEHOLDER, ...IMAGENES_PLACEHOLDER].map((img, i) => (
            <div key={`${img.id}-${i}`} className={estilos.tarjeta}>
              <div
                className={estilos.imagenPlaceholder}
                role="img"
                aria-label={img.alt}
                data-src={img.dataSrc}
              >
                <span className={estilos.iconoPlaceholder}>🎂</span>
              </div>
              <p className={estilos.etiquetaImagen}>{img.alt}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
