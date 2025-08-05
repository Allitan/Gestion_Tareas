'use client'
import React from "react";
import { useContextTarea } from "../Provider/TareaProvider";

export default function TablaTareas() {
    const { tarea } = useContextTarea()

    return (
        <div>
            <h2>Lista de Tareas</h2>

            <table>
                <thead>
                    <th>id Tarea</th>
                    <th>Titulo</th>
                    <th>Descripcion</th>
                    <th>Estado</th>
                </thead>

                <tbody>
                    {
                        tarea.map((tarea) => (
                        <tr key={tarea.idTarea}>
                            <td>{tarea.idTarea}</td>
                            <td>{tarea.tituloTarea}</td>
                            <td>{tarea.descripcionTarea}</td>
                            <td>{tarea.estadoTarea}</td>
                        </tr>))
                    }
                </tbody>
            </table>
        </div>
    )
}