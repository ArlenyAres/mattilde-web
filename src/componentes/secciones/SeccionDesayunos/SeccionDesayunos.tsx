import { usarVisibilidad } from '@/hooks/usarVisibilidad';
import { menuDesayunos } from '@/datos/menuDesayunos';
import { menuBebidas } from '@/datos/menuBebidas';
import estilos from './SeccionDesayunos.module.css';

export function SeccionDesayunos() {
  const { ref, esVisible } = usarVisibilidad();

  return (
    <section id="desayunos" className={estilos.seccion}>
      <div ref={ref} className={`${estilos.contenedor} ${esVisible ? estilos.visible : ''}`}>
        <header className={estilos.encabezado}>
          <p className={estilos.etiqueta}>Cafetería</p>
          <h2 className={estilos.titulo}>Desayunos y bebidas</h2>
          <p className={estilos.subtitulo}>
            Empieza el día como mereces, con productos frescos y elaborados en nuestro obrador.
          </p>
        </header>

        <div className={estilos.bloques}>
          <div className={estilos.bloque}>
            <h3 className={estilos.tituloBloque}>Desayunos</h3>
            <ul className={estilos.listaMenu}>
              {menuDesayunos.map((item) => (
                <li key={item.id} className={estilos.itemMenu}>
                  <div className={estilos.itemEncabezado}>
                    <span className={estilos.itemNombre}>{item.nombre}</span>
                    <span className={estilos.itemPrecio}>{item.precio.toFixed(2)} €</span>
                  </div>
                  <p className={estilos.itemDescripcion}>{item.descripcion}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className={estilos.bloque}>
            <h3 className={estilos.tituloBloque}>Bebidas</h3>
            <ul className={estilos.listaMenu}>
              {menuBebidas.map((item) => (
                <li key={item.id} className={estilos.itemMenu}>
                  <div className={estilos.itemEncabezado}>
                    <span className={estilos.itemNombre}>{item.nombre}</span>
                    <span className={estilos.itemPrecio}>{item.precio.toFixed(2)} €</span>
                  </div>
                  <p className={estilos.itemDescripcion}>{item.descripcion}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
