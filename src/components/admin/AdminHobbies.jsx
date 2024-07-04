import React, { useEffect, useState } from "react";
import NewHobbie from "./NewHobbie";
import { MdDelete } from "react-icons/md";
import { IoIosRefresh } from "react-icons/io";

const BASE_URL = import.meta.env.VITE_FETCH_URL;
const ROUTE_URL = `${BASE_URL}/loisirs`;

export default function AdminHobbies() {
  const [loisirs, setLoisirs] = useState([]);
  async function getLoisirs() {
    const res = await fetch(ROUTE_URL);
    const data = await res.json();
    setLoisirs(data);
    console.log(data);
    console.log(loisirs);
  }
  async function deleteLoisir(id) {
    const res = await fetch(`${ROUTE_URL}/${id}`, {
      method: "DELETE",
    });
    if (res.ok) {
      getLoisirs();
    }
  }
  useEffect(() => {
    getLoisirs();
  }, []);
  return (
    <div className="grid content-center items-center justify-items-center my-5">
      <table className="mb-5">
        <tbody>
          {loisirs.length > 0 &&
            loisirs.map((item, index) => (
              <tr key={index}>
                <td className="px-6">{item.loisir}</td>
                <td className=" font-extralight px-5">{item.details}</td>
                <td className="px-2">
                  <button
                    className="btn-danger basis-0"
                    onClick={() => deleteLoisir(item._id)}
                  >
                    <MdDelete />
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      <div className="flex items-end">
        <NewHobbie />
        <button
          className="btn-primary bg-purple-500 h-full"
          onClick={getLoisirs}
        >
          <IoIosRefresh size={24} />
        </button>
      </div>
    </div>
  );
}
