'use client'
import React from "react";
import { useContextTarea } from "../Provider/TareaProvider";
import '../Styles/MyStyles.css';

export default function TablaTareas() {
    const { tarea } = useContextTarea()

    return (
        <div className="contenedorTabla">
            <h2 className="tituloListaTareas">Lista de Tareas</h2>

            <table className="tablaTareas">
                <thead>
                    <th className="idTareas">id Tarea</th>
                    <th className="tituloTareas">Titulo</th>
                    <th className="descripcionTareas">Descripcion</th>
                    <th className="estadoTareas">Estado</th>
                </thead>

                <tbody>
                    {
                        tarea.map((tarea) => (
                        <tr key={tarea.idTarea} className="filaTarea">
                            <td className="id">{tarea.idTarea}</td>
                            <td className="titulo">{tarea.tituloTarea}</td>
                            <td className="descripcion">{tarea.descripcionTarea}</td>
                            <td className="estado">{tarea.estadoTarea}</td>
                        </tr>))
                    }
                </tbody>
            </table>
        </div>
    )
}