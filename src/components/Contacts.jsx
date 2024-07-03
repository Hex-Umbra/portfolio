import React, { useEffect, useState } from "react";
import { LuContact } from "react-icons/lu";
import { CiPhone } from "react-icons/ci";
import { MdOutlineAttachEmail } from "react-icons/md";
import { IoHomeOutline } from "react-icons/io5"

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
      <div className="grid grid-cols-4 justify-items-center"></div>

      {contact.length > 0 && (
        <table>
          <tbody>
            <tr>
              <th>
                <span className="">
                  <LuContact size={24}/>
                </span>
              </th>
              <th>
                <h2 className="bg-slate-950 rounded-lg text-2xl ml-3 border border-white">Contacts</h2>
              </th>
            </tr>
            <tr>
              <td><span><CiPhone size={20}/></span></td>
              <td className=" font-extralight px-5">{contact[0].telephone}</td>
            </tr>
            <tr>
              <td><span><MdOutlineAttachEmail size={20}/></span></td>
              <td className=" font-extralight px-5">{contact[0].email}</td>
            </tr>
            <tr>
              <td><span><IoHomeOutline size={20}/></span></td>
              <td className=" font-extralight px-5">{contact[0].addresse}</td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
}
