import { createContext } from "react";
import { Tarea } from "../Modelos/Tareas";

export const ContextTarea = createContext({
    tarea: [] as Tarea[],
    agregarTarea: (item: Tarea) => {}
})