// import './App.css';

import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Navbar from "./Pages/shared/Navbar";
import ToDo from "./Pages/ToDo/ToDo";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <main className="container my-4">
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/todo" element={<ToDo></ToDo>}></Route>
        </Routes>
      </main>
    </>
  );
}

export default App;
