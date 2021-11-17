import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./components/navBar";
import ItemDetailContainer from "./components/itemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";
import './App.css';



function App() {
  return (
    <>
      <NavBar/>
      <h1 className="tituloProduct">PRODUCTOS</h1>
      {/* <div className="d-flex justify-content-around d-flex flex-wrap">
        <ItemListContainer/>
      </div> */}
      <ItemDetailContainer/>
    </>
    
  );
}

export default App;
