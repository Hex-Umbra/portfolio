import React, { useState } from "react";
import { IoMdAddCircle } from "react-icons/io";
import { MdCancel } from "react-icons/md";
import { FaRegSave } from "react-icons/fa";

const BASE_URL = "http://localhost:3030/languages";

export default function NewLangue() {
  const [langue, setLangue] = useState("");
  const [mastery, setMastery] = useState("");
  const [image, setImage] = useState("");
  const [isAdd, setIsAdd] = useState(false);
  const [isBtnActive, setBtnActive] = useState(true);
  const makeNewLangue = () => {
    if (langue !== "") {
      fetch(BASE_URL, {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ langue, mastery, image }),
      }).then((res) => {
        res.json();
      });
    }
  };
  const addLangue = () => {
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
        <form className="form" onSubmit={makeNewLangue}>
          <label htmlFor="skill">Langue</label>
          <input
            className="border-2 border-black rounded-lg pl-5 ml-5 bg-slate-400"
            onChange={(e) => {
              setLangue(e.target.value);
            }}
            type="text"
            id="skill"
          />
          <label htmlFor="image">Lien Image</label>
          <input
            className="border-2 border-black rounded-lg pl-5 ml-5 bg-slate-400"
            onChange={(e) => {
              setImage(e.target.value);
            }}
            type="text"
            id="image"
          />
          <select
            className="bg-slate-400 mt-5 px-5 mx-5 text-center"
            onChange={(e) => setMastery(e.target.value)}
          >
            <option selected hidden value="">
              Choisir le Niveau
            </option>
            <option value="Langue Maternelle">Langue Maternelle</option>
            <option value="Niveau A1">Niveau A1</option>
            <option value="Niveau A2">Niveau A2</option>
            <option value="Niveau B1">Niveau B1</option>
            <option value="Niveau B2">Niveau B2</option>
            <option value="Niveau C1">Niveau C1</option>
            <option value="Niveau C2">Niveau C2</option>
          </select>
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
        <button className="btn-primary bg-yellow-500" onClick={addLangue}>
          <IoMdAddCircle size={24} />
        </button>
      )}
    </div>
  );
}
