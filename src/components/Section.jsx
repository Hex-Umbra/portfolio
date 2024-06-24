import React from "react";

export default function Section() {
  return (
    <section className="h-[550px] bg-gray-300 mx-16 rounded-3xl mb-10">
      <div className="grid grid-cols-2 justify-end h-full">
        {/* 1ere colonnne */}
        <div className="h-full w-4/5 content-center justify-end">
          <h1 className="font-extrabold text-4xl mb-2 justify-end">
            Gabriel Pereira Da Costa
          </h1>
          <h2 className="font-bold mb-10">Web developer</h2>
          <p className="font-light">
            Actuellement a la recherche d'une alternance en tant que développeur
            full-stack, accompagné par la Fabrique du Numérique
          </p>
        </div>
        {/* 2eme colonne */}
        <div className="h-full w-4/5 place-self-center">
          <div className="rounded-full h-4/5 w-4/5 overflow-hidden bg-[url('public/assets/images/IMG_20221231_195423-removebg.png')] bg-top bg-cover bg-no-repeat"></div>
        </div>
      </div>
    </section>
  );
}
