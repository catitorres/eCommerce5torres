import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./components/navBar";
import GetDatos from "./components/itemDetailContainer";
import data from "./components/itemDetail";
import './App.css';

function App() {
  return (
    <>
      <NavBar/>
      <h1 className="tituloProduct">PRODUCTOS</h1>
      <div className="d-flex justify-content-around d-flex flex-wrap">
        <GetDatos GetDatos={data}/>
      </div>
      
    </>
    
  );
}

export default App;
