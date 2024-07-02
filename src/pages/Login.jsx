import React from "react";

export default function Login({setUserName,setPassword,handleSubmit}) {
  return (
    <div className="secondary-section flex flex-col items-center">
      <h2 className="h2-primary w-1/5 mt-5">Login Page</h2>
      <form className="flex flex-col items-center" onSubmit={handleSubmit}>
        <input
          className="input-admin w-full py-3 text-2xl flex-grow-5"
          type="text"
          placeholder="Username"
          onChange={setUserName}
        />
        <input
          className="input-admin w-full py-3 text-2xl"
          type="password"
          placeholder="Password"
          onChange={setPassword}
        />
        <button className="btn-primary">Connexion</button>
      </form>
    </div>
  );
}
