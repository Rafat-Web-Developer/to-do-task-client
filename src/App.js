// import './App.css';

import { Routes, Route } from "react-router-dom";
import CompletedTask from "./Pages/CompletedTask/CompletedTask";
import Home from "./Pages/Home/Home";
import Login from "./Pages/LoginAndRegister/Login";
import Register from "./Pages/LoginAndRegister/Register";
import Navbar from "./Pages/shared/Navbar";
import ToDo from "./Pages/ToDo/ToDo";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <main className="container my-4">
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route
            path="/completedTask"
            element={<CompletedTask></CompletedTask>}
          ></Route>
          <Route path="/todo" element={<ToDo></ToDo>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/register" element={<Register></Register>}></Route>
        </Routes>
      </main>
    </>
  );
}

export default App;
