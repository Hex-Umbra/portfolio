import React, { useEffect, useState } from "react";

const BASE_URL = "http://localhost:3030/competences";

export default function Skills() {
  const [skills, setSkills] = useState([]);
  async function getCompetences() {
    const res = await fetch(BASE_URL);
    const data = await res.json();
    setSkills(data);
    console.log(data);
    console.log(skills);
  }

  useEffect(() => {
    getCompetences();
  }, []);

  return (
    <div className=" mx-3 my-5 border-white border-2 rounded-3xl shadow-lg shadow-red-500">
      <h2 className="h2-primary">Compétences</h2>
      <div className="flex flex-row gap-5 justify-center items-center m-5 flex-wrap">
        {skills.map((item) => (
          <div className="flex flex-col gap-3 justify-center items-center">
            <img src={item.img} alt="" />
            <p className=" text-lg">{item.technologie}</p>
            <span className=" font-extralight">{item.mastery}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
