

"use client";

import React, { createContext, ReactNode, useState, useEffect, useRef } from "react";
import { Usuario } from "./models/Usuario";
import { useRouter } from "next/navigation";

type ContextType = {
  user: Usuario | null;
  setUser: React.Dispatch<React.SetStateAction<Usuario | null>>;
  inactivo: boolean;
  resetInactividad: () => void;
};

const MyContext = createContext<ContextType | undefined>(undefined);

const MyProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<Usuario | null>(null);
  const [inactivo, setInactivo] = useState<boolean>(false);
  const router = useRouter();


  const inactivityTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    
    const handleInactivity = () => {
      setInactivo(true);

      if(inactivityTimeoutRef.current){
        clearTimeout(inactivityTimeoutRef.current);
      }

      inactivityTimeoutRef.current = setTimeout(() => {
          console.log("Inactividad detectada, redirigiendo al login");
          router.push("/login");        
      }, 10000000); 
    };
    
    const resetInactivityTimer = () => {      
      setInactivo(false);
      if(inactivityTimeoutRef.current){
        clearTimeout(inactivityTimeoutRef.current);
      }

      handleInactivity();
      
    };

   
    document.addEventListener("mousemove", resetInactivityTimer);
    document.addEventListener("keydown", resetInactivityTimer);
   
    handleInactivity();
    
    return () => {
      if (inactivityTimeoutRef.current)
        clearTimeout(inactivityTimeoutRef.current);

      document.removeEventListener("mousemove", resetInactivityTimer);
      document.removeEventListener("keydown", resetInactivityTimer);
    };
  }, [router]);

  const resetInactividad = () => {
    setInactivo(false);
    if (inactivityTimeoutRef.current)
      clearTimeout(inactivityTimeoutRef.current);
  };

  return (
    <MyContext.Provider value={{ user, setUser, inactivo, resetInactividad }}>
      {children}
    </MyContext.Provider>
  );
};

export { MyContext, MyProvider };
