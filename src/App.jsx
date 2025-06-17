import { useState } from "react";
import "./App.css";
import Login from "./Login.jsx";
import Dado from "./Dado.jsx";
import MaodeDado from "./MaodeDados.jsx";
import BoasVindas from "./BoasVindas.jsx";
import Pokemon from "./componentes/Pokemon.jsx"
import "./componentes/Pokemon.css";

function App() {
  return (
    <div>
      <h1>FSN5 - Full Stack</h1>
    {/*  <Login />
      <Dado />
      <MaodeDado/>
      <BoasVindas nome="Maida" idade="19"/> */}
      <Pokemon />
    </div>
  );
}

export default App;


