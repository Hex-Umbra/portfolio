import React, { useEffect, useState } from "react";
import { LuContact } from "react-icons/lu";
import { CiPhone } from "react-icons/ci";
import { MdOutlineAttachEmail } from "react-icons/md";
import { IoHomeOutline } from "react-icons/io5";
import { AiOutlineLinkedin } from "react-icons/ai";

const BASE_URL = import.meta.env.VITE_FETCH_URL;
const ROUTE_URL = `${BASE_URL}/contact`;

export default function Contacts() {
  const [contact, setContact] = useState([]);
  async function getContact() {
    const res = await fetch(ROUTE_URL);
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
                  <LuContact size={24} />
                </span>
              </th>
              <th>
                <h2 className="bg-slate-950 rounded-lg text-2xl ml-3 mb-3 border border-white">
                  Contacts
                </h2>
              </th>
            </tr>
            {/* 1ere ligne */}
            <tr>
              <td>
                <span>
                  <CiPhone size={20} />
                </span>
              </td>
              <td className=" font-extralight px-5">{contact[0].telephone}</td>
            </tr>
            {/* 2eme ligne */}
            <tr>
              <td>
                <span>
                  <MdOutlineAttachEmail size={20} />
                </span>
              </td>
              <td className=" font-extralight px-5">{contact[0].email}</td>
            </tr>
            {/* 3eme ligne */}
            <tr>
              <td>
                <span>
                  <IoHomeOutline size={20} />
                </span>
              </td>
              <td className=" font-extralight px-5">{contact[0].addresse}</td>
            </tr>
            {/* 4eme ligne */}
            <tr>
              <td>
                <span>
                  <AiOutlineLinkedin size={20} />
                </span>
              </td>
              <td className=" font-extralight px-5">
                <a
                className="underline"
                  target="_blank"
                  href="https://www.linkedin.com/in/gabriel-pereira-da-costa-204919238"
                >
                  Lien vers mon LinkedIn
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
}
