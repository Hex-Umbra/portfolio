import React, { useEffect, useState } from "react";

const BASE_URL = "http://localhost:3030/contact";

export default function Admin() {
  const [email, setEmail] = useState("");
  const [addresse, setAddresse] = useState("");
  const [telephone, setTelephone] = useState("");
  async function getContact() {
    const res = await fetch(BASE_URL);
    const data = await res.json();
    setPrenom(data[0].telephone);
    setPrenom(data[0].email);
    setPrenom(data[0].addresse);
  }

  useEffect(() => {
    getContact();
  }, []);
  return (
    <section className="h-[550px] bg-[#000000b9] mx-16 rounded-3xl my-10">
      <form action="/campgrounds" method="POST">
        <div>
          <label for="prenom">Prenom</label>
          <input className="border-2 rounded-lg pl-5 ml-5" type="text" id="prenom" name="contact[prenom]" />
          <div>
            <label for="location">Location</label>
            <input type="text" id="location" name="contact[nom]" />
          </div>
          <button>Submit changes</button>
        </div>
      </form>
    </section>
  );
}
