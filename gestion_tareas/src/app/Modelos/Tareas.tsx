export type EstadoTarea = "pendiente" | "en progreso" | "completa";

export interface Tarea {
    idTarea: number;
    tituloTarea: string;
    descripcionTarea: string;
    estadoTarea: EstadoTarea;
}