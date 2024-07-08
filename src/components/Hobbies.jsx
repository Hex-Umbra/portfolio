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
    <div className=" md:container md:w-auto">
      <h2 className="md:h2-primary h2-primary-res">
        Loisirs
      </h2>
      <table className=" mb-5 text-center md:text-base text-sm">
        <tbody>
          {loisirs.length > 0 &&
            loisirs.map((item, index) => (
              <tr key={index}>
                <td className="md:px-6">{item.loisir}</td>
                <td className=" font-extralight text-xs" >{item.details}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
