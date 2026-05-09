import { usarVisibilidad } from '@/hooks/usarVisibilidad';
import { menuTartas } from '@/datos/menuTartas';
import estilos from './SeccionCreaciones.module.css';

export function SeccionCreaciones() {
  const { ref, esVisible } = usarVisibilidad();

  return (
    <section id="creaciones" className={estilos.seccion}>
      <div ref={ref} className={`${estilos.contenedor} ${esVisible ? estilos.visible : ''}`}>
        <header className={estilos.encabezado}>
          <p className={estilos.etiqueta}>Nuestras creaciones</p>
          <h2 className={estilos.titulo}>Tartas que cuentan historias</h2>
          <p className={estilos.subtitulo}>
            Cada tarta es única. Diseñamos la tuya con el sabor, relleno y decoración que imaginas.
          </p>
        </header>

        <ul className={estilos.cuadricula}>
          {menuTartas.map((tarta) => (
            <li key={tarta.id} className={estilos.tarjeta}>
              <div className={estilos.imagenTarjeta} role="img" aria-label={tarta.nombre}>
                <span className={estilos.iconoTarjeta}>🎂</span>
              </div>
              <div className={estilos.cuerpoTarjeta}>
                <h3 className={estilos.nombreTarta}>{tarta.nombre}</h3>
                <p className={estilos.descripcionTarta}>{tarta.descripcion}</p>
                {tarta.etiquetas && (
                  <div className={estilos.etiquetas}>
                    {tarta.etiquetas.map((etiq) => (
                      <span key={etiq} className={estilos.etiquetaBadge}>{etiq}</span>
                    ))}
                  </div>
                )}
                <p className={estilos.precio}>
                  {tarta.precio === 0
                    ? 'Presupuesto personalizado'
                    : `Desde ${tarta.precio.toFixed(2)} €`}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
