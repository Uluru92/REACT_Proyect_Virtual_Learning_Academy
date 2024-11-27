import { useState } from "react";
import Image from "next/image";

interface ConsolaComponentProps {
    nombre: string,
    id: string,
    imagenSrc: string,
    precio: number, 
    descripcion: string
}

const ConsolaComponent: React.FC<ConsolaComponentProps> = ({ nombre,id, imagenSrc, precio, descripcion }) => {
    const [showModal, setShowModal] = useState(false);

    return (
        <div className="mx-auto bg-gray-200" >
            <div className="h-[300px] dark:bg-blue border border-gray-500 square-lg shadow-lg dark:bg-gray-800 dark:border-gray-700 m-1 p-1">
                <a href="#">
                    <Image
                        className="square-t-lg"
                        src={imagenSrc}
                        alt="Consolas"
                        width={300} height={300} />
                </a>
                <div className="p-">
                    <a href="#">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{nombre}</h5>
                    </a>
                    <a onClick={() => setShowModal(true)}
                        href="#"
                        className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 square-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Más información
                        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg>
                    </a>
                </div>
            </div>
            {showModal ? (
                <>
                    <div
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                    >
                        <div className="relative w-auto my-6 mx-auto max-w-3xl">                            
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                                    <h3 className="text-3xl font-semibold">Información de la consola {nombre}</h3>
                                    <button
                                        className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                        onClick={() => setShowModal(false)}
                                    >
                                        <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                            ×
                                        </span>
                                    </button>
                                </div>                               
                                <div className="relative p-6 flex-auto">
                                    
                                    <p className="my-4 text-blueGray-500 text-lg leading-relaxed text-justify">
                                       Descripción: {descripcion}
                                    </p>
                                    <p className="my-4 text-green-500 text-lg leading-relaxed">
                                        Precio: {precio} mil colones
                                    </p>
                                </div>
                                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                                    <button
                                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => setShowModal(false)}
                                    >
                                        Cerrar
                                    </button>                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
        </div>
    )
}

export default ConsolaComponent;