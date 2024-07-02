import React, { useEffect, useState } from "react";
import { LuContact } from "react-icons/lu";

const BASE_URL = "http://localhost:3030/contact";

export default function Contacts() {
  const [contact, setContact] = useState([]);
  async function getContact() {
    const res = await fetch(BASE_URL);
    const data = await res.json();
    setContact(data);
    console.log(data);
    console.log(contact);
  }

  useEffect(() => {
    getContact();
  }, []);

  return (
    <div className=" text-white">
      <div className="grid grid-cols-4">
        <h2 className="">Contacts</h2>
        <span className="grow-0">
          <LuContact />
        </span>
      </div>

      {contact.length > 0 && (
        <table>
          <tbody>
            <tr>
              <td>Tel</td>
              <td className=" font-extralight px-5">{contact[0].telephone}</td>
            </tr>
            <tr>
              <td>Email</td>
              <td className=" font-extralight px-5">{contact[0].email}</td>
            </tr>
            <tr>
              <td>Addresse</td>
              <td className=" font-extralight px-5">{contact[0].addresse}</td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
}
