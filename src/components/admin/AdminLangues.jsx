import React, { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
import NewLangue from "./NewLangue";

const BASE_URL = "http://localhost:3030/languages";

export default function AdminLangues() {
  const [langues, setLangues] = useState([]);
  async function getLangues() {
    const res = await fetch(BASE_URL);
    const data = await res.json();
    setLangues(data);
    console.log(data);
    console.log(langues);
  }
  async function deleteLangue(id) {
    const res = await fetch(`${BASE_URL}/${id}`, {
      method: "DELETE",
    });
    if (res.ok) {
      getLangues();
    }
  }
  useEffect(() => {
    getLangues();
  }, []);
  return (
    <div className="grid content-center items-center justify-items-center my-5">
      <table className="mb-5">
        <tbody>
          {langues.length > 0 &&
            langues.map((item, index) => (
              <tr key={index}>
                <td className="px-6"><img src={item.image} alt="" /></td>
                <td className="px-6">{item.langue}</td>
                <td className=" font-extralight px-5">{item.mastery}</td>
                <td className="px-2">
                  <button
                    className="btn-danger basis-0"
                    onClick={() => deleteLangue(item._id)}
                  >
                    <MdDelete />
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      <NewLangue/>
    </div>
  );
}
