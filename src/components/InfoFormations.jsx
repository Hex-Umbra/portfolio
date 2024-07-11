import React, { useEffect, useState } from "react";
import { ColorRing } from "react-loader-spinner";

const BASE_URL = import.meta.env.VITE_FETCH_URL;
const ROUTE_URL = `${BASE_URL}/formations`;

export default function InfoFormations() {
  const [formation, setFormation] = useState([]);
  const [isLoaded, setIsLoaded] = useState(true);

  async function getFormations() {
    const res = await fetch(ROUTE_URL);
    const data = await res.json();
    setFormation(data);
    if (data) {
      setIsLoaded(false);
    }
  }

  useEffect(() => {
    getFormations();
  }, []);
  return (
    <div className="flex flex-col items-center text-center md:p-5 md:w-full">
      <h2 className="h2-primary bg-slate-950 md:w-1/2 w-2/3">Formations</h2>
      {isLoaded && (
        <ColorRing
          visible={true}
          height="80"
          width="80"
          ariaLabel="color-ring-loading"
          wrapperStyle={{}}
          wrapperClass="color-ring-wrapper"
          colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
        />
      )}
      {formation.map((item, index) => (
        <div className="flex flex-col items-center" key={index}>
          <div className="my-2">
            <h3 className="text-2xl font-extrabold text-slate-800">{item.type}</h3>
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
