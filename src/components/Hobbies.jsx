import React, { useEffect, useState } from "react";

const BASE_URL = import.meta.env.VITE_FETCH_URL;
const ROUTE_URL = `${BASE_URL}/loisirs`;


export default function Hobbies() {
  const [loisirs, setLoisirs] = useState([]);
  async function getLoisirs() {
    const res = await fetch(ROUTE_URL);
    const data = await res.json();
    setLoisirs(data);
    console.log(data);
    console.log(loisirs);
  }

  useEffect(() => {
    getLoisirs();
  }, []);
  return (
    <div className=" container w-auto">
      <h2 className="h2-primary">
        Loisirs
      </h2>
      <table className="mb-5">
        <tbody>
          {loisirs.length > 0 &&
            loisirs.map((item, index) => (
              <tr key={index}>
                <td className="px-6">{item.loisir}</td>
                <td className=" font-extralight px-5">{item.details}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
