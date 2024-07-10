import { useState } from "react";
import AdminContacts from "../components/admin/AdminContacts";
import AdminHobbies from "../components/admin/AdminHobbies";
import AdminLangues from "../components/admin/AdminLangues";
import AdminSkills from "../components/admin/AdminSkills";
import Login from "./Login";
import AdminFormations from "../components/admin/AdminFormations";
import AdminExperiences from "../components/admin/AdminExperiences";
import AdminProjects from "../components/admin/AdminProjects";

export default function Admin() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (username === localStorage.getItem("username") && password === localStorage.getItem("password")) {
      setIsLoggedIn(true);
    } else {
      alert("Vous n'avez pas accès a cette page veuillez réessayer")
    }
  }

  if (!isLoggedIn) {
    return (
      <Login
        setUserName={(e) => setUsername(e.target.value)}
        setPassword={(e) => setPassword(e.target.value)}
        handleSubmit={handleSubmit}
      />
    );
  }
  return (
    <>
      <div className="secondary-section">
        <AdminContacts />
      </div>
      <div className="secondary-section">
        <AdminSkills />
      </div>
      <div className="secondary-section">
        <AdminLangues />
      </div>
      <div className="secondary-section">
        <AdminHobbies />
      </div>
      <div className="secondary-section">
        <AdminFormations />
      </div>
      <div className="secondary-section">
        <AdminExperiences />
      </div>
      <div className="secondary-section">
        <AdminProjects />
      </div>

    </>
  );
}
