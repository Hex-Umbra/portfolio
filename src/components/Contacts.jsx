import React, { useEffect, useState } from "react";

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
      <h2 className="font-bold text-3xl my-5 border-2 border-white rounded-3xl text-center">
          Contacts
        </h2>
      {contact.length > 0 &&
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
        }
    </div>
  );
}
