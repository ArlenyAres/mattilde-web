import { useCallback } from 'react';
import type { TipoMotivoWhatsapp } from '@/tipos';
import {
  generarUrlWhatsapp,
  MENSAJES_WHATSAPP,
} from '@/utilidades/whatsapp';

const DOMINIO_PERMITIDO = 'wa.me';

/**
 * Hook para abrir WhatsApp con mensaje prellenado según el motivo.
 * Valida que la URL generada pertenezca al dominio wa.me.
 * Registra el evento en console.info (preparado para analytics).
 */
export function usarWhatsapp(): {
  abrirWhatsapp: (motivo: TipoMotivoWhatsapp) => void;
} {
  const abrirWhatsapp = useCallback((motivo: TipoMotivoWhatsapp) => {
    const mensaje = MENSAJES_WHATSAPP[motivo];
    const url = generarUrlWhatsapp(mensaje);

    // Validación de dominio — solo se permite wa.me
    let urlValida: URL;
    try {
      urlValida = new URL(url);
    } catch {
      console.warn('[usarWhatsapp] URL inválida generada:', url);
      return;
    }

    if (!urlValida.hostname.endsWith(DOMINIO_PERMITIDO)) {
      console.warn(
        '[usarWhatsapp] Dominio no permitido:',
        urlValida.hostname
      );
      return;
    }

    console.info('[usarWhatsapp] Abriendo WhatsApp – motivo:', motivo);
    window.open(url, '_blank', 'noopener,noreferrer');
  }, []);

  return { abrirWhatsapp };
}
