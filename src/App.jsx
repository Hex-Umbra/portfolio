import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Admin from "./pages/Admin.jsx";
import Login from "./pages/Login.jsx";
import NotFound from "./pages/NotFound.jsx";
import Navbar from "./components/Navbar.jsx";
import UpdateSkill from "./pages/UpdateSkill.jsx";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/admin" element={<Admin />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/updateSkill/:id" element={<UpdateSkill />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
