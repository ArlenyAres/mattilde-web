import type { TipoContacto } from '@/tipos';

export const NOMBRE_NEGOCIO = 'Más que Tartas Mattilde';
export const NOMBRE_CORTO = 'Mattilde';
export const SLOGAN = 'Obrador artesanal en Chiclana de la Frontera';
export const URL_SITIO = 'https://masquetartasmattilde.es';
export const URL_IMAGEN_OG = `${URL_SITIO}/og-image.jpg`;

export const CONTACTO: TipoContacto = {
  telefono: '+34956401952',
  whatsapp: '+34956401952',
  email: 'hola@masquetartasmattilde.es',
  direccion: 'Ctra. de la Barrosa, 118, local 27 y 28, 11130 Chiclana de la Frontera, Cádiz',
  horarios: [
    { dias: 'Lunes a viernes', apertura: '08:30', cierre: '14:00' },
    { dias: 'Sábados', apertura: '09:00', cierre: '14:00' },
    { dias: 'Domingos', apertura: 'Cerrado', cierre: '' },
  ],
  redesSociales: {
    instagram: 'https://www.instagram.com/masquetartas_mattilde',
    facebook: 'https://www.facebook.com/profile.php?id=100057190971481',
  },
};

export const GEO = {
  latitud: 36.3955377,
  longitud: -6.1739416,
  region: 'ES-CA',
  localidad: 'Chiclana de la Frontera',
} as const;

export const META_DESCRIPCION =
  'Cafetería, obrador y pastelería artesanal en Chiclana de la Frontera. Tartas personalizadas, desayunos y dulces hechos con amor por Mattilde.';

export const META_KEYWORDS =
  'tartas personalizadas, pastelería artesanal, cafetería Chiclana, obrador Cádiz, tartas de boda, desayunos, Mattilde';
