import type { TipoDesayuno } from '@/tipos';

export const menuDesayunos: TipoDesayuno[] = [
  {
    id: 'des-01',
    nombre: 'Desayuno Mattilde',
    descripcion: 'Café con leche, tostada artesanal con tomate y aceite de oliva virgen extra, zumo natural y bollería del día.',
    precio: 7.5,
    etiquetas: ['popular', 'completo'],
    disponible: true,
    incluye: ['Café con leche', 'Tostada con tomate', 'Zumo natural', 'Bollería'],
  },
  {
    id: 'des-02',
    nombre: 'Tostada de aguacate',
    descripcion: 'Pan artesanal tostado con aguacate, huevo poché, semillas y toque de lima.',
    precio: 6.5,
    etiquetas: ['saludable', 'vegano'],
    disponible: true,
    incluye: ['Pan artesanal', 'Aguacate', 'Huevo poché', 'Semillas'],
  },
  {
    id: 'des-03',
    nombre: 'Croissant de mantequilla',
    descripcion: 'Croissant artesanal elaborado en obrador propio con mantequilla francesa.',
    precio: 2.5,
    etiquetas: ['artesanal'],
    disponible: true,
  },
  {
    id: 'des-04',
    nombre: 'Desayuno dulce',
    descripcion: 'Café o infusión, porción de tarta del día y zumo de naranja natural.',
    precio: 6.0,
    etiquetas: ['dulce'],
    disponible: true,
    incluye: ['Café o infusión', 'Tarta del día', 'Zumo de naranja'],
  },
  {
    id: 'des-05',
    nombre: 'Granola con yogur',
    descripcion: 'Granola casera con yogur griego, frutas de temporada y miel de Cádiz.',
    precio: 5.5,
    etiquetas: ['saludable', 'sin gluten'],
    disponible: true,
  },
];
