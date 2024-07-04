import React, { useEffect, useState } from "react";
import NewFormation from "./NewFormation";
import { MdDelete } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
import { IoIosRefresh } from "react-icons/io";

const BASE_URL = import.meta.env.VITE_FETCH_URL;
const ROUTE_URL = `${BASE_URL}/formations`;

export default function AdminFormations() {
  const [formation, setFormation] = useState([]);
  async function getFormations() {
    try {
      const res = await fetch(ROUTE_URL);
      const data = await res.json();
      setFormation(data);
      console.log(data);
      console.log(formation);
    } catch (err) {
      console.error(err);
    }
  }
  async function deleteFormation(id) {
    const res = await fetch(`${ROUTE_URL}/${id}`, {
      method: "DELETE",
    });
    if (res.ok) {
      getFormations();
    }
  }

  useEffect(() => {
    getFormations();
  }, []);
  return (
    <div className="grid content-center items-center justify-items-center my-5">
      <table className="m-5">
        <thead>
          <tr>
            <th className=" border-l-2 border-b-2 border-white">
              Nom de la Formation
            </th>
            <th className=" border-x-2 border-b-2 border-white">Duree</th>
            <th className="border-b-2">Ecole</th>
            <th className=" border-x-2 border-b-2 border-white">Description</th>
          </tr>
        </thead>
        <tbody>
          {formation.map((item, index) => (
            <tr key={index}>
              <td className=" border-2 border-white">{item.type}</td>
              <td className=" border-2 border-white p-5">{item.duree}</td>
              <td className=" border-2 border-white">{item.ecole}</td>
              <td className=" border-2 border-white">{item.infos}</td>
              <td>
                <button
                  className="btn-danger"
                  onClick={() => deleteFormation(item._id)}
                >
                  <MdDelete size={20} />
                </button>
              </td>
              <td>
                <Link to={`/updateFormations/${item._id}`}>
                  {" "}
                  <FaRegEdit />
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex items-end">
        <NewFormation />
        <button className="btn-primary bg-purple-500 h-full" onClick={getFormations}>
          <IoIosRefresh size={24} />
        </button>
      </div>
    </div>
  );
}
