import React, { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
import NewExperience from "./NewExperience";
import { IoIosRefresh } from "react-icons/io";

const BASE_URL = import.meta.env.VITE_FETCH_URL;
const ROUTE_URL = `${BASE_URL}/experiences`;

export default function AdminExperiences() {
  const [experiences, setExperiences] = useState([]);
  async function getExperiences() {
    try {
      const res = await fetch(ROUTE_URL);
      const data = await res.json();
      setExperiences(data);
      console.log(data);
      console.log(experiences);
    } catch (error) {
      console.log(error);
    }
  }
  async function deleteExperience(id) {
    const res = await fetch(`${ROUTE_URL}/${id}`, {
      method: "DELETE",
    });
    if (res.ok) {
      getExperiences();
    }
  }
  useEffect(() => {
    getExperiences();
  }, []);
  return (
    <div className="grid content-center items-center justify-items-center my-5">
      <table className="m-5">
        <thead>
          <tr>
            <th className=" border-l-2 border-b-2 border-white">Poste</th>
            <th className=" border-x-2 border-b-2 border-white">Durée</th>
            <th className="border-b-2">Compagnie</th>
            <th className=" border-x-2 border-b-2 border-white">Description</th>
          </tr>
        </thead>
        <tbody>
          {experiences.map((item, index) => (
            <tr key={index}>
              <td className=" border-2 border-white">{item.job}</td>
              <td className=" border-2 border-white p-5">{item.duree}</td>
              <td className=" border-2 border-white">{item.company}</td>
              <td className=" border-2 border-white">{item.mission}</td>
              <td>
                <button
                  className="btn-danger"
                  onClick={() => deleteExperience(item._id)}
                >
                  <MdDelete size={20} />
                </button>
              </td>
              <td>
                <Link to={`/updateExperiences/${item._id}`}>
                  {" "}
                  <FaRegEdit />
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex items-end">
        <NewExperience />
        <button
          className="btn-primary bg-purple-500 h-full"
          onClick={getExperiences}
        >
          <IoIosRefresh size={24} />
        </button>
      </div>
    </div>
  );
}
