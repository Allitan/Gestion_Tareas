'use client'
import React, { ReactNode, useContext, useState } from 'react';
import { ContextTarea } from '../Context/ContextTarea';
import { Tarea } from '../Modelos/Tareas';

//recibir un props ReactNode
//Implementaciones
//exportar context

interface Plantilla {
    children: ReactNode
}

export default function TareaProvider({children}: Plantilla) {
    const [tarea, setTarea] = useState<Tarea[]>([])

    function agregarTarea(item: Tarea) {
        setTarea([...tarea, item])
    }

    return (
        <ContextTarea.Provider value={{ tarea, agregarTarea }}>
            {children}
        </ContextTarea.Provider>
    )

}

export function useContextTarea() {
    return useContext(ContextTarea);
}
