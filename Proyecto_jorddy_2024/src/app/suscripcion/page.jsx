"use client";
import { use, useContext, useState } from 'react'
import { MyContext } from '../MyContext';

import ErrorComponent from '../components/ErrorComponent';

function SuscripionPage(){
    
    const [correo, setCorreo] = useState("");
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido]= useState("");
    const [telefono, setTelefono] = useState("");    
    const [mensajeError, setMensajeError] = useState("");
    const [correoValido, setCorreoValido] = useState(true);
    const [mostrarMensajeError, setMostrarMensajeError] = useState(false);

    const context = useContext(MyContext);

    //Si el usuario no tiene el rol 
    if(!context)
        return <div><ErrorComponent></ErrorComponent></div>

    const {user}= context;    

    if(!user || user.rol > 0)
        return <div><ErrorComponent></ErrorComponent></div>
    //Si el usuario no tiene rol

    function DarFormatoAlTelefono(e){
        const input = e.target.value.replace(/\D/g,'');
        const inputConFormato = input.replace(/(\d{4})(\d{4})/, '$1-$2');
        setTelefono(inputConFormato);        
    }
    
    function ValidarCorreo(e)
    {
        const input = e.target.value;
        
        const indexCom = input.indexOf('.com');

        if(indexCom !== -1)
        {
            const nuevoCorreo = input.slice(0, indexCom+4);              
            const regex = /^[a-zA-Z0-9._%+-]+@gmail\.com/;
            const regexResult = regex.test(nuevoCorreo);
            console.log(input + " - " + regexResult);            
            setCorreoValido(regexResult);
            setCorreo(nuevoCorreo);
        }
        else{
            setCorreoValido(false);  
            setCorreo(input)          ;
        }
    }


    function RegistrarSuscriptor()
    {
        if(nombre== "" || apellido==""||correo == "" || telefono == "")        
            setMensajeError("Ninguno de los campos puede estar en blanco");        
        else if(!correoValido)
            setMensajeError("El formato del correo no es correcto, solo dominio gmail.com");
        else if(telefono.length <=8)
            setMensajeError("El teléfono debe tener el formato XXXX-XXXX");
        else
            setMensajeError("");     
        
        if(mensajeError!="")
            setMostrarMensajeError(true);
        else
            setMostrarMensajeError(false);
    }

    return (
        <div >            
            <div className="max-w-md mx-auto pt-5">                
                <div className="relative z-0 w-full mb-5 group">
                    <input type="email" value={correo} onInput={ValidarCorreo} name="floating_email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Correo"/>
                    </div>           
                <div className="grid md:grid-cols-2 md:gap-6">
                    <div className="relative z-0 w-full mb-5 group">
                        <input type="text" onChange={(e) =>setNombre(e.target.value)} value={nombre} name="floating_first_name" id="floating_first_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Nombre"/>
                    </div>
                    <div className="relative z-0 w-full mb-5 group">
                        <input type="text" onChange={(e) =>setApellido(e.target.value)} value={apellido} name="floating_last_name" id="floating_last_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Apellido"/>
                    </div>
                </div>
                <div className="grid md:grid-cols-2 md:gap-6">
                    <div className="relative z-0 w-full mb-5 group">
                        <input value={telefono} onChange={DarFormatoAlTelefono} maxLength={9} type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" name="floating_phone" id="floating_phone" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Número telefónico" required />
                    </div>                   
                </div>
                <button onClick={RegistrarSuscriptor} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                {
                    mostrarMensajeError && (<div className='pt-5' role="alert">
                        <div className="bg-red-500 text-white font-bold rounded-t px-4 py-2">
                            Danger
                        </div>
                        <div className="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700">
                            <p>{mensajeError}</p>
                        </div>
                    </div>)
                }
                
            </div>
        </div>
    )
}

/*
    Guardar suscriptores
    En el api necesito validar si el correo ya existe,
        si el correo existe, ya hay un correo asociado a un suscriptor, no guardar el suscriptor
    
    Todo resultado del API se muestra en el alert implementado
        si todo bien, el alert para mi es verde, si todo mal, es rojo con el detalle del inconveniente
*/


export default SuscripionPage;