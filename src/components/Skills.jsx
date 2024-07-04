import React, { useEffect, useState } from "react";
import RadialProgressBar from "./RadialProgressBar";

const BASE_URL = process.env.FETCH_URL
const ROUTE_URL = `${BASE_URL}/competences`;

export default function Skills() {
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
    <div className=" container w-auto">
      <h2 className="h2-primary">Compétences</h2>
      <div className="flex flex-row justify-center gap-5 items-center m-5 flex-wrap">
        {skills.map((item, index) => (
          <div className="flex flex-col gap-3 justify-center items-center" key={index}>
            <img src={item.img} alt="" />
            <p className=" text-lg">{item.technologie}</p>
            <RadialProgressBar progress={item.mastery}/>
          </div>
        ))}
      </div>
    </div>
  );
}
