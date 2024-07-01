import React, { useEffect, useState } from "react";
import { FaRegSave } from "react-icons/fa";

const BASE_URL = "http://localhost:3030/contact";

export default function AdminContacts() {
  const [email, setEmail] = useState("");
  const [addresse, setAddresse] = useState("");
  const [telephone, setTelephone] = useState("");
  const [prenom, setPrenom] = useState("");
  const [nom, setNom] = useState("");
  async function getContact() {
    const res = await fetch(BASE_URL);
    const data = await res.json();
    setTelephone(data[0].telephone);
    setEmail(data[0].email);
    setAddresse(data[0].addresse);
    setPrenom(data[0].prenom);
    setNom(data[0].nom);
  }

  useEffect(() => {
    getContact();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch(BASE_URL, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ nom, prenom, telephone, email, addresse }),
    }).then((res) => {
      res.json();
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col justify-center items-center my-5">
        <label htmlFor="email">Email</label>
        <input
          className="input-admin"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          value={email}
          type="text"
          id="email"
        />
        <label htmlFor="addresse">Addresse</label>
        <input
          className="input-admin"
          onChange={(e) => {
            setAddresse(e.target.value);
          }}
          value={addresse}
          type="text"
          id="addresse"
        />
        <label htmlFor="telephone">Telephone</label>
        <input
          className="input-admin"
          onChange={(e) => {
            setTelephone(e.target.value);
          }}
          value={telephone}
          type="text"
          id="telephone"
        />
        <button className="btn-primary mt-5"><FaRegSave size={24}/></button>
      </div>
    </form>
  );
}
