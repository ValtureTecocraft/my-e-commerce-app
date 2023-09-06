import { Routes, Route } from "react-router-dom";
import Home from "./screens/Home";
import Login from "./screens/Login";
import Signup from "./screens/Signup";
import Navbar from "./components/Navbar";

function App() {
  // console.log("env from vite", import.meta.env.REACT_APP_JWT_SECRET);
  // console.log("env react app", process?.env?.REACT_APP_JWT_SECRET);
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
}

export default App;
