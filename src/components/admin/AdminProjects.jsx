import React, { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
import NewProject from "./NewProject";
import { IoIosRefresh } from "react-icons/io";

const BASE_URL = import.meta.env.VITE_FETCH_URL;
const ROUTE_URL = `${BASE_URL}/projects`;

export default function AdminProjects() {
  const [elements, setElements] = useState([]);
  async function getElements() {
    const res = await fetch(ROUTE_URL);
    const data = await res.json();
    setElements(data);
    console.log(data);
    console.log(elements);
  }
  async function deleteElement(id) {
    const res = await fetch(`${ROUTE_URL}/${id}`, {
      method: "DELETE",
    });
    if (res.ok) {
      getElements();
    }
  }
  useEffect(() => {
    getElements();
  }, []);
  return (
    <>
      {elements.map((item, index) => (
        <div
          className="m-5 flex flex-col gap-2 items-center justify-center"
          key={index}
        >
          <span>{item.name}</span>
          <p className="text-center">{item.description}</p>
          <img className="" src={item.img} alt="" />
          <a>{item.link}</a>
          <div className="flex gap-2">
            {item.technologies.map((elem, id) => (
              <span key={id}>{elem}</span>
            ))}
          </div>
          <button
            className="btn-danger"
            onClick={() => deleteElement(item._id)}
          >
            <MdDelete size={20} />
          </button>
          <div className="w-3/4 h-0 border my-5"></div>
          <div className="flex items-end">
            <NewProject />
            <button
              className="btn-primary bg-purple-500 h-full"
              onClick={getElements}
            >
              <IoIosRefresh size={24} />
            </button>
          </div>
        </div>
      ))}
    </>
  );
}
