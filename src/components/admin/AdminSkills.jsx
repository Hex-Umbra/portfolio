import React, { useEffect, useState } from "react";
import NewSkill from "./NewSkill";
import { enqueueSnackbar } from "notistack";
import { MdDelete } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { Link } from "react-router-dom";

const BASE_URL = "http://localhost:3030/competences";

export default function AdminSkills() {
  const [skill, setSkill] = useState([]);
  async function getSkills() {
    try {
      const res = await fetch(BASE_URL);
      const data = await res.json();
      setSkill(data);
      console.log(data);
      console.log(skill);
    } catch (err) {
      console.error(err);
    }
  }

  async function deleteSkill(id) {
    const res = await fetch(`${BASE_URL}/${id}`, {
      method: "DELETE",
    });
    if (res.ok) {
      enqueueSnackbar("Deleted With Success");
      getSkills();
    }
  }
  useEffect(() => {
    getSkills();
  }, []);
  return (
    <div className="grid content-center items-center justify-items-center my-5">
      <table>
        <tbody>
          {skill.map((item, index) => (
            <tr key={index}>
              <td className="px-2">
                <img className="w-3/4 h-3/4" src={item.img} alt="" />
              </td>
              <td className="px-2">{item.technologie}</td>
              <td className="px-2">{item.mastery}</td>
              <td className="px-2">
                <button
                  className="btn-danger basis-0"
                  onClick={() => deleteSkill(item._id)}
                >
                  <MdDelete />
                </button>
              </td>
              <td>
                <Link to={`/updateSkill/${item._id}`}>
                  {" "}
                  <FaRegEdit />
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <NewSkill/>
    </div>
  );
}
