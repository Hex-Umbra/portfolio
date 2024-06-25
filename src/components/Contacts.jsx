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
      {contact.length > 0 &&
        contact.map((item) => (
          <div>
            <h2>{item.prenom}</h2>
            <h2>{item.nom}</h2>
            <h2>{item.email}</h2>
            <h2>{item.addresse}</h2>
          </div>
        ))}
    </div>
  );
}
