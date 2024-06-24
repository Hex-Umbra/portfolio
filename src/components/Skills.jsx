import React from "react";

export default function Skills() {
    const competences = ["HTML","CSS","JAVASCRIPT","REACT","NODE","MONGODB","TAILWINDCSS","EXPRESS"]
  return (
    <div>
      <div className="h-full w-4/5 m-6 mb-0">
        <h2 className="font-bold text-3xl mb-5 border-2 border-black rounded-3xl text-center">
          Compétences
        </h2>
        <ul className="">
          {competences.map((item, index) => <li key={index}>{item}</li>)}
        </ul>
      </div>
    </div>
  );
}
