import React, { useEffect, useState } from "react";

const BASE_URL = "http://localhost:3030/loisirs";


export default function Hobbies() {
  const [loisirs, setLoisirs] = useState([]);
  async function getLoisirs() {
    const res = await fetch(BASE_URL);
    const data = await res.json();
    setLoisirs(data);
    console.log(data);
    console.log(loisirs);
  }

  useEffect(() => {
    getLoisirs();
  }, []);
  return (
    <div className="mx-3 my-5 border-white border-2 rounded-3xl shadow-lg shadow-red-500">
      <h2 className="h2-primary">
        Loisirs
      </h2>
      <table className="mb-5">
        <tbody>
          {loisirs.length > 0 &&
            loisirs.map((item) => (
              <tr>
                <td className="px-6">{item.loisir}</td>
                <td className=" font-extralight px-5">{item.details}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
