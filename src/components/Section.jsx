import React from "react";
import Contacts from "./Contacts";

export default function Section() {
  return (
    <section className="md:h-[100vh] bg-[#79261d] shadow-2xl shadow-black h-auto">
      <div className="h-full flex flex-row items-center gap-10 px-5">
        {/* 1ere colonnne */}
        <div className="h-full md:w-4/5 w-auto md:content-center py-10 md:py-0">
          <div className="flex flex-col gap-5">
            <div>
              <h1 className="font-extrabold md:text-6xl mb-2 text-center text-2xl mt-5">
                Gabriel Pereira Da Costa
              </h1>
              <h2 className="font-bold mb-10 text-center md:text-2xl text-lg">
                Web developer
              </h2>
            </div>
            <p className="font-light text-center">
              Actuellement a la recherche d'une alternance en contrat
              d'apprentissage d'un an en tant que développeur Full-Stack,
              accompagné par la Fabrique du Numérique.
              <br />
              Pour nous permettre de connaître le plus de technologie possible
              avant de commencer notre alternance, nous avons suivis un Bootcamp
              sur React pendant 3 mois où nous avons appris les bases du
              développement web avec Html, CSS, JavaScript, travailler sur le
              back-end avec NodeJs et Express et nous connecter a uune base de
              données NoSQL comme MongoDB. Pour le front-end nous avons
              travailler avec React ainsi que tailwind pour le style.
              <br/>
              Grâce a cela je sais travaillé avec le Tech Stack MERN.
            </p>
          </div>
          <div className="md:mt-20 my-10 flex justify-center items-center flex-col">
            <img
              src="/assets/images/upscaled-profile-pic.png"
              className="rounded-full h-1/4 md:h-3/4 md:hidden mb-5"
            />
            <Contacts />
          </div>
        </div>
        {/* 2eme colonnne */}
        <img
          src="/assets/images/upscaled-profile-pic.png"
          className="rounded-full h-1/4 md:h-3/4 hidden md:block"
        />
      </div>
    </section>
  );
}
