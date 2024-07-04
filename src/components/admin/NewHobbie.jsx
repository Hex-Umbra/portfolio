import React, { useState } from "react";
import { IoMdAddCircle } from "react-icons/io";
import { MdCancel } from "react-icons/md";
import { FaRegSave } from "react-icons/fa";

const BASE_URL = import.meta.env.VITE_FETCH_URL;
const ROUTE_URL = `${BASE_URL}/loisirs`;

export default function NewHobbie() {
    const [loisir, setLoisir] = useState("");
  const [details, setDetails] = useState("");
  const [isAdd, setIsAdd] = useState(false);
  const [isBtnActive, setBtnActive] = useState(true);
  const makeNewLoisir = (e) => {
    e.preventDefault();
    if (loisir !== "") {
      fetch(ROUTE_URL, {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ loisir, details }),
      }).then((res) => {
        res.json();
      });
    }
  };
  const addLoisir = () => {
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
        <form className="form" onSubmit={makeNewLoisir}>
          <label htmlFor="loisir">Loisir</label>
          <input
            className="border-2 border-black rounded-lg pl-5 ml-5 bg-slate-400"
            onChange={(e) => {
              setLoisir(e.target.value);
            }}
            type="text"
            id="loisir"
          />
          <label htmlFor="details">Details</label>
          <input
            className="border-2 border-black rounded-lg pl-5 ml-5 bg-slate-400"
            onChange={(e) => {
              setDetails(e.target.value);
            }}
            type="text"
            id="details"
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
        <button className="btn-primary bg-yellow-500" onClick={addLoisir}>
          <IoMdAddCircle size={24} />
        </button>
      )}
    </div>
  );
}
