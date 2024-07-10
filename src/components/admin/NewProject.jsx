import React, { useState } from "react";
import { MdCancel } from "react-icons/md";
import { FaRegSave } from "react-icons/fa";
import { IoMdAddCircle } from "react-icons/io";

const BASE_URL = import.meta.env.VITE_FETCH_URL;
const ROUTE_URL = `${BASE_URL}/projects`;

export default function NewProject() {
  const [name, setName] = useState("");
  const [img, setImg] = useState("");
  const [link, setLink] = useState("");
  const [technologies, setTechnologie] = useState([]);
  const [description, setDescription] = useState("");
  const [isAdd, setIsAdd] = useState(false);
  const [isBtnActive, setBtnActive] = useState(true);
  const makeNewElements = (e) => {
    try {
      if (name !== "") {
        e.preventDefault();
        fetch(ROUTE_URL, {
          method: "POST",
          headers: { "Content-type": "application/json" },
          body: JSON.stringify({ name, img, link, technologies, description }),
        }).then((res) => {
          res.json();
        });
      }
    } catch (error) {
      console.log(error);
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
        <form className="form" onSubmit={makeNewElements}>
          <label htmlFor="name">Name Project</label>
          <input
            className="border-2 border-black rounded-lg pl-5 ml-5 bg-slate-400"
            onChange={(e) => {
              setName(e.target.value);
            }}
            type="text"
            id="name"
          />
          <label htmlFor="img">Chemin Relatif pour l'image</label>
          <input
            className="border-2 border-black rounded-lg pl-5 ml-5 bg-slate-400"
            onChange={(e) => {
              setImg(e.target.value);
            }}
            type="text"
            id="img"
          />
          <label htmlFor="lien">Lien de la page</label>
          <input
            className="border-2 border-black rounded-lg pl-5 ml-5 bg-slate-400"
            onChange={(e) => {
              setLink(e.target.value);
            }}
            type="text"
            id="lien"
          />
          <label htmlFor="techno1">1ere techno</label>
          <input
            className="border-2 border-black rounded-lg pl-5 ml-5 bg-slate-400"
            onChange={(e) => {
              technologies.push(e.target.value);
            }}
            type="text"
            id="techno1"
          />
          <label htmlFor="techno2">2eme techno</label>
          <input
            className="border-2 border-black rounded-lg pl-5 ml-5 bg-slate-400"
            onChange={(e) => {
              technologies.push(e.target.value);
            }}
            type="text"
            id="techno2"
          />
          <label htmlFor="techno3">3eme techno</label>
          <input
            className="border-2 border-black rounded-lg pl-5 ml-5 bg-slate-400"
            onChange={(e) => {
              technologies.push(e.target.value);
            }}
            type="text"
            id="techno3"
          />
          <label htmlFor="infos">Description</label>
          <textarea
            className="bg-slate-400 border-2 border-black rounded-lg pl-5 ml-5"
            id="infos"
            onChange={(e) => {
              setDescription(e.target.value);
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
