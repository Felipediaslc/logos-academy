"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { SkillData } from "@/app/constants";
import Image from "next/image";
import { Autoplay } from "swiper/modules";

const Page = () => {
  return (
    <div
 
      className="h-screen bg-orange-500 md:h-[100vh] md:w-[105vw]
      xl:mt-0 xl:h-[110vh]  w-screen  flex items-center justify-center bg-cover bg-center
      xl:w-screen
      2xl:mt-0 2xl:w-screen"
    >
      <div className="flex pt-[9rem] flex-col gap-20 max-w-[80%]
       text-center items-center">
        <div className="flex flex-col z-0 items-center md:-mt-[22rem] lg:-mt-[10rem] gap-4">
          <h1 className="font-semibold text-gray-950 font-cooper-bold
           text-[50px] lg:text-[3.5rem]">
            Programas
          </h1>
          <p className="text-slate-50  lg:text-[1.5rem] text-[20px]">
            Using the latest tech this world has to offer
          </p>
        </div>
        <Swiper
          slidesPerView={5}
          loop={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          speed={5000}
          modules={[Autoplay]}
          className="max-w-[80%]"
        >
          {SkillData.map((skill, index) => (
            <SwiperSlide key={index}>
              <Image
                src={skill.Image}
                alt={skill.name}
                width={skill.width}
                height={skill.height}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <Swiper
          slidesPerView={5}
          loop={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            reverseDirection: true
          }}
          speed={5000}
          modules={[Autoplay]}
          className="max-w-[80%]"
        >
          {SkillData.map((skill, index) => (
            <SwiperSlide key={index}>
              <Image
                src={skill.Image}
                alt={skill.name}
                width={skill.width}
                height={skill.height}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Page;
