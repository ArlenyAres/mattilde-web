import estilos from './SeccionHero.module.css';

export interface PropsSeccionHero {
  alVerTartas: () => void;
  alEncargar: () => void;
}

export function SeccionHero({ alVerTartas, alEncargar }: PropsSeccionHero) {
  return (
    <section
      id="inicio"
      aria-labelledby="titulo-hero"
      className={estilos.seccionHero}
    >
      <div className={estilos.contenidoHero}>
        <p className={estilos.pretitulo}>Cafetería · Obrador · Pastelería · Chiclana</p>

        <h1 id="titulo-hero" className={estilos.tituloHero}>
          <span className={estilos.scriptHero}>Descubre toda</span>
          <span className={estilos.lineaPrincipal}>Nuestra</span>
          <em className={estilos.lineaAcento}>dulce</em>
          <span className={estilos.lineaPrincipal}>pastelería</span>
        </h1>

        <p className={estilos.descripcionHero}>
          Desde 2015, Matilde Amaya elabora cada dulce con mimo en su obrador artesanal
          de Chiclana. Nada de atajos, todo de corazón.
        </p>

        <div className={estilos.botonesHero}>
          <button
            onClick={alVerTartas}
            className={estilos.botonPrimario}
            type="button"
            aria-label="Ver nuestras tartas artesanales"
          >
            Ver nuestras tartas
          </button>
          <button
            onClick={alEncargar}
            className={estilos.botonSecundario}
            type="button"
            aria-label="Encargar una tarta personalizada"
          >
            Encargar →
          </button>
        </div>
      </div>
    </section>
  );
}
