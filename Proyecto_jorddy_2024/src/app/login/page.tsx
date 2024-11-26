"use client";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Usuario } from "../models/Usuario";
import { useRouter } from "next/navigation";
import { MyContext } from "../MyContext";

interface ApiResponse {
    Codigo: number;
    Descripcion: string;
    Detalle: Usuario | null;
}

function LoginPage() {
    const router = useRouter();
    const context = useContext(MyContext);
    const [usuario, setUsuario] = useState<string>("");
    const [contrasena, setContrasena] = useState<string>("");

    if(!context) return <div>Error, contexto no disponible</div>

    const {user, setUser} = context;

    const ValidarCredenciales = async () => {
        try {
            const response = await axios.post<ApiResponse>("http://localhost:4321/api/route/ValidarCredenciales", {
                usuario,
                contrasena,
            });

            if(response.data.Codigo === 0){
                const usuarioDetalle = response.data.Detalle;

                if(usuarioDetalle){
                    setUser(usuarioDetalle);
                    console.log("Inicio de sesión correcto");
                    router.push("http://localhost:3000/")
                }
            }
            else {
                console.log("Inicio de sesión fallida")
            }            
        } 
        catch (error)
        {
            console.error("Error al iniciar sesión", error);
        }
    };

    useEffect(()=>{
        console.log("Usuario actualizado", user)
    },[user])

    return (
        <div>
            <div className="bg-sky-100 flex justify-center items-center h-screen">
                <div className="w-1/2 h-screen hidden lg:block">
                    <img
                        src="https://img.freepik.com/fotos-premium/imagen-fondo_910766-187.jpg?w=826"
                        alt="Descriptive placeholder"
                        className="object-cover w-full h-full"
                    />
                </div>
                <div className="lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2">
                    <div className="mb-4 bg-sky-100">
                        <label htmlFor="username" className="block text-gray-600">Usuario</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                            autoComplete="off"
                            value={usuario}
                            onChange={(e) => setUsuario(e.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-gray-800">Contraseña</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                            autoComplete="off"
                            value={contrasena}
                            onChange={(e) => setContrasena(e.target.value)}
                        />
                    </div>

                    <button
                        onClick={ValidarCredenciales}
                        className="bg-red-500 text-white font-semibold rounded-md py-2 px-4 w-full"
                    >
                        Login
                    </button>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;
