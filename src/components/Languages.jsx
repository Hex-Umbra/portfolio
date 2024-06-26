import React, { useEffect, useState } from "react";

const BASE_URL = "http://localhost:3030/languages";

export default function Languages() {
  const [langues, setLangues] = useState([]);
  async function getLangues() {
    const res = await fetch(BASE_URL);
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
      <div className="m-6 border-white border-2 rounded-3xl">
        <h2 className="font-bold text-3xl mb-5 border-2 border-white rounded-3xl text-center">
          Langues
        </h2>
        <table className="mb-5">
          <tbody>
            {langues.length > 0 &&
              langues.map((item) => (
                <tr>
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
