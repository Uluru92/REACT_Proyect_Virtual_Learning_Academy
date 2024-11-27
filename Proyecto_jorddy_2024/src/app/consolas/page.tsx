"use client";
import { Consola } from '../models/Consola';
import ConsolaComponent from '../components/ConsolaComponent';
import CarouselComponent from '../components/CarouselComponent';
import { useContext, useEffect, useMemo, useState } from 'react';
import '../styles/Consolas.css'
import axios from 'axios';
import { MyContext } from '../MyContext';
import ErrorComponent from '../components/ErrorComponent';

interface ApiResponse {
    Codigo: number;
    Descripcion: string;
    Detalle: Consola[];
}

export default function ConsolasPage() {
    const [consolas, setConsolas] = useState<Consola[]>([]);
    const [textoConsola, setTextoConsola] = useState<string>('');

    const context = useContext(MyContext);

    //Si el usuario no tiene el rol 
    if(!context)
        return <div><ErrorComponent></ErrorComponent></div>

    const {user}= context;    

    if(!user || user.rol > 0)
        return <div><ErrorComponent></ErrorComponent></div>
    //Si el usuario no tiene rol

    const consolasFiltradas = useMemo(() => {
        return consolas.filter(consola => consola.nombre.toLowerCase().includes(textoConsola.toLowerCase()));
    }, [textoConsola]);

    useEffect(() => {
        const fecthConsolas = async () => {

            try {
                const response = await axios.get<ApiResponse>('http://localhost:4321/api/route/ObtenerConsolas')
                const data = response.data;

                if (data.Codigo === 0)
                    setConsolas(data.Detalle)
                else
                    console.error("Error fetching data", data.Descripcion)
            } catch (error) {
                console.error("Error fetching data", error)
            }
        };

        fecthConsolas();
    }, []);

    return (
        <div>
            <CarouselComponent></CarouselComponent>

                <div className="max-w-[400px] mx-auto border border-yellow-100 shadow-lg bg-red-600 m-5">
                    <div className="relative z-0 w-full group p-1 block">
                        <input
                            type="text"
                            value={textoConsola}
                            onChange={(e) => setTextoConsola(e.target.value)}
                            name="floating_email" id="floating_email"
                            className="text-center block py-2.5 px-0 w-full text-lg text-black-100 border-2 border-b-3 border-gray-100 appearance-none dark:text-black dark:border-gray-800 dark:focus:border-red-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder="Buscar consola aqui...." />
                    </div>
                </div>

                <div className='contenedorConsolas'>
                    <div className='manejoLineal'>
                        {
                            consolasFiltradas.map(consola => (
                                <ConsolaComponent
                                    key={consola.id}
                                    id={consola.id.toString()}
                                    nombre={consola.nombre}
                                    imagenSrc={consola.imagen}
                                    descripcion={consola.descripcion}
                                    precio={consola.precio}
                                ></ConsolaComponent>
                            ))
                        }
                    </div>
                </div>
            </div>
    )
}