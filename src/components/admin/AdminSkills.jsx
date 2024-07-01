import React, { useEffect, useState } from "react";
import NewSkill from "./NewSkill";
import { MdDelete } from "react-icons/md";

const BASE_URL = "http://localhost:3030/competences";

export default function AdminSkills() {
  const [skill, setSkill] = useState([]);
  async function getSkills() {
    const res = await fetch(BASE_URL);
    const data = await res.json();
    console.log(data);
    setSkill(data);
  }

  async function deleteSkill(id) {
    const res = await fetch(`${BASE_URL}/${id}`, {
      method: "DELETE",
    });
    if (res.ok) {
      getSkills();
    }
  }
  useEffect(() => {
    getSkills();
  }, []);
  return (
    <div className="grid content-center items-center justify-items-center my-5">
      {skill.map((item, index) => (
        <div
          key={index}
          className="grid grid-cols-3 border-2 border-slate-500 w-2/6"
        >
          <p className="px-5 basis-5/6">{item.technologie}</p>
          <span className="px-5 basis-5/6">{item.mastery}</span>
          <button className="btn-danger basis-0 w-1/5" onClick={() => deleteSkill(item._id)}>
            <MdDelete />
          </button>
        </div>
      ))}
      <NewSkill />
    </div>
  );
}
