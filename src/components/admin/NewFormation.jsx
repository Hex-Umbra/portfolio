import React, { useState } from "react";
import { MdCancel } from "react-icons/md";
import { FaRegSave } from "react-icons/fa";
import { IoMdAddCircle } from "react-icons/io";

const BASE_URL = "http://localhost:3030/formations";


export default function NewFormation(fetchAll) {
  const [type, setType] = useState("");
  const [infos, setInfos] = useState("");
  const [ecole, setEcole] = useState("");
  const [duree, setDuree] = useState("");
  const [enCours, setEnCours] = useState(false);
  const [isAdd, setIsAdd] = useState(false);
  const [isBtnActive, setBtnActive] = useState(true);
  const makeNewFormation = (e) => {
    if (type !== "") {
        e.preventDefault()
      fetch(BASE_URL, {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ type, infos, ecole, duree, enCours }),
      }).then((res) => {
        res.json();
      });
      fetchAll
    }
  };
  const addFormation = () => {
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
        <form className="form" onSubmit={makeNewFormation}>
          <label htmlFor="type">Nom Formation</label>
          <input
            className="border-2 border-black rounded-lg pl-5 ml-5 bg-slate-400"
            onChange={(e) => {
              setType(e.target.value);
            }}
            type="text"
            id="type"
          />
          <label htmlFor="duree">Début et Fin de la Formation</label>
          <input
            className="border-2 border-black rounded-lg pl-5 ml-5 bg-slate-400"
            onChange={(e) => {
              setDuree(e.target.value);
            }}
            type="text"
            id="duree"
          />
          <label htmlFor="ecole">École</label>
          <input
            className="border-2 border-black rounded-lg pl-5 ml-5 bg-slate-400"
            onChange={(e) => {
              setEcole(e.target.value);
            }}
            type="text"
            id="ecole"
          />
          <label htmlFor="infos">Description</label>
          <textarea
            className="bg-slate-400 border-2 border-black rounded-lg pl-5 ml-5"
            id="infos"
            onChange={(e) => {
              setInfos(e.target.value);
            }}
          ></textarea>
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
        <button className="btn-primary bg-yellow-500" onClick={addFormation}>
          <IoMdAddCircle size={24} />
        </button>
      )}
    </div>
  );
}
