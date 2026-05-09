import { usarVisibilidad } from '@/hooks/usarVisibilidad';
import estilos from './SeccionCarrusel.module.css';

const IMAGENES_PLACEHOLDER = [
  { id: 1, alt: 'Tarta de cumpleaños personalizada' },
  { id: 2, alt: 'Croissant artesanal recién horneado' },
  { id: 3, alt: 'Tarta de boda elegante' },
  { id: 4, alt: 'Desayuno completo Mattilde' },
  { id: 5, alt: 'Cheesecake de temporada' },
  { id: 6, alt: 'Dulces artesanales del obrador' },
];

export function SeccionCarrusel() {
  const { ref, esVisible } = usarVisibilidad();

  return (
    <section id="carrusel" className={estilos.seccion} aria-label="Galería de creaciones">
      <div ref={ref} className={`${estilos.contenedor} ${esVisible ? estilos.visible : ''}`}>
        <div className={estilos.pista}>
          {[...IMAGENES_PLACEHOLDER, ...IMAGENES_PLACEHOLDER].map((img, i) => (
            <div key={`${img.id}-${i}`} className={estilos.tarjeta}>
              <div className={estilos.imagenPlaceholder} role="img" aria-label={img.alt}>
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
