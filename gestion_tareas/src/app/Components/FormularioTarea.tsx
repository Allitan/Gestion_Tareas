'use client'
import React, { useState, useEffect } from "react";
import { useContextTarea } from "../Provider/TareaProvider";
import { Tarea } from "../Modelos/Tareas";

export default function FormularioTarea() {
    const [ tituloTarea, setTituloTarea ] = useState("")
    const [ descripcionTarea, setDescripcionTarea ] = useState("")
    const [ estadoTarea, setEstadoTarea ] = useState<"pendiente" | "en progreso" | "completa">("pendiente")

    const { agregarTarea, tarea } = useContextTarea();

    function agregarTareaFormulario(e:React.FormEvent){
        e.preventDefault();

        if(tituloTarea == '' || descripcionTarea == '') return

        let tarea: Tarea = {
            idTarea: Date.now(),
            tituloTarea: tituloTarea,
            descripcionTarea: descripcionTarea,
            estadoTarea: estadoTarea
        }

        agregarTarea(tarea);
        alert("Tarea agregada correctamente");
    }

    useEffect(() => {
        alert(`Total de tareas: ${tarea.length}`);
    }, [tarea]);

    return (
        <div>
            <h2>Formulario de Tareas</h2>
            <form onSubmit={agregarTareaFormulario}>

                <input type="text" placeholder="Título de la tarea" value={tituloTarea} onChange={(e) => setTituloTarea(e.target.value)} />

                <input type="text" placeholder="Descripción de la tarea" value={descripcionTarea} onChange={(e) => setDescripcionTarea(e.target.value)} />

                <select value={estadoTarea} onChange={(e) => setEstadoTarea(e.target.value as "pendiente" | "en progreso" | "completa")}>
                    <option value="pendiente">Pendiente</option>
                    <option value="en progreso">En Progreso</option>
                    <option value="completa">Completa</option>
                </select>

                <button type="submit">Agregar Tarea</button>
            </form>
        </div>
    )
}