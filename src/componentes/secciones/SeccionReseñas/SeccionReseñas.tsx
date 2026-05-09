import { usarVisibilidad } from '@/hooks/usarVisibilidad';
import { reseñas } from '@/datos/reseñas';
import estilos from './SeccionReseñas.module.css';

function Estrella({ llena }: { llena: boolean }) {
  return (
    <span className={llena ? estilos.estrellaLlena : estilos.estrellaVacia} aria-hidden="true">
      ★
    </span>
  );
}

export function SeccionReseñas() {
  const { ref, esVisible } = usarVisibilidad();

  return (
    <section id="resenas" className={estilos.seccion}>
      <div ref={ref} className={`${estilos.contenedor} ${esVisible ? estilos.visible : ''}`}>
        <header className={estilos.encabezado}>
          <p className={estilos.etiqueta}>Lo que dicen</p>
          <h2 className={estilos.titulo}>Ellos ya nos conocen</h2>
        </header>

        <ul className={estilos.cuadricula}>
          {reseñas.map((reseña) => (
            <li key={reseña.id} className={estilos.tarjeta}>
              <div className={estilos.estrellas} role="img" aria-label={`${reseña.valoracion} de 5 estrellas`}>
                {Array.from({ length: 5 }, (_, i) => (
                  <Estrella key={i} llena={i < reseña.valoracion} />
                ))}
              </div>
              <p className={estilos.textoReseña}>"{reseña.texto}"</p>
              <div className={estilos.autor}>
                <span className={estilos.nombreAutor}>{reseña.nombre}</span>
                <span className={estilos.plataforma}>{reseña.plataforma}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
