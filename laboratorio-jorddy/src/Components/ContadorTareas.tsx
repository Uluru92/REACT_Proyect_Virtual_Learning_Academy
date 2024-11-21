import { useMemo, useState } from "react"

const ContadorTareas: React.FC = () =>
{
    const [task, setTask] = useState([
        { id: 1, name: 'Tarea 1', completed: true },
        { id: 2, name: 'Tarea 2', completed: false },
        { id: 3, name: 'Tarea 3', completed: true },
        { id: 4, name: 'Tarea 4', completed: true },
        { id: 5, name: 'Tarea 5', completed: false },
        { id: 6, name: 'Tarea 6', completed: true },
    ])

    const taskCounts = useMemo(() => {
        const completedCount = task.filter(task => task.completed).length;
        const pendingCount = task.length - completedCount;
        return { completedCount, pendingCount }
    }, [task]);
    
    return (
        <div>
            <h1>Este es el estatus de las tareas</h1>
            <ul>
                {
                    task.map(e => (
                        <li key={e.id}>
                            {e.name} - {e.completed ? 'Completada' : 'Pendiente'}
                        </li>
                    ))
                }
                <h3>Tareas completadas: {taskCounts.completedCount}</h3>
                <h3>Tareas pendientes: {taskCounts.pendingCount }</h3>
            </ul>
        </div>
    )
}

export default ContadorTareas;