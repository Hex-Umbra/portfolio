import React from "react";
import Contacts from "./Contacts";

export default function Section() {
  return (
    <section className="h-[100vh] bg-[#79261d] my-10 shadow-2xl shadow-black">
      <div className="grid grid-cols-2 justify-items-end h-full relative">
        {/* 1ere colonnne */}
        <div className="h-full w-4/5 content-center">
          <div className="mb-8"> 
            <h1 className="font-extrabold lg:text-6xl mb-2 text-center md:text-2xl">
              Gabriel Pereira Da Costa
            </h1>
            <h2 className="font-bold mb-10 text-center lg:text-2xl md:text-sm">Web developer</h2>
            <p className="font-light text-center">
              Actuellement a la recherche d'une alternance en tant que
              développeur full-stack, accompagné par la Fabrique du Numérique
            </p>
          </div>
          <Contacts />
        </div>
        {/* 2eme colonne */}
        <div className="flex justify-center items-center h-full w-4/5">
          <div className="rounded-full lg:w-[400px] lg:h-[400px] bg-[url('/assets/images/profile_pic.png')] bg-no-repeat bg-cover"></div>
        </div>
      </div>
    </section>
  );
}
