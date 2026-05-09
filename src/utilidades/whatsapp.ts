import { CONTACTO } from '@/utilidades/constantes';

/**
 * Genera una URL de WhatsApp con mensaje prellenado
 */
export function generarUrlWhatsapp(mensaje: string): string {
  const numero = CONTACTO.whatsapp.replace(/\D/g, '');
  const mensajeCodificado = encodeURIComponent(mensaje);
  return `https://wa.me/${numero}?text=${mensajeCodificado}`;
}

/**
 * Mensajes predefinidos para distintos contextos
 */
export const MENSAJES_WHATSAPP = {
  encargo:
    '¡Hola Mattilde! 👋 Me gustaría encargar una tarta personalizada. ¿Podrías darme más información?',
  desayuno:
    '¡Hola Mattilde! 👋 Quería reservar una mesa para el desayuno. ¿Hay disponibilidad?',
  info:
    '¡Hola Mattilde! 👋 Me gustaría obtener más información sobre vuestros productos.',
  general:
    '¡Hola Mattilde! 👋',
} as const;

export type ClavesMensajeWhatsapp = keyof typeof MENSAJES_WHATSAPP;
