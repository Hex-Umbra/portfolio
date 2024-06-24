import React from "react";

export default function Contacts() {
  return (
    <div>
      <div className="mt-10 mb-0">
        <h2 className="font-bold text-xl mb-5 text-center">
          Contacts
        </h2>
        <ul className="ml-20">
          <table>
            <tbody>
              <tr>
                <td>Tel</td>
                <td className=" font-extralight px-5">0667383641</td>
              </tr>
              <tr>
                <td>Mail</td>
                <td className=" font-extralight px-5">g.p.dacosta@hotmail.com</td>
              </tr>
              <tr>
                <td>Addresse</td>
                <td className=" font-extralight px-5">
                  23 Chemin De Ruchelle, 64510, Assat
                </td>
              </tr>
            </tbody>
          </table>
        </ul>
      </div>
    </div>
  );
}
