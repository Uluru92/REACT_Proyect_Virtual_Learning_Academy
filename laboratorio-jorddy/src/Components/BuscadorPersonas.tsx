import { useMemo, useState } from "react";

const BuscadorPersonas: React.FC = () =>
{
    const users = [
        { id: 1, name: 'adolfo vargas' },
        { id: 2, name: 'Caleb' },
        { id: 3, name: 'Alison' },
        { id: 4, name: 'Josue' },
        { id: 5, name: 'Jorddy' },
        { id: 6, name: 'Sophia' },
        { id: 7, name: 'Angie' },
        { id: 8, name: 'Samuel' },
        { id: 9, name: 'Natalia' },
        { id: 10, name: 'Leticia' },
        { id: 11, name: 'adolfo sandoval' }
    ]

    const [searchTerm, setSearchTerm] = useState('');

    const filteredUsers = useMemo(() => {
        return users.filter(user => user.name.toLowerCase().includes(searchTerm.toLowerCase()))
    }, [searchTerm]);

    return (
        <div>
            <h1>Vamos a filtrar personas</h1>
            <input
                className="form-control"
                placeholder="buscar empleados..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}></input>
            <br /><br />
            <table>
                <thead>
                    <th>Nombre de la persona</th>
                </thead>
                <tbody>
                    {
                        filteredUsers.map(user => (
                        <tr>
                            <td key={user.id}>{user.name}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div >
    )
}

export default BuscadorPersonas;

