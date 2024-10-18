"use client"
import {  useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import NavBar from "../NavBar/navBar"




export default function ConditionalNavBar()  {

    const [showNav, setShowNav] = useState(true);
    const pathname = usePathname();

    //Verifica a rota e decide se o menu deve ser exibido
    useEffect(() => {
        //Exclui o menu na rotas que començam com /empresa ou exatamente /empresa
        if (pathname === "/components/empresa" || pathname === "/components/empresa") {
            setShowNav(false);
        } else {
            setShowNav(true);
        }
    }, [pathname]);

   
   

    return (<>{showNav && <NavBar  variant="Dark"/> }</> );
};
