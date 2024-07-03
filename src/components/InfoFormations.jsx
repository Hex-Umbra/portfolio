import React, { useEffect, useState } from "react";

const BASE_URL = "http://localhost:3030/formations";

export default function InfoFormations() {
  const [formation, setFormation] = useState([]);
  async function getFormations() {
    const res = await fetch(BASE_URL);
    const data = await res.json();
    setFormation(data);
    console.log(data);
    console.log(formation);
  }

  useEffect(() => {
    getFormations();
  }, []);
  return (
    <div className="flex flex-col items-center text-center p-5 w-full">
      <h2 className="h2-primary bg-slate-950 w-1/2">Formations</h2>
      {formation.map((item, index) => (
        <div className="flex flex-col items-center" key={index}>
          <div className="my-2">
            <h3 className="text-2xl font-semibold text-red-500">{item.type}</h3>
            <h4 className="text-medium font-semibold">{item.ecole}</h4>
          </div>
          <div className="my-2">
            <span>{item.duree}</span>
          </div>
          <p className="text-sm font-light">{item.infos}</p>
          <div className="w-3/4 h-0 border my-5"></div>
        </div>
      ))}
    </div>
  );
}
