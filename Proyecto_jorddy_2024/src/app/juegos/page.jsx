"use client";
import { VideoJuegos } from '../models/VideoJuegos';
import { useContext, useEffect, useMemo, useState } from 'react';
import { MyContext } from '../MyContext';
import ErrorComponent from '../components/ErrorComponent';

function JuegosPage(){

    const context = useContext(MyContext);

    //Si el usuario no tiene el rol 
    if(!context)
        return <div><ErrorComponent></ErrorComponent></div>

    const {user}= context;    

    if(!user || user.rol > 0)
        return <div><ErrorComponent></ErrorComponent></div>
    //Si el usuario no tiene rol

    return (
        <div>
            <h1 >Selecciona tu video juego favorito</h1>
        </div>
    )
}

export default JuegosPage;