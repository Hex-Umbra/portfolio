import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const BASE_URL = "http://localhost:3030/formations/";

export default function UpdateFormation() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [type, setType] = useState("");
  const [infos, setInfos] = useState("");
  const [ecole, setEcole] = useState("");
  const [duree, setDuree] = useState("");
  const [enCours, setEnCours] = useState(false);
  const getFormations = async () => {
    try {
      const res = await fetch(BASE_URL + id);
      const data = await res.json();
      setType(data.type);
      setInfos(data.infos);
      setEcole(data.ecole);
      setDuree(data.duree);
      setEnCours(data.enCours);
    } catch (err) {
      console.log(err);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch(BASE_URL + id, {
      method: "PUT",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ type, infos, ecole, duree, enCours }),
    }).then((res) => {
      res.json();
      if (res.ok) getFormations();
    });
    navigate("/admin");
  };
  useEffect(() => {
    getFormations();
  }, []);
  return (
    <div className="secondary-section">
      <div>
        <form className="form" onSubmit={handleSubmit}>
          <label htmlFor="type">Nom Formation</label>
          <input
            className="border-2 border-black rounded-lg pl-5 ml-5 bg-slate-400"
            onChange={(e) => {
              setType(e.target.value);
            }}
            value={type}
            type="text"
            id="type"
          />
          <label htmlFor="duree">Début et Fin de la Formation</label>
          <input
            className="border-2 border-black rounded-lg pl-5 ml-5 bg-slate-400"
            onChange={(e) => {
              setDuree(e.target.value);
            }}
            value={duree}
            type="text"
            id="duree"
          />
          <label htmlFor="ecole">École</label>
          <input
            className="border-2 border-black rounded-lg pl-5 ml-5 bg-slate-400"
            onChange={(e) => {
              setEcole(e.target.value);
            }}
            value={ecole}
            type="text"
            id="ecole"
          />
          <label htmlFor="infos">Description</label>
          <textarea
            className="bg-slate-400 border-2 border-black rounded-lg pl-5 ml-5"
            id="infos"
            value={infos}
            onChange={(e) => {
              setInfos(e.target.value);
            }}
          ></textarea>
          <button className="btn-primary">Submit Changes</button>
        </form>
      </div>
    </div>
  );
}
