import React, { useEffect, useState } from "react";
import RadialProgressBar from "./RadialProgressBar";
import { ColorRing } from "react-loader-spinner";

const BASE_URL = import.meta.env.VITE_FETCH_URL;
const ROUTE_URL = `${BASE_URL}/competences`;

export default function Skills() {
  console.log(ROUTE_URL);
  const [skills, setSkills] = useState([]);
  const [isLoaded, setIsLoaded] = useState(true);

  async function getCompetences() {
    const res = await fetch(ROUTE_URL);
    const data = await res.json();
    setSkills(data);
    if (data) {
      setIsLoaded(false);
    }
  }

  useEffect(() => {
    getCompetences();
  }, []);

  return (
    <div className=" md:container md:w-auto w-full">
      <h2 className="md:h2-primary h2-primary-res">Compétences</h2>
      <div className="flex justify-center">
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
      </div>
      <div className="flex md:flex-row justify-center md:gap-5 gap-3 items-center md:m-5 flex-wrap">
        {skills.map((item, index) => (
          <div
            className="flex flex-col md:gap-3 justify-center items-center"
            key={index}
          >
            <img src={item.img} alt="" />
            <p className=" md:text-lg text-base">{item.technologie}</p>
            <RadialProgressBar progress={item.mastery} />
          </div>
        ))}
      </div>
    </div>
  );
}
