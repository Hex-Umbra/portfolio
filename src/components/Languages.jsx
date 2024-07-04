import React, { useEffect, useState } from "react";

const BASE_URL = import.meta.env.VITE_FETCH_URL;
const ROUTE_URL = `${BASE_URL}/languages`;

export default function Languages() {
  const [langues, setLangues] = useState([]);
  async function getLangues() {
    const res = await fetch(ROUTE_URL);
    const data = await res.json();
    setLangues(data);
    console.log(data);
    console.log(langues);
  }

  useEffect(() => {
    getLangues();
  }, []);
  return (
    <div>
      <div className=" container w-auto">
        <h2 className="h2-primary">
          Langues
        </h2>
        <table className="mb-5">
          <tbody>
            {langues.length > 0 &&
              langues.map((item, index) => (
                <tr key={index}>
                  <td className="px-6"><img src={item.image} alt="" /></td>
                  <td className="px-6">{item.langue}</td>
                  <td className=" font-extralight px-5">{item.mastery}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
