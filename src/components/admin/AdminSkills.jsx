import React, { useEffect, useState } from "react";

const BASE_URL = "http://localhost:3030/loisirs";

export default function AdminSkills() {
  const [skill, setSkill] = useState([]);
  const [image, setImage] = useState([]);
  const [mastery, setMastery] = useState([]);
  async function getSkills() {
    const res = await fetch(BASE_URL);
    const data = await res.json();
    setSkill(data.skill)
    setImage(data.image)
    setMastery(data.mastery)
  }

  useEffect(() => {
    getSkills();
  }, []);
  return (
    <div>
      <form className="mt-10 border-2">
        <div className="m-10">
          <table>
            <tbody>
              {skill.map((item) => (
                <tr>
                  <td>{item.technologie}</td>
                  <td>{item.img}</td>
                  <td>{item.mastery}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </form>
    </div>
  );
}
