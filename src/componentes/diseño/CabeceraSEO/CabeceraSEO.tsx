import { Helmet } from 'react-helmet-async';
import type { PropsSEO } from '@/tipos';
import {
  NOMBRE_NEGOCIO,
  CONTACTO,
  GEO,
  URL_SITIO,
  URL_IMAGEN_OG,
} from '@/utilidades/constantes';

const SUFIJO_TITULO = `${NOMBRE_NEGOCIO} - Chiclana de la Frontera`;

function construirHorariosSchema() {
  return CONTACTO.horarios
    .filter((h) => h.apertura !== 'Cerrado')
    .map((h) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: mapearDias(h.dias),
      opens: h.apertura,
      closes: h.cierre,
    }));
}

function mapearDias(dias: string): string[] {
  const mapa: Record<string, string[]> = {
    'Lunes a viernes': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    'Sábados': ['Saturday'],
    'Domingos': ['Sunday'],
  };
  return mapa[dias] ?? [];
}

const schemaLocalBusiness = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'Bakery', 'CafeOrCoffeeShop'],
  name: NOMBRE_NEGOCIO,
  alternateName: 'Casa las Tartas Mattilde',
  description:
    'Cafetería, obrador y pastelería artesanal en Chiclana de la Frontera. Tartas personalizadas para bodas, cumpleaños y eventos. Junto a La Barrosa, Cádiz.',
  url: URL_SITIO,
  telephone: CONTACTO.telefono,
  priceRange: '€€',
  servesCuisine: ['Pastelería', 'Desayunos', 'Meriendas'],
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Urb. Cortijo Los Gallos 21',
    addressLocality: GEO.localidad,
    addressRegion: 'Cádiz',
    postalCode: '11130',
    addressCountry: 'ES',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: GEO.latitud,
    longitude: GEO.longitud,
  },
  openingHoursSpecification: construirHorariosSchema(),
  sameAs: [
    CONTACTO.redesSociales.instagram,
    CONTACTO.redesSociales.facebook,
    'https://www.google.com/maps/place/M%C3%A1s+que+tartas+Mattilde/@36.3955377,-6.1739416,17z',
  ].filter(Boolean),
};

export function CabeceraSEO({
  titulo,
  descripcion,
  palabrasClave = [],
  urlCanonica = URL_SITIO,
  imagen = URL_IMAGEN_OG,
}: PropsSEO) {
  const tituloCompleto = `${titulo} | ${SUFIJO_TITULO}`;

  return (
    <Helmet>
      {/* Título */}
      <title>{tituloCompleto}</title>

      {/* Meta básicos */}
      <meta name="description" content={descripcion} />
      {palabrasClave.length > 0 && (
        <meta name="keywords" content={palabrasClave.join(', ')} />
      )}

      {/* Geolocalización local */}
      <meta name="geo.region" content={GEO.region} />
      <meta name="geo.placename" content={GEO.localidad} />
      <meta
        name="geo.position"
        content={`${GEO.latitud};${GEO.longitud}`}
      />
      <meta
        name="ICBM"
        content={`${GEO.latitud}, ${GEO.longitud}`}
      />

      {/* Canonical */}
      <link rel="canonical" href={urlCanonica} />

      {/* Open Graph */}
      <meta property="og:title" content={tituloCompleto} />
      <meta property="og:description" content={descripcion} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={urlCanonica} />
      <meta property="og:image" content={imagen} />
      <meta property="og:locale" content="es_ES" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={tituloCompleto} />
      <meta name="twitter:description" content={descripcion} />

      {/* Schema.org JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify(schemaLocalBusiness)}
      </script>
    </Helmet>
  );
}
