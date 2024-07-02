import React, { useState } from "react";
import { IoMdAddCircle } from "react-icons/io";
import { MdCancel } from "react-icons/md";
import { FaRegSave } from "react-icons/fa";

const BASE_URL = "http://localhost:3030/competences";

export default function NewSkill() {
  const [technologie, setTechnologie] = useState("");
  const [img, setImg] = useState("");
  const [mastery, setMastery] = useState("");
  const [isAdd, setIsAdd] = useState(false);
  const [isBtnActive, setBtnActive] = useState(true);
  const makeNewSkill = () => {
    if (skill !== "") {
      fetch(BASE_URL, {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ technologie, img, mastery }),
      }).then((res) => {
        res.json();
      });
    }
  };
  const addSkill = () => {
    setIsAdd(true);
    setBtnActive(false);
  };
  const cancelAdd = () => {
    setIsAdd(false);
    setBtnActive(true);
  };

  return (
    <div className="flex flex-row">
      {isAdd && (
        <form
          className="form"
          onSubmit={makeNewSkill}
        >
          <label htmlFor="skill">Technologie</label>
          <input
            className="border-2 border-black rounded-lg pl-5 ml-5 bg-slate-400"
            onChange={(e) => {
              setTechnologie(e.target.value);
            }}
            type="text"
            id="skill"
          />
          <label htmlFor="img">Lien Image</label>
          <input
            className="border-2 border-black rounded-lg pl-5 ml-5 bg-slate-400"
            onChange={(e) => {
              setImg(e.target.value);
            }}
            type="text"
            id="img"
          />
          <label htmlFor="mastery">Maîtrise</label>
          <input
            className="border-2 border-black rounded-lg pl-5 ml-5 bg-slate-400"
            onChange={(e) => {
              setMastery(e.target.value);
            }}
            type="text"
            id="mastery"
          />
          <div className="flex gap-20">
            <button className="btn-primary">
              <FaRegSave size={24} />
            </button>
            <button className="btn-danger" onClick={cancelAdd}>
              <MdCancel size={24} />
            </button>
          </div>
        </form>
      )}
      {isBtnActive && (
        <button className="btn-primary bg-yellow-500" onClick={addSkill}>
          <IoMdAddCircle size={24} />
        </button>
      )}
    </div>
  );
}
