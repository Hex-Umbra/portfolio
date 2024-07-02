import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const BASE_URL = "http://localhost:3030/competences/";

export default function UpdateSkill() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [technologie, setTechnologie] = useState("");
  const [img, setImg] = useState("");
  const [mastery, setMastery] = useState("");
  const getSkill = async () => {
    const res = await fetch(BASE_URL + id);
    const data = await res.json();
    console.log(data);
    setTechnologie(data.technologie);
    setImg(data.img);
    setMastery(data.mastery);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch(BASE_URL + id, {
      method: "PUT",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ technologie, img, mastery }),
    }).then((res) => {
      res.json();
      if (res.ok) getSkill();
    });
    navigate("/admin")
  };
  useEffect(() => {
    getSkill();
  }, []);

  return (
    <div className="secondary-section">
      <div>
        <form className="form" onSubmit={handleSubmit}>
          <label htmlFor="skill">Technologie</label>
          <input
            className="input-admin"
            type="text"
            id="skill"
            onChange={(e) => {
              setTechnologie(e.target.value);
            }}
            value={technologie}
          />
          <label htmlFor="img">Image</label>
          <input
            className="input-admin"
            type="text"
            id="img"
            onChange={(e) => {
              setImg(e.target.value);
            }}
            value={img}
          />
          <label htmlFor="mastery">Mastery</label>
          <input
            className="input-admin"
            type="text"
            id="mastery"
            onChange={(e) => {
              setMastery(e.target.value);
            }}
            value={mastery}
          />
          <button className="btn-primary" navigate>Submit Changes</button>
        </form>
      </div>
    </div>
  );
}
