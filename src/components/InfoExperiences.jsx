import React, { useEffect, useState } from "react";
import { ColorRing } from "react-loader-spinner";

export default function InfoExperiences() {
  const BASE_URL = import.meta.env.VITE_FETCH_URL;
const ROUTE_URL = `${BASE_URL}/experiences`;

  const [experiences, setExperiences] = useState([]);
  const [isLoaded, setIsLoaded] = useState(true);

  async function getExperiences() {
    const res = await fetch(ROUTE_URL);
    const data = await res.json();
    setExperiences(data);
    console.log(data);
    console.log(experiences);
    if (data) {
      setIsLoaded(false);
    }
  }

  useEffect(() => {
    getExperiences();
  }, []);
  return (
    <div className="flex flex-col items-center text-center md:p-5 md:w-full">
      <h2 className="h2-primary bg-slate-950 md:w-1/2">Éxperiences</h2>
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
      {experiences.map((item, index) => (
        <div className="flex flex-col items-center" key={index}>
          <div className="my-2">
            <h3 className="text-2xl font-extrabold text-slate-800">{item.job}</h3>
            <h4 className="text-medium font-semibold">{item.company}</h4>
          </div>
          <div className="my-2">
            <span>{item.duree}</span>
          </div>
          <p className="text-sm font-light">{item.mission}</p>
          <div className="w-3/4 h-0 border my-5"></div>
        </div>
      ))}
    </div>
  );
}
