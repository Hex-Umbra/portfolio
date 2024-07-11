import React, { useEffect, useState } from "react";
import { ColorRing } from "react-loader-spinner";

const BASE_URL = import.meta.env.VITE_FETCH_URL;
const ROUTE_URL = `${BASE_URL}/languages`;

export default function Languages() {
  const [langues, setLangues] = useState([]);
  const [isLoaded, setIsLoaded] = useState(true);
  async function getLangues() {
    const res = await fetch(ROUTE_URL);
    const data = await res.json();
    setLangues(data);
    if (data) {
      setIsLoaded(false);
    }
  }

  useEffect(() => {
    getLangues();
  }, []);
  return (
    <div>
      <div className=" md:container">
        <h2 className="md:h2-primary h2-primary-res">Langues</h2>
        <div className="flex justify-center">
        {isLoaded && (
          <ColorRing
            visible={true}
            height="80"
            width="80"
            ariaLabel="color-ring-loading"
            wrapperStyle={{}}
            wrapperClass="color-ring-wrapper"
            colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
          />
        )}
      </div>
        <table className="mb-5">
          <tbody>
            {langues.length > 0 &&
              langues.map((item, index) => (
                <tr key={index}>
                  <td className="md:px-6 ">
                    <img src={item.image} alt="" />
                  </td>
                  <td className="md:px-6">{item.langue}</td>
                  <td className=" font-extralight md:px-5 px-0">
                    {item.mastery}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
