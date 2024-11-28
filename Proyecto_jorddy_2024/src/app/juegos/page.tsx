"use client";
import { VideoJuegos } from '../models/VideoJuegos';
import VideoJuegosComponent from '../components/VideoJuegosComponent';
import CarouselComponent from '../components/CarouselComponent';
import { useContext, useEffect, useMemo, useState } from 'react';
import '../styles/Consolas.css'
import axios from 'axios';
import { MyContext } from '../MyContext';
import ErrorComponent from '../components/ErrorComponent';

interface ApiResponse {
    Codigo: number;
    Descripcion: string;
    Detalle: VideoJuegos[];
}

function JuegosPage() {
    
    const [videojuegos, setVideoJuegos] = useState < VideoJuegos[] > ([]);
    const [textoVideoJuegos, setTextoVideoJuegos] = useState < string > ('');

    const context = useContext(MyContext);

    if(!context)
        return <div><ErrorComponent></ErrorComponent></div>

    const {user}= context;    

    if(!user)
        return <div><ErrorComponent></ErrorComponent></div>

    const videojuegosFiltrados = useMemo(() => {
        return videojuegos.filter(videojuegos => videojuegos.nombre.toLowerCase().includes(textoVideoJuegos.toLowerCase()));
    }, [textoVideoJuegos]);

    useEffect(() => {
        const fecthConsolas = async () => {

            try {
                const response = await axios.get<ApiResponse>('http://localhost:4321/api/route/ObtenerVideosJuegosPorConsola')
                const data = response.data;

                if (data.Codigo === 0)
                    setVideoJuegos(data.Detalle)
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

            <div className="max-w-[500px] mx-auto shadow-lg bg-red-600 m-5">
                <div className="relative z-0 w-full group p-1 block">
                    <input
                        type="text"
                        value={textoVideoJuegos}
                        onChange={(e) => setTextoVideoJuegos(e.target.value)}
                        name="floating_email" id="floating_email"
                        className="text-center block py-2.5 px-0 w-full text-lg text-black-100 border-2 border-b-3 border-gray-100 appearance-none dark:text-black dark:border-gray-800 dark:focus:border-red-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder="Buscar video juego..." />
                </div>
            </div>

            <div className='contenedorConsolas'>
                <div className='manejoLineal'>
                    {
                        videojuegosFiltrados.map(VideoJuego => (
                            <VideoJuegosComponent
                                key={VideoJuego.id}
                                id={VideoJuego.id.toString()}
                                nombre={VideoJuego.nombre}
                                imagenSrc={VideoJuego.imagen}
                                id_consola={VideoJuego.id_consola}
                                precio={VideoJuego.precio}
                            ></VideoJuegosComponent>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default JuegosPage;