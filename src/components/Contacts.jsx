import React from 'react'

export default function Contacts() {
  return (
    <div>
      <div className="h-full w-4/5 m-6 mb-0">
        <h2 className="font-bold text-3xl mb-5 border-2 border-black rounded-3xl text-center">
          Langues
        </h2>
        <ul className="">
          <table>
            <tbody>
              <tr>
                <td>Français</td>
                <td className=" font-extralight px-5">Langue Maternelle</td>
              </tr>
              <tr>
                <td>Portugais</td>
                <td className=" font-extralight px-5">Langue Maternelle</td>
              </tr>
              <tr>
                <td>Anglais</td>
                <td className=" font-extralight px-5">Niveau C1</td>
              </tr>
            </tbody>
          </table>
        </ul>
      </div>
  )
}
