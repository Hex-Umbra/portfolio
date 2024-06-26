import React, { useEffect, useState } from "react";

const BASE_URL = "http://localhost:3030/contact";

export default function AdminContacts() {
  const [email, setEmail] = useState("");
  const [addresse, setAddresse] = useState("");
  const [telephone, setTelephone] = useState("");
  async function getContact() {
    const res = await fetch(BASE_URL);
    const data = await res.json();
    setTelephone(data[0].telephone);
    setEmail(data[0].email);
    setAddresse(data[0].addresse);
  }

  useEffect(() => {
    getContact();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(BASE_URL, {
      method: "POST",
      headers:{"Content-type":"application/json"},
      body: JSON.stringify({ telephone, email, addresse }),
    }).then((res) => {
      res.json();
    });
  };

  return (
    <section className="h-[550px] bg-[#000000b9] mx-16 rounded-3xl my-10">
      <form onSubmit={handleSubmit}>
        <div className="m-10">
          <div>
            <label htmlFor="email">Email</label>
            <input
              className="border-2 border-black rounded-lg pl-5 ml-5 bg-slate-400"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              value={email}
              type="text"
              id="email"
            />
          </div>
          <div>
            <label htmlFor="addresse">Addresse</label>
            <input
              className="border-2 border-black rounded-lg pl-5 ml-5 bg-slate-400"
              onChange={(e) => {
                setAddresse(e.target.value);
              }}
              value={addresse}
              type="text"
              id="addresse"
            />
          </div>
          <div>
            <label htmlFor="telephone">Telephone</label>
            <input
              className="border-2 border-black rounded-lg pl-5 ml-5 bg-slate-400"
              onChange={(e) => {
                setTelephone(e.target.value);
              }}
              value={telephone}
              type="text"
              id="telephone"
            />
          </div>
          <button className="rounded-lg bg-slate-500 p-3 mt-3">
            Submit changes
          </button>
        </div>
      </form>
    </section>
  );
}
