import React, { useEffect, useState } from "react";
import { TiArrowUpThick, TiArrowDownThick } from "react-icons/ti";


const BASE_URL = import.meta.env.VITE_FETCH_URL;
const ROUTE_URL = `${BASE_URL}/projects`;

export default function ProjectFetching() {
  const [isToggle, setIsToggle] = useState(true);
  const handleToggle = () => {
    setIsToggle(!isToggle);
    console.log(isToggle);
  };
  const [elements, setElements] = useState([]);
  async function getElements() {
    const res = await fetch(ROUTE_URL);
    const data = await res.json();
    setElements(data);
    console.log(data);
    console.log(elements);
  }
  useEffect(() => {
    getElements();
  }, []);
  return (
    <>
      {elements.map((item, index) => (
        <div key={index} className="md:card-carousel hover:card-carousel-hover">
          <h3 className="text-2xl font-bold">{item.name}</h3>
          <a target="_blank" href={item.link}>
            <img
              className=" cursor-pointer rounded-lg"
              src={item.img}
              alt=""
            />
          </a>
          <h4 className="text-xl">Technologies utilisées</h4>
          <div className="flex gap-2 font-light">
            {item.technologies.map((elem, id) => (
                <span key={id}>{elem}</span>
            ))}
          </div>
          <div className="flex gap-1">
            <button onClick={handleToggle}>
              {isToggle ? (
                <TiArrowUpThick size={24} />
              ) : (
                <TiArrowDownThick size={24} />
              )}
            </button>
          </div>
          {isToggle === false && (
            <div>
                {item.description}
            </div>
          )}
        </div>
      ))}
    </>
  );
}
