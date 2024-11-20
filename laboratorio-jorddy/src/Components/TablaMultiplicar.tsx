import { useMemo, useState } from "react";

const TablaMultiplicar: React.FC = () =>
{
    const [number, setNumber] = useState(1);

    const multiplicationTable = useMemo(() => {
        return Array.from({length:10}, (_, index) => number * (index + 1)); //funciones de mapeo
    }, [number])

    return (
        <div>
            <h1>Vamos a multiplicar</h1>
            <input
                className="form-control"
                value={number}
                onChange={(e) => setNumber(Number(e.target.value))}></input>
            <ul>
                {
                    multiplicationTable.map((result, index) => (
                        <li key={index}>
                            {number} * {index + 1} = {result}
                        </li>
                    ))
                }
            </ul>
        </div >
    )
}

export default TablaMultiplicar;