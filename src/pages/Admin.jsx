import React, { useEffect, useState } from "react";

const BASE_URL = "http://localhost:3030/contact";

export default function Admin() {
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
  return (
    <section className="h-[550px] bg-[#000000b9] mx-16 rounded-3xl my-10">
      <form action="/contact" method="POST">
        <div className="m-10">
          <div>
            <label for="email">Email</label>
            <input
              className="border-2 border-black rounded-lg pl-5 ml-5 bg-slate-400"
              type="text"
              id="email"
              name="contact[email]"
            />
          </div>
          <div>
            <label for="addresse">Addresse</label>
            <input
              className="border-2 border-black rounded-lg pl-5 ml-5 bg-slate-400"
              type="text"
              id="addresse"
              name="contact[addresse]"
            />
          </div>
          <div>
            <label for="telephone">Telephone</label>
            <input
              className="border-2 border-black rounded-lg pl-5 ml-5 bg-slate-400"
              type="text"
              id="telephone"
              name="contact[telepĥone]"
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
