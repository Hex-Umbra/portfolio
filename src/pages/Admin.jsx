import { useState } from "react";
import AdminContacts from "../components/admin/AdminContacts";
import AdminHobbies from "../components/admin/AdminHobbies";
import AdminLangues from "../components/admin/AdminLangues";
import AdminSkills from "../components/admin/AdminSkills";
import Login from "./Login";

export default function Admin() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
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
    </>
  );
}
