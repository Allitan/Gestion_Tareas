'use client'
import React, { useState, useEffect } from "react";
import { useContextTarea } from "../Provider/TareaProvider";
import { Tarea } from "../Modelos/Tareas";
import '../Styles/MyStyles.css';

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
        <div className="contenedor">
            <h2 className="formularioTareas">Formulario de Tareas</h2>
            <form onSubmit={agregarTareaFormulario}>

                <input type="text" placeholder="Título de la tarea" value={tituloTarea} onChange={(e) => setTituloTarea(e.target.value)} className='inputTitulo' />

                <input type="text" placeholder="Descripción de la tarea" value={descripcionTarea} onChange={(e) => setDescripcionTarea(e.target.value)} className='inputDescripcion' />

                <select value={estadoTarea} onChange={(e) => setEstadoTarea(e.target.value as "pendiente" | "en progreso" | "completa")} className="inputEstado">
                    <option value="pendiente" className="estadoPendiente">Pendiente</option>
                    <option value="en progreso" className="estadoProgreso">En Progreso</option>
                    <option value="completa" className="estadoCompleta">Completa</option>
                </select>
                <td/>
                <button type="submit" className="agregarTarea">Agregar Tarea</button>
            </form>
        </div>
    )
}