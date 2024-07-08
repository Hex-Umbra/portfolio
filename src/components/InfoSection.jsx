import React from "react";
import Skills from "./Skills.jsx";
import Languages from "./Languages.jsx";
import Hobbies from "./Hobbies.jsx";

export default function InfoSection() {
  return (
    <section className="md:secondary-section bg-slate-950 m-0">
      <div className="flex flex-row flex-wrap w-full justify-center">
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
