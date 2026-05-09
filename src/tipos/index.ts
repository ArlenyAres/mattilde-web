/* =====================================================
   Tipos e interfaces globales – Mattilde
   ===================================================== */

export interface TipoItemMenu {
  id: string;
  nombre: string;
  descripcion: string;
  precio: number;
  imagen?: string;
  etiquetas?: string[];
  disponible: boolean;
}

export interface TipoTarta extends TipoItemMenu {
  personalizaciones?: string[];
  tiempoEncargo?: number; // días de antelación
}

export interface TipoBebida extends TipoItemMenu {
  temperatura: 'caliente' | 'fría' | 'ambas';
  tamanos?: string[];
}

export interface TipoDesayuno extends TipoItemMenu {
  incluye?: string[];
}

export interface TipoReseña {
  id: string;
  nombre: string;
  texto: string;
  valoracion: number; // 1-5
  fecha: string;
  avatar?: string;
  plataforma: 'google' | 'instagram' | 'directo';
}

export interface TipoNavegacion {
  etiqueta: string;
  ancla: string;
}

export interface TipoContacto {
  telefono: string;
  whatsapp: string;
  email: string;
  direccion: string;
  horarios: TipoHorario[];
  redesSociales: TipoRedSocial;
}

export interface TipoHorario {
  dias: string;
  apertura: string;
  cierre: string;
}

export interface TipoRedSocial {
  instagram?: string;
  facebook?: string;
  tiktok?: string;
}

export interface PropsSEO {
  titulo: string;
  descripcion: string;
  palabrasClave?: string[];
  urlCanonica?: string;
  imagen?: string;
}
