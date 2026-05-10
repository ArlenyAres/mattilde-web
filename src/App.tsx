import { lazy, Suspense } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { CabeceraSEO } from '@/componentes/diseño/CabeceraSEO/CabeceraSEO';
import { Navegacion } from '@/componentes/diseño/Navegacion/Navegacion';
import { PuntosNavegacion } from '@/componentes/diseño/PuntosNavegacion/PuntosNavegacion';
import { PiePagina } from '@/componentes/diseño/PiePagina/PiePagina';
import { BotonWhatsapp } from '@/componentes/diseño/BotonWhatsapp/BotonWhatsapp';
import { SeccionHero } from '@/componentes/secciones/SeccionHero/SeccionHero';
import { usarScrollSeccion } from '@/hooks/usarScrollSeccion';
import type { TipoSeccion } from '@/tipos';
import estilos from './App.module.css';

const SeccionCarrusel = lazy(() =>
  import('@/componentes/secciones/SeccionCarrusel/SeccionCarrusel').then((m) => ({
    default: m.SeccionCarrusel,
  }))
);
const SeccionHistoria = lazy(() =>
  import('@/componentes/secciones/SeccionHistoria/SeccionHistoria').then((m) => ({
    default: m.SeccionHistoria,
  }))
);
const SeccionCreaciones = lazy(() =>
  import('@/componentes/secciones/SeccionCreaciones/SeccionCreaciones').then((m) => ({
    default: m.SeccionCreaciones,
  }))
);
const SeccionDesayunos = lazy(() =>
  import('@/componentes/secciones/SeccionDesayunos/SeccionDesayunos').then((m) => ({
    default: m.SeccionDesayunos,
  }))
);
const SeccionEncargos = lazy(() =>
  import('@/componentes/secciones/SeccionEncargos/SeccionEncargos').then((m) => ({
    default: m.SeccionEncargos,
  }))
);
const SeccionReseñas = lazy(() =>
  import('@/componentes/secciones/SeccionReseñas/SeccionReseñas').then((m) => ({
    default: m.SeccionReseñas,
  }))
);
const SeccionContacto = lazy(() =>
  import('@/componentes/secciones/SeccionContacto/SeccionContacto').then((m) => ({
    default: m.SeccionContacto,
  }))
);

function FallbackSeccion() {
  return (
    <div style={{ minHeight: '400px' }} role="status" aria-label="Cargando sección…" />
  );
}

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
  { id: 'contacto', etiqueta: 'Contacto' },
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
        <main id="contenido-principal">
          <SeccionHero
            alVerTartas={() => irASeccion('creaciones')}
            alEncargar={() => irASeccion('encargos')}
          />
          <Suspense fallback={<FallbackSeccion />}>
            <SeccionCarrusel />
          </Suspense>
          <Suspense fallback={<FallbackSeccion />}>
            <SeccionHistoria />
          </Suspense>
          <Suspense fallback={<FallbackSeccion />}>
            <SeccionCreaciones />
          </Suspense>
          <Suspense fallback={<FallbackSeccion />}>
            <SeccionDesayunos />
          </Suspense>
          <Suspense fallback={<FallbackSeccion />}>
            <SeccionEncargos />
          </Suspense>
          <Suspense fallback={<FallbackSeccion />}>
            <SeccionReseñas />
          </Suspense>
          <Suspense fallback={<FallbackSeccion />}>
            <SeccionContacto />
          </Suspense>
        </main>
        <PiePagina />
        <BotonWhatsapp />
      </div>
    </HelmetProvider>
  );
}
