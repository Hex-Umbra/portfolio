import React, { useEffect, useState } from "react";
import RadialProgressBar from "./RadialProgressBar";


const BASE_URL = import.meta.env.VITE_FETCH_URL
const ROUTE_URL = `${BASE_URL}/competences`;

export default function Skills() {
  console.log(ROUTE_URL);
  const [skills, setSkills] = useState([]);
  async function getCompetences() {
    const res = await fetch(ROUTE_URL);
    const data = await res.json();
    setSkills(data);
  }

  useEffect(() => {
    getCompetences();
  }, []);

  return (
    <div className=" md:container md:w-auto w-full">
      <h2 className="md:h2-primary h2-primary-res">Compétences</h2>
      <div className="flex md:flex-row justify-center md:gap-5 gap-3 items-center md:m-5 flex-wrap">
        {skills.map((item, index) => (
          <div className="flex flex-col md:gap-3 justify-center items-center" key={index}>
            <img src={item.img} alt="" />
            <p className=" md:text-lg text-base">{item.technologie}</p>
            <RadialProgressBar progress={item.mastery}/>
          </div>
        ))}
      </div>
    </div>
  );
}
