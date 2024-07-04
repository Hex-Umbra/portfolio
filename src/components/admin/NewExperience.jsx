import React, { useState } from "react";
import { MdCancel } from "react-icons/md";
import { FaRegSave } from "react-icons/fa";
import { IoMdAddCircle } from "react-icons/io";

const BASE_URL = "http://localhost:3030/experiences ";

export default function NewExperience() {
  const [job, setJob] = useState("");
  const [mission, setMission] = useState("");
  const [company, setCompany] = useState("");
  const [duree, setDuree] = useState("");
  const [isAdd, setIsAdd] = useState(false);
  const [isBtnActive, setBtnActive] = useState(true);
  const makeNewExperience = (e) => {
    if (job !== "") {
      e.preventDefault();
      fetch(BASE_URL, {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ job, mission, company, duree }),
      }).then((res) => {
        res.json();
      });
    }
  };
  const addExperience = () => {
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
        <form className="form" onSubmit={makeNewExperience}>
          <label htmlFor="job">Poste</label>
          <input
            className="border-2 border-black rounded-lg pl-5 ml-5 bg-slate-400"
            onChange={(e) => {
              setJob(e.target.value);
            }}
            type="text"
            id="job"
          />
          <label htmlFor="duree">Dates d'emploi</label>
          <input
            className="border-2 border-black rounded-lg pl-5 ml-5 bg-slate-400"
            onChange={(e) => {
              setDuree(e.target.value);
            }}
            type="text"
            id="duree"
          />
          <label htmlFor="company">Compagnie</label>
          <input
            className="border-2 border-black rounded-lg pl-5 ml-5 bg-slate-400"
            onChange={(e) => {
              setCompany(e.target.value);
            }}
            type="text"
            id="company"
          />
          <label htmlFor="mission">Description</label>
          <textarea
            className="bg-slate-400 border-2 border-black rounded-lg pl-5 ml-5"
            id="mission"
            onChange={(e) => {
              setMission(e.target.value);
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
        <button className="btn-primary bg-yellow-500" onClick={addExperience}>
          <IoMdAddCircle size={24} />
        </button>
      )}
    </div>
  );
}
