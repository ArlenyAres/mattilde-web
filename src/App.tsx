import { HelmetProvider } from 'react-helmet-async';
import { Navegacion } from '@/componentes/diseño/Navegacion/Navegacion';
import { PiePagina } from '@/componentes/diseño/PiePagina/PiePagina';
import { BotonWhatsapp } from '@/componentes/diseño/BotonWhatsapp/BotonWhatsapp';
import { SeccionHero } from '@/componentes/secciones/SeccionHero/SeccionHero';
import { SeccionCarrusel } from '@/componentes/secciones/SeccionCarrusel/SeccionCarrusel';
import { SeccionHistoria } from '@/componentes/secciones/SeccionHistoria/SeccionHistoria';
import { SeccionCreaciones } from '@/componentes/secciones/SeccionCreaciones/SeccionCreaciones';
import { SeccionDesayunos } from '@/componentes/secciones/SeccionDesayunos/SeccionDesayunos';
import { SeccionEncargos } from '@/componentes/secciones/SeccionEncargos/SeccionEncargos';
import { SeccionReseñas } from '@/componentes/secciones/SeccionReseñas/SeccionReseñas';
import { SeccionContacto } from '@/componentes/secciones/SeccionContacto/SeccionContacto';
import estilos from './App.module.css';

export default function App() {
  return (
    <HelmetProvider>
      <div className={estilos.aplicacion}>
        <Navegacion />
        <main>
          <SeccionHero />
          <SeccionCarrusel />
          <SeccionHistoria />
          <SeccionCreaciones />
          <SeccionDesayunos />
          <SeccionEncargos />
          <SeccionReseñas />
          <SeccionContacto />
        </main>
        <PiePagina />
        <BotonWhatsapp />
      </div>
    </HelmetProvider>
  );
}
