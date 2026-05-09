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
      {/* Fondo guingán */}
      <div className={`fondoGuingan ${estilos.fondoGuingan}`} aria-hidden="true" />

      {/* Decoraciones flotantes */}
      <span className={estilos.corazon1} aria-hidden="true">💙</span>
      <span className={estilos.corazon2} aria-hidden="true">💙</span>

      <div className={estilos.contenidoHero}>
        {/* Columna izquierda: texto */}
        <div className={estilos.columnaTexto}>
          <p className={estilos.pretitulo}>☕ Cafetería · Obrador · Pastelería · Chiclana</p>

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
              🎂 Ver nuestras tartas
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

        {/* Columna derecha: ilustración animada */}
        <div className={estilos.columnaVisual} aria-hidden="true">
          <div className={estilos.circuloFondo} />
          <span className={estilos.emojiTarta} role="img" aria-label="Tarta de cumpleaños">
            🎂
          </span>
          <div className={estilos.badgeArtisanal}>🏠 Obrador artesanal</div>
          <div className={estilos.badgeChiclana}>📍 Chiclana, Cádiz</div>
          <div className={estilos.badgeEstrellas}>
            <span>★★★★★</span> Google
          </div>
        </div>
      </div>
    </section>
  );
}
