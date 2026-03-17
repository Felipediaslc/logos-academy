"use client";
import React from "react";
import Footer from "@/app/footer/page";
import EmpressPack01 from "@/app/empresa/empresspack01";
import EmpressPack02 from "@/app/empresa/empresspack02";
import EmpressPack03 from "@/app/empresa/empresspack03";






const Page: React.FC = () => {


  return (

   <main>
    <EmpressPack01/>
    <EmpressPack02 />
    <EmpressPack03 />
    <Footer />

   </main>
     




      


      

    

  );
};

export default Page;