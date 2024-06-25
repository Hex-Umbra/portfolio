import React from "react";

export default function Skills() {
    const competences = ["HTML","CSS","JAVASCRIPT","REACT","NODE","MONGODB","TAILWINDCSS","EXPRESS"]
  return (
      <div className=" mx-3 my-5 border-white border-2 rounded-3xl">
        <h2 className="font-bold text-3xl mb-5 border-2 border-white rounded-3xl text-center">
          Compétences
        </h2>
        <ul className=" px-5 mb-5 flex gap-5 justify-center">
          {competences.map((item, index) => <li key={index}>{item}</li>)}
        </ul>
      </div>
  );
}
