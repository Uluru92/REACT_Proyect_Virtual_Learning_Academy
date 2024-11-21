import { title } from "process";
import { useState } from "react";

const ProjectManager: React.FC = () =>
{
    const [project, setProject] = useState({
        title: 'Proyecto de REACT',
        description: 'Gestion de proyecto utilizando react',
        isActive: true,
        task: [
            { id: 1, name: 'Configurar entorno', completed: false, priority: 'Alta' },
            { id: 2, name: 'Crear componente login', completed: false, priority: 'Media' },
        ]
    })

    return (
        <div>
            <h1>Manejo del project manager</h1>
        </div>
    )
}
export default ProjectManager;