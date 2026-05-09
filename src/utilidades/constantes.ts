import type { TipoContacto } from '@/tipos';

export const NOMBRE_NEGOCIO = 'Más que Tartas Mattilde';
export const NOMBRE_CORTO = 'Mattilde';
export const SLOGAN = 'Obrador artesanal en Chiclana de la Frontera';

export const CONTACTO: TipoContacto = {
  telefono: '+34 600 000 000',
  whatsapp: '+34600000000',
  email: 'hola@mattilde.es',
  direccion: 'Chiclana de la Frontera, Cádiz',
  horarios: [
    { dias: 'Lunes a viernes', apertura: '08:30', cierre: '14:00' },
    { dias: 'Sábados', apertura: '09:00', cierre: '14:00' },
    { dias: 'Domingos', apertura: 'Cerrado', cierre: '' },
  ],
  redesSociales: {
    instagram: 'https://instagram.com/mattilde.tartas',
  },
};

export const ENLACES_NAVEGACION = [
  { etiqueta: 'Inicio', ancla: '#inicio' },
  { etiqueta: 'Nosotros', ancla: '#historia' },
  { etiqueta: 'Creaciones', ancla: '#creaciones' },
  { etiqueta: 'Desayunos', ancla: '#desayunos' },
  { etiqueta: 'Encargos', ancla: '#encargos' },
  { etiqueta: 'Reseñas', ancla: '#resenas' },
  { etiqueta: 'Contacto', ancla: '#contacto' },
] as const;

export const META_DESCRIPCION =
  'Cafetería, obrador y pastelería artesanal en Chiclana de la Frontera. Tartas personalizadas, desayunos y dulces hechos con amor por Mattilde.';

export const META_KEYWORDS =
  'tartas personalizadas, pastelería artesanal, cafetería Chiclana, obrador Cádiz, tartas de boda, desayunos, Mattilde';
