"use client";

import React from "react";
import Image from "next/image";
import ImageHome from "../../public/home-img.png";

const HomePage: React.FC = () => {
  return (
    <section
      className="flex flex-wrap items-center justify-center h-[105vh]
      md:w-full  md:py-0  md:bg-orange-500 md:h-[125vh] md:-mt-[5.3rem] md:flex 
     md:p-24  md:flex-wrap md:justify-center md:items-center
      lg:bg-orange-500 lg:-mt-[5.3rem]

      lg:h-[110vh]  lg:py-0 lg:justify-center 
      lg:flex-nowrap  lg:w-screem
      xl:h-[110vh]  xl:py-0  xl:-mt-[5.5rem] xl:justify-center 
      xl:flex-nowrap xl:bg-orange-500 xl:w-[100vw]
      2xl:-mt-[4.8rem] 2xl:w-[100vw]
     "
    >
      <h1 className="text-center -mt-[13rem] p-3 text-[4rem] font-cooper-bold  md:font-cooper-bold md:w-[80vw]  md:pl-8
         md:leading-none  md:text-[7rem] md:-mt-[3rem] 
          
          
           xl:h-[50vh]  
           xl:leading-none xl:font-cooper-bold  xl:w-[48vw] 
           xl:py-0 xl:px-12 xl:flex xl:justify-center
            xl:text-[6.5rem] xl:-mt-[11rem]
          lg:font-cooper-bold lg:w-[56vw] lg:-ml-[30rem] 
            lg:text-[6.5rem]
           lg:-mt-[9rem] "
      >
        Encontre seu futuro
      </h1>
      <Image
        src={ImageHome}
        width={950}
        height={900}
        className=" -mt-[23rem]  xl:p-0 
              xl:mt-[8rem] flex xl:justify-start
              xl:h-[90vh] xl:w-[40vw] 
               lg:h-[60vh] lg:w-[40vw] lg:-mt-[1rem] lg:-mr-[30rem] 
                md:h-[50vh] md:w-[70vw] md:-mt-[20rem] "
        alt="image"
      />
    </section>
  );
};

export default HomePage;
