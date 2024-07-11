import React, { useEffect, useState } from "react";
import { ColorRing } from "react-loader-spinner";

const BASE_URL = import.meta.env.VITE_FETCH_URL;
const ROUTE_URL = `${BASE_URL}/loisirs`;

export default function Hobbies() {
  const [loisirs, setLoisirs] = useState([]);
  const [isLoaded, setIsLoaded] = useState(true);

  async function getLoisirs() {
    const res = await fetch(ROUTE_URL);
    const data = await res.json();
    setLoisirs(data);
    if (data) {
      setIsLoaded(false);
    }
  }

  useEffect(() => {
    getLoisirs();
  }, []);
  return (
    <div className=" md:container md:w-auto">
      <h2 className="md:h2-primary h2-primary-res">Loisirs</h2>
      <table className=" mb-5 text-center md:text-base text-sm">
        <tbody>
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
          {loisirs.length > 0 &&
            loisirs.map((item, index) => (
              <tr key={index}>
                <td className="md:px-6">{item.loisir}</td>
                <td className=" font-extralight text-xs">{item.details}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
