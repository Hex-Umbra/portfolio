import React from "react";
import Contacts from "./Contacts";

export default function Section() {
  return (
    <section className="h-[550px] bg-[#000000b9] mx-16 rounded-3xl my-10 shadow-2xl shadow-black">
      <div className="grid grid-cols-2 justify-items-end h-full relative">
        {/* 1ere colonnne */}
        <div className="h-full w-4/5 content-center">
          <div className="mb-8"> 
            <h1 className="font-extrabold text-4xl mb-2 text-center">
              Gabriel Pereira Da Costa
            </h1>
            <h2 className="font-bold mb-10 text-center">Web developer</h2>
            <p className="font-light text-center">
              Actuellement a la recherche d'une alternance en tant que
              développeur full-stack, accompagné par la Fabrique du Numérique
            </p>
          </div>
          <Contacts />
        </div>
        {/* 2eme colonne */}
        <div className="h-full w-4/5 place-self-center">
          <div className=" absolute bg-slate-950 rounded-full w-[400px] h-[400px] bg-[url('/assets/images/profile_pic.png')] bg-top bg-contain bg-no-repeat top-16"></div>
        </div>
      </div>
    </section>
  );
}
