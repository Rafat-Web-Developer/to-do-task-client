// import './App.css';

import { Routes, Route } from "react-router-dom";
import RequireAuth from "./Pages/Auth/RequireAuth";
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
          <Route path="/" element={<Login></Login>}></Route>
          <Route
            path="/home"
            element={
              <RequireAuth>
                <Home></Home>
              </RequireAuth>
            }
          ></Route>
          <Route
            path="/completedTask"
            element={
              <RequireAuth>
                <CompletedTask></CompletedTask>
              </RequireAuth>
            }
          ></Route>
          <Route
            path="/todo"
            element={
              <RequireAuth>
                <ToDo></ToDo>
              </RequireAuth>
            }
          ></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/register" element={<Register></Register>}></Route>
        </Routes>
      </main>
    </>
  );
}

export default App;
