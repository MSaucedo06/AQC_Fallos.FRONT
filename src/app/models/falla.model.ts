export interface Falla {
    id?: number; 
    equipo_id: number;
    equipo_descripcion: string;
    falla_descripcion: string;
    fecha_falla: string;
    prioridad_id: number;
    prioridad_descripcion: string;
    estatus_id: number;
    estatus_descripcion: string;
  }