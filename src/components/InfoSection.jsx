import React from "react";
import Skills from "./Skills.jsx";
import Languages from "./Languages.jsx";
import Hobbies from "./Hobbies.jsx";

export default function InfoSection() {
  return (
    <section className="h-[650px] bg-[#000000b9] mx-16 rounded-3xl mb-10 content-center">
      <div className="flex flex-col items-center w-full ">
        {/* 1ere colonne 1ere ligne */}
        <Skills/>
        {/* 2eme colonne 1ere ligne */}
        <Languages/>
        {/* 1ere colonne 2eme ligne */}
        <Hobbies/>
      </div>
    </section>
  );
}
