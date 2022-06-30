// import './App.css';

import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Navbar from "./Pages/shared/Navbar";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
      </Routes>
    </>
  );
}

export default App;
