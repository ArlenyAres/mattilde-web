import { HelmetProvider } from 'react-helmet-async';
import { CabeceraSEO } from '@/componentes/diseño/CabeceraSEO/CabeceraSEO';
import { Navegacion } from '@/componentes/diseño/Navegacion/Navegacion';
import { PuntosNavegacion } from '@/componentes/diseño/PuntosNavegacion/PuntosNavegacion';
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
import { usarScrollSeccion } from '@/hooks/usarScrollSeccion';
import type { TipoSeccion } from '@/tipos';
import estilos from './App.module.css';

const SECCIONES: ReadonlyArray<{ id: TipoSeccion; etiqueta: string }> = [
  { id: 'inicio', etiqueta: 'Inicio' },
  { id: 'historia', etiqueta: 'Nosotros' },
  { id: 'creaciones', etiqueta: 'Creaciones' },
  { id: 'desayunos', etiqueta: 'Desayunos' },
  { id: 'encargos', etiqueta: 'Encargos' },
  { id: 'resenas', etiqueta: 'Reseñas' },
  { id: 'contacto', etiqueta: 'Contacto' },
];

const IDS_SECCION = SECCIONES.map((s) => s.id);

const ENLACES_NAV: ReadonlyArray<{ id: TipoSeccion; etiqueta: string }> = [
  { id: 'inicio', etiqueta: 'Inicio' },
  { id: 'desayunos', etiqueta: 'Desayunos' },
  { id: 'encargos', etiqueta: 'Encargos' },
];

export default function App() {
  const { seccionActual, irASeccion, navVisible } = usarScrollSeccion(IDS_SECCION);

  return (
    <HelmetProvider>
      <CabeceraSEO
        titulo="Cafetería y Pastelería Artesanal"
        descripcion="Tartas artesanales, desayunos y meriendas en Chiclana de la Frontera. Obrador propio. Tartas personalizadas para bodas, cumpleaños y eventos. Junto a La Barrosa, Cádiz."
        palabrasClave={[
          'pastelería Chiclana de la Frontera',
          'tartas artesanales Chiclana',
          'cafetería La Barrosa',
          'tartas personalizadas Cádiz',
          'obrador artesanal Chiclana',
          'desayunos Chiclana',
          'meriendas La Barrosa',
          'pastelería Cádiz',
          'tartas bodas Chiclana',
          'más que tartas Mattilde',
        ]}
      />
      <Navegacion
        seccionActual={seccionActual}
        navVisible={navVisible}
        alNavegar={irASeccion}
        enlaces={ENLACES_NAV}
      />
      <PuntosNavegacion
        secciones={SECCIONES}
        seccionActual={seccionActual}
        alNavegar={irASeccion}
      />
      <div className={estilos.aplicacion}>
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
