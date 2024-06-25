import React from "react";

export default function Languages() {
  return (
    <div>
      <div className="m-6 border-white border-2 rounded-3xl">
      <h2 className="font-bold text-3xl mb-5 border-2 border-white rounded-3xl text-center">
          Langues
        </h2>
          <table className="mb-5">
            <tbody>
              <tr>
                <td className="px-6">Français</td>
                <td className=" font-extralight px-5">Langue Maternelle</td>
              </tr>
              <tr>
                <td className="px-6">Portugais</td>
                <td className=" font-extralight px-5">Langue Maternelle</td>
              </tr>
              <tr>
                <td className="px-6">Anglais</td>
                <td className=" font-extralight px-5">Niveau C1</td>
              </tr>
            </tbody>
          </table>
      </div>
    </div>
  );
}
